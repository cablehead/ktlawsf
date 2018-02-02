import Img from "gatsby-image";

import Nav from "../components/nav"
import Footer from "../components/footer"


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
  <div style={{ margin: '0 auto', maxWidth: `960px` }}>
    <div style={{ margin: '0 1rem' }}>
			<Nav active="practice-areas" />
			<Img
				title="Tools of the trade for two professional Lady Lawyers"
				sizes={data.image.sizes}
			/>
			<div style={{ marginTop: '25px' }} dangerouslySetInnerHTML={{ __html: data.markdown_html.html }} />
    </div>
    <Footer />
  </div>
