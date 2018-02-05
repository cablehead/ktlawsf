import Img from "gatsby-image";

import Post from "../components/post"
import Layout from "../components/layout"


export const pageQuery = graphql `
  query MainBlogQuery {
    posts: allMarkdownRemark(
			sort: {order: DESC, fields: [id]},
			filter: {fields: {type : {eq: "blog"}} },
		) {
			edges {
				node {
					slug
					htmlAst
					fields {
						date
					}
				}
			}
    },
    image: imageSharp(id: { regex: "/blog.jpg/" }) {
      sizes(maxWidth: 960, maxHeight:320, toFormat: JPG ) {
        ...GatsbyImageSharpSizes
      }
    },
  }
`

export default ({ data }) => {
	const posts = data.posts.edges
  return (
		<Layout active="blog">
		<Img
			title="Tools of the trade for two professional Lady Lawyers"
			sizes={data.image.sizes}
		/>
    <div style={{ margin: '0 1rem' }}>
			{
				posts.map(({ node }) => (
					<Post slug={node.slug} htmlAst={node.htmlAst} date={node.fields.date} />
				))
			}
    </div>
  </Layout>
  )
}
