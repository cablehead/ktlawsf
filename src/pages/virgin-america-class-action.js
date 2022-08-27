import Img from "gatsby-image";

import Layout from "../components/layout"

export const pageQuery = graphql `
  query PracticeAreasQuery {
    markdown_html: markdownRemark(id: { regex: "/virgin-america-class-action/"}) {
        html
    },
    image: imageSharp(id: { regex: "/virgin-america.jpg/" }) {
      sizes(maxWidth: 960, maxHeight:320, toFormat: JPG ) {
        ...GatsbyImageSharpSizes
      }
    },
  }
`

export default ({ data }) =>
  <Layout active="virgin-america-class-action">
      <h1>Practice Areas</h1>
      <Img
      sizes={data.image.sizes}
    />
    <div style={{ margin: '0 1rem' }}>
      <div style={{ marginTop: '25px' }} dangerouslySetInnerHTML={{ __html: data.markdown_html.html }} />
    </div>
  </Layout>
