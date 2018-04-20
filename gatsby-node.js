const Remark = require(`remark`)

const path = require(`path`)

const { createFilePath } = require(`gatsby-source-filesystem`)
const { GraphQLString } = require('graphql')


function convertDateToUTC(date) {
    return new Date(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      date.getUTCHours(),
      date.getUTCMinutes(),
      date.getUTCSeconds(),
      )
}

const slugify = s =>
	s.toString().toLowerCase()
		.replace(/\s+/g, '-')           // Replace spaces with -
		.replace(/[^\w\-]+/g, '')       // Remove all non-word chars
		.replace(/\-\-+/g, '-')         // Replace multiple - with single -
		.replace(/^-+/, '')             // Trim - from start of text
		.replace(/-+$/, '')             // Trim - from end of text


exports.setFieldsOnGraphQLNodeType = ({ type }) => {
  if (type.name !== 'MarkdownRemark') {
    return {}
  }

  return Promise.resolve({
    slug: {
      type: GraphQLString,
      resolve: node => {
        const ast = Remark().parse(node.internal.content)
        const slug = slugify(ast.children[0].children[0].value)
        switch (node.fields.type) {
          case "blog":
            const dt = convertDateToUTC(new Date(node.fields.date))
            return ("/blog/" +
              dt.getFullYear().toString() + "/" +
              (dt.getMonth() + 1).toString() + "/" +
              (dt.getDate()).toString() + "/"
              + slug)
          case "case":
            return ("/cases/" + slug)
        }
			},
    },
  })
}

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
	const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const prefix = (`${__dirname}/src/markdown/`).length
    const src = node.fileAbsolutePath.substring(prefix)
    const type = path.dirname(src)

    if (type.substring(0, 5) == "blog/") {
      const year = path.basename(type)
      const name = path.basename(src)
      const dt = year + "-" + name.substring(0, name.length - 3)
			createNodeField({node, name: `date`, value: dt})
			createNodeField({node, name: `type`, value: "blog"})

    } else if (type == "cases") {
			createNodeField({node, name: `type`, value: "case"})

    } else if (type == "about") {
			createNodeField({node, name: `type`, value: "about"})

    } else {
			createNodeField({node, name: `type`, value: "."})
    }
	}
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              id
							slug
              headings {
                value
              }
							fields {
                type
								date
							}
              fileAbsolutePath
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `
  ).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      switch (node.fields.type) {
        case "about":
          createPage({
            path: node.frontmatter.slug,
            component: path.resolve(`./src/templates/about.js`),
            context: {
              slug: node.frontmatter.slug,
              reg: "/" + node.frontmatter.slug + "/",
              name: node.frontmatter.name,
            },
          })
          break

        case "blog":
          createPage({
            path: node.slug,
            component: path.resolve(`./src/templates/blog.js`),
            context: {
              pt: node.fileAbsolutePath.toString(),
            },
          })
          break

        case "case":
          createPage({
            path: node.slug,
            component: path.resolve(`./src/templates/case.js`),
            context: {
              pt: node.fileAbsolutePath.toString(),
            },
          })
          break

        default:
          console.log("SKIP", node.fileAbsolutePath, node.fields.type)
      }
    })
    resolve()
    })
  })
}
