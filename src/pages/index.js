import Img from "gatsby-image";
import Link from "gatsby-link"

import Layout from "../components/layout"

const Container = props =>
  <div
    css={{
      display: `grid`,
      gridColumnGap: `20px`,
      gridTemplateColumns: `repeat(auto-fill, minmax(280px, 1fr))`,
    }}
  >
    {props.children}
  </div>


const Item = props =>
  <div
    css={{
    }}
  >
    {props.children}
  </div>


export const pageQuery = graphql`
  query HeaderImageQuery {
    image_main: imageSharp(id: { regex: "/mast.png/" }) {
      sizes(maxWidth: 960, toFormat: JPG ) {
        ...GatsbyImageSharpSizes
      }
    },
    image_aboutus: imageSharp(id: { regex: "/about-us.jpg/" }) {
      sizes(maxWidth: 960, toFormat: JPG ) {
        ...GatsbyImageSharpSizes
      }
    },
    image_practiceareas: imageSharp(id: { regex: "/practice-areas.jpg/" }) {
      sizes(maxWidth: 960, maxHeight: 960, toFormat: JPG ) {
        ...GatsbyImageSharpSizes
      }
    },
    image_news: imageSharp(id: { regex: "/news.jpg/" }) {
      sizes(maxWidth: 960, maxHeight:960, cropFocus: ENTROPY, toFormat: JPG ) {
        ...GatsbyImageSharpSizes
      }
    },
  }
`


export default (props) =>
  <Layout active="home">
    <Img
      title="Two ladies, looking professional, knowledgeable and responsive."
      sizes={props.data.image_main.sizes}
    />
    <div style={{ margin: '0 1rem' }}>
    <h1 style={{ fontWeight: '300', marginTop: '25px', textAlign: 'center' }}>
      <b>Kosinski and Thiagaraj, LLP</b> is an <b>employment law</b> firm that
      provides <b>responsive</b> and <b>knowledgeable</b> legal services.
    </h1>
    <div>
      <p>
      Experiencing unlawful treatment at work harms both your work life and
      your personal life.
      </p>
      <p>
      Finding an advocate who will
      listen closely to your case and provide you with individual service is
      important.  The attorneys at Kosinski and Thiagaraj, LLP will attend to
      your concerns and will work hard to represent your interests.  Fees for
      most types of cases are on contingency, which means you do not pay any
      fees unless you collect damages.
      </p>

      <p style={{ textAlign: 'center' }}>Please contact us for a free phone consultation.</p>
    </div>

    <div style={{ padding: '20px', borderTop: '1px #eee solid' }} />

    <Container>
      <Item>
        <h2>About Us</h2>
        <Link to="/about-us">
        <Img
          style={{ border: 'black solid 3px', marginBottom: '20px' }}
          title="Two ladies, looking professional, yet fun!"
          sizes={props.data.image_aboutus.sizes}
        />
        </Link>
        <p>
        Alison Kosinski and Emily Thiagaraj have many years of experience
        handling complex employment matters.  Read more about their work and
        their unique skills:
        </p>

        <p><Link to="/alison-kosinski">Alison Kosinski &gt;</Link></p>
        <p><Link to="/emily-thiagaraj">Emily Thiagaraj &gt;</Link></p>
        <p><Link to="/testimonials">Testimonials &gt;</Link></p>
      </Item>
      <Item>
        <h2>Practice Areas</h2>
        <Link to="/practice-areas">
        <Img
          style={{ border: 'black solid 3px', marginBottom: '20px' }}
          title="Practice Areas"
          sizes={props.data.image_practiceareas.sizes}
        />
        </Link>
        <p>
        The experienced attorneys at Kosinski and Thiagaraj, LLP provide
        outstanding representation of employees in all areas of employment law:
        </p>

        <ul>
        <li>Unpaid Wages and Overtime</li>
        <li>Misclassification of Employees</li>
        <li>Discrimination</li>
        <li>Harassment</li>
        <li>Retaliation</li>
        <li>Family and Medical Leave</li>
        <li>Severance Agreements</li>
        <li>Wrongful Termination</li>
        </ul>
        <p><Link to="/practice-areas">Practice Areas &gt;</Link></p>
      </Item>
      <Item>
        <h2>Blog</h2>
        <Link to="/blog">
        <Img
          style={{ border: 'black solid 3px', marginBottom: '20px' }}
          title="Two ladies leaving court after professionally demolishing the opposition."
          sizes={props.data.image_news.sizes}
        />
        </Link>
        <p>
        We write about the newest developments in employment law here.
        </p>
        <p><Link to="/blog">Blog &gt;</Link></p>
      </Item>
    </Container>
    </div>
  </Layout>
