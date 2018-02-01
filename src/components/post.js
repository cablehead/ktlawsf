const _ = require(`lodash`)
import { css } from 'glamor'
import React from "react";
import toH from 'hast-to-hyperscript'
import Link from "gatsby-link"

function convertDateToUTC(date) { 
    return new Date(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      date.getUTCHours(),
      date.getUTCMinutes(),
      date.getUTCSeconds(),
      )
}

const style = css({
  ' small a:link,  small a:visited': {
    color: "hsla(0, 0%, 0%, 0.4)",
  },
  ' small a:hover': {
    color: '#0083bf',
  },
	' h2': {
		margin:0
	}
})

const PostedOn = (props) => {
  const dt = convertDateToUTC(new Date(props.date))
	return <p>
			<small>
			<Link to={props.slug}>
			Posted by Alison Kosinski
			on { dt.toLocaleString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }) }
			</Link>
		</small>
		</p>
}


const Post = (props) => {
	const AST = toH(React.createElement, props.htmlAst)
	const header = _.clone(AST.props.children[0])
	header.type = "h2"
	console.log(header)
	AST.props.children[0] = <Link to={ props.slug }>{ header }</Link>
	AST.props.children.splice(1, 0, <PostedOn slug={ props.slug } date={ props.date } />)
  return <div className={ style } style={{ marginTop: '25px' }}>{ AST }</div>
}


export default Post
