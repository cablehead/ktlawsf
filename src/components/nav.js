import { css } from 'glamor'

import logo from "../images/logo.png"

import Link from "gatsby-link"


const Container = props =>
  <div
    css={{
      '@media (max-width: 599px)': {
        display: `grid`,
        gridTemplateColumns: `auto`,
      },
      '@media (min-width: 600px)': {
        display: `grid`,
        gridColumnGap: `30px`,
        gridTemplateColumns: `33% auto`,
      },
    }}
  >
    {props.children}
  </div>


const style = css({
  alignSelf: 'end',
  fontFamily: 'Lato',
  fontWeight: 300,
  marginBottom: '25px',
  fontSize:'80%',
  ' a': {
    marginRight: '10px',
    display: 'inline-block',
  },
  ' a:link,  a:visited': {
    color: "hsla(0, 0%, 0%, 0.6)",
  },
  ' a:hover': {
    color: '#0083bf',
  },
})

export default ({ children }) =>
  <Container>
    <div style={{ }}>
			<Link to="/">
      <img src={ logo } style={{ marginBottom: 0 }}/>
			</Link>
    </div>

    <div className={`${style}`}>
      <Link to="/">HOME</Link>
      <Link to="/about-us">ABOUT US</Link>
      <Link to="/practice-areas">PRACTICE AREAS</Link>
      <Link to="/cases">CASES</Link>
      <Link to="/blog">BLOG</Link>
      <Link to="/contact-us">CONTACT US</Link>
      <Link to="/zhongwen">中文</Link>
    </div>

    {children}
  </Container>

