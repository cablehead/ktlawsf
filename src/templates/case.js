import Post from "../components/post"
import Layout from "../components/layout"

export const pageQuery = graphql `
  query CaseQuery($pt: String!) {
    post: markdownRemark(fileAbsolutePath: {eq: $pt}) {
      slug
      htmlAst
      fields {
        date
      }
    },
  }
`
export default ({ data }) =>
  <Layout active="cases">
    <div style={{ margin: '0 1rem' }}>
      <Post slug={data.post.slug} htmlAst={data.post.htmlAst} />
    </div>
  </Layout>
