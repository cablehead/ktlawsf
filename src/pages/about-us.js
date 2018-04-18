import Img from "gatsby-image";
import Link from "gatsby-link"

import Layout from "../components/layout"
import Container from "../components/L1-1"


export const pageQuery = graphql`
  query AboutUsQuery {
    image_alison: imageSharp(id: { regex: "/alison/" }) {
      sizes(maxWidth: 960, maxHeight: 960, cropFocus: ENTROPY, toFormat: JPG ) {
        ...GatsbyImageSharpSizes
      }
    },
    image_emily: imageSharp(id: { regex: "/emily/" }) {
      sizes(maxWidth: 960, maxHeight: 960, cropFocus: ENTROPY, toFormat: JPG ) {
        ...GatsbyImageSharpSizes
      }
    },
    image_testimonials: imageSharp(id: { regex: "/testimonials/" }) {
      sizes(maxWidth: 960, maxHeight: 960, cropFocus: ENTROPY, toFormat: JPG ) {
        ...GatsbyImageSharpSizes
      }
    },
  }
`

export default (props) =>
  <Layout active="about-us">
    <div style={{ margin: '0 1rem' }}>
    <h1>About Us</h1>
    <Container>
    <div>
      <Link to="/alison-kosinski">
      <Img
        style={{ border: 'black solid 3px', marginBottom: '20px' }}
        sizes={props.data.image_alison.sizes}
      />
      </Link>
      <p><Link to="/alison-kosinski">Alison Kosinski &gt;</Link></p>
    </div>
    <div>
      <Link to="/emily-thiagaraj">
      <Img
        style={{ border: 'black solid 3px', marginBottom: '20px' }}
        sizes={props.data.image_emily.sizes}
      />
      </Link>
      <p><Link to="/emily-thiagaraj">Emily Thiagaraj &gt;</Link></p>
    </div>
    <div>
      <Link to="/testimonials">
      <Img
        style={{ border: 'black solid 3px', marginBottom: '20px' }}
        sizes={props.data.image_testimonials.sizes}
      />
      </Link>
      <p><Link to="/testimonials">Testimonials &gt;</Link></p>
    </div>
    </Container>
    </div>
  </Layout>
