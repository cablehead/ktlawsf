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
})

const normal = css({
  marginRight: '10px',
  display: 'inline-block',
  color: "hsla(0, 0%, 0%, 0.6)",
  ':hover': {
    color: '#0083bf',
  },
})

const active = css({
  marginRight: '10px',
  display: 'inline-block',
  ':link,  :visited': {
    fontWeight: 700,
    color: '#0083bf',
  },
})

export default (props) =>
  <Container>
    <div style={{ }}>
      <Link to="/">
      <img src={ logo } style={{ marginBottom: 0 }}/>
      </Link>
    </div>

    <div className={`${style}`}>
      <Link className={ props.active == "home" ? active : normal } to="/">HOME</Link>
      <Link className={ props.active == "about-us" ? active : normal } to="/about-us">ABOUT US</Link>
      <Link className={ props.active == "practice-areas" ? active : normal } to="/practice-areas"> PRACTICE AREAS</Link>
      <Link className={ props.active == "cases" ? active : normal } to="/cases">CASES</Link>
      <Link className={ props.active == "blog" ? active : normal } to="/blog">BLOG</Link>
      <Link className={ props.active == "contact-us" ? active : normal } to="/contact-us">CONTACT US</Link>
      <Link className={ props.active == "zhongwen" ? active : normal } to="/zhongwen">中文</Link>
    </div>

    {props.children}
  </Container>
