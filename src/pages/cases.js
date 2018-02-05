import Layout from "../components/layout"
import Post from "../components/post"


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
  return (
    <Layout active="cases">
    <div style={{ margin: '0 1rem' }}>
			{
				posts.map(({ node }) => (
					<Post slug={node.slug} htmlAst={node.htmlAst} />
				))
			}
    </div>
    </Layout>
  )
}
