import Img from "gatsby-image";

import Post from "../components/post"
import Nav from "../components/nav"
import Footer from "../components/footer"


export const pageQuery = graphql `
  query MainBlogQuery {
    posts: allMarkdownRemark(
			sort: {order: DESC, fields: [id]},
			filter: {id: {regex: "/blog/"}}
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
	console.log(posts)
  return <div style={{ margin: '0 auto', maxWidth: `960px` }}>
    <div style={{ margin: '0 1rem' }}>
			<Nav>
			</Nav>
			<Img
				title="Tools of the trade for two professional Lady Lawyers"
				sizes={data.image.sizes}
			/>
			{
				posts.map(({ node }) => (
					<Post slug={node.slug} htmlAst={node.htmlAst} date={node.fields.date} />
				))
			}
    </div>
    <Footer />
  </div>
	}
