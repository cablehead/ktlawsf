import Layout from "../components/layout"


export const pageQuery = graphql `
  query ZhongwenQuery {
    markdown_html: markdownRemark(id: { regex: "/zhongwen/"}) {
        html
    },
  }
`

export default ({ data }) =>
  <Layout active="zhongwen">
    <div style={{ margin: '0 1rem' }}>
      <div style={{ marginTop: '25px' }} dangerouslySetInnerHTML={{ __html: data.markdown_html.html }} />
    </div>
  </Layout>
