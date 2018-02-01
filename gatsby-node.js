const Remark = require(`remark`)

const path = require(`path`)

const { createFilePath } = require(`gatsby-source-filesystem`)
const { GraphQLString } = require('graphql')


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
				if (node.fields && node.fields.typ == "blog") {
					const ast = Remark().parse(node.internal.content)
					const slug = slugify(ast.children[0].children[0].value)
          const dt = new Date(node.fields.date)
          return ("/blog/" +
            dt.getFullYear().toString() + "/" +
            (dt.getMonth() + 1).toString() + "/" +
            (dt.getDate() + 1).toString() + "/"
            + slug)
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
    const typ = path.dirname(src)

    if (typ.substring(0, 5) == "blog/") {
      const year = path.basename(typ)
      const name = path.basename(src)
      const dt = year + "-" + name.substring(0, name.length - 3)
			createNodeField({node, name: `date`, value: dt})
			createNodeField({node, name: `typ`, value: "blog"})
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

        const prefix = (`${__dirname}/src/markdown/`).length
        const src = node.fileAbsolutePath.substring(prefix)
        const typ = path.dirname(src)

        if (typ == "about") {
          createPage({
            path: node.frontmatter.slug,
            component: path.resolve(`./src/templates/about.js`),
            context: {
              slug: node.frontmatter.slug,
              reg: "/" + node.frontmatter.slug + "/",
              name: node.frontmatter.name,
            },
          })

        } else if (typ.substring(0, 4) == "blog") {
          createPage({
            path: node.slug,
            component: path.resolve(`./src/templates/blog.js`),
            context: {
              pt: node.fileAbsolutePath.toString(),
            },
          })

        } else {
          console.log("SKIP", typ, src, typ.substring(1, 4))
        }
      })
      resolve()
    })
  })
}
