import Img from "gatsby-image"

import Layout from "../components/layout"
import OneAndTwoThirds from "../components/oneandtwothirds"


export const pageQuery = graphql `
  query AboutQuery($slug: String!, $reg: String!) {
		markdown_html: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
			html
		},
    image: imageSharp(id: { regex: $reg }) {
      sizes(maxWidth: 600, maxHeight:800, cropFocus: ENTROPY, toFormat: JPG ) {
        ...GatsbyImageSharpSizes
      }
		},
  }
`

export default ({ data }) =>
  <Layout active="about-us">
    <div style={{ margin: '0 1rem' }}>
    <OneAndTwoThirds>
      <div style={{ marginBottom: '1.45rem' }}>
      <Img
        title="Lady Lawyer, looking very professional."
        sizes={data.image.sizes}
      />
      </div>
      <div dangerouslySetInnerHTML={{ __html: data.markdown_html.html }} />
    </OneAndTwoThirds>
    </div>
  </Layout>
