import Nav from "../components/nav"
import Footer from "../components/footer"


export const pageQuery = graphql `
  query ZhongwenQuery {
    markdown_html: markdownRemark(id: { regex: "/zhongwen/"}) {
        html
    },
  }
`

export default ({ data }) =>
  <div style={{ margin: '0 auto', maxWidth: `960px` }}>
    <div style={{ margin: '0 1rem' }}>
        <Nav />
        <div style={{ marginTop: '25px' }} dangerouslySetInnerHTML={{ __html: data.markdown_html.html }} />
    </div>
    <Footer />
  </div>
