import Post from "../components/post"
import Nav from "../components/nav"
import Footer from "../components/footer"

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
  <div style={{ margin: '0 auto', maxWidth: `960px` }}>
    <div style={{ margin: '0 1rem' }}>
      <Nav active="cases" />
      <Post slug={data.post.slug} htmlAst={data.post.htmlAst} />
    </div>
    <Footer />
  </div>
