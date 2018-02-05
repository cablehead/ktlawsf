import Img from "gatsby-image";

import Layout from "../components/layout"

export const pageQuery = graphql `
  query PracticeAreasQuery {
    markdown_html: markdownRemark(id: { regex: "/practice-areas/"}) {
        html
    },
    image: imageSharp(id: { regex: "/practice-areas.jpg/" }) {
      sizes(maxWidth: 960, maxHeight:320, toFormat: JPG ) {
        ...GatsbyImageSharpSizes
      }
    },
  }
`

export default ({ data }) =>
  <Layout active="practice-areas">
    <Img
      title="Tools of the trade for two professional Lady Lawyers"
      sizes={data.image.sizes}
    />
    <div style={{ margin: '0 1rem' }}>
      <div style={{ marginTop: '25px' }} dangerouslySetInnerHTML={{ __html: data.markdown_html.html }} />
    </div>
  </Layout>
