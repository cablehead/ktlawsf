import Post from "../components/post"
import Nav from "../components/nav"
import Footer from "../components/footer"


export const pageQuery = graphql `
  query MainCasesQuery {
    posts: allMarkdownRemark(
			sort: {order: DESC, fields: [id]},
			filter: {fields: {type : {eq: "case"}} },
		) {
			edges {
				node {
					slug
					htmlAst
				}
			}
    },
  }
`


export default ({ data }) => {
	const posts = data.posts.edges
  return <div style={{ margin: '0 auto', maxWidth: `960px` }}>
    <Nav active="cases" />
    <div style={{ margin: '0 1rem' }}>
			{
				posts.map(({ node }) => (
					<Post slug={node.slug} htmlAst={node.htmlAst} />
				))
			}
    </div>
    <Footer />
  </div>
	}
