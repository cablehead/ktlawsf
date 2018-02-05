import Img from "gatsby-image";

import Post from "../components/post"
import Layout from "../components/layout"

export const pageQuery = graphql `
  query BlogQuery($pt: String!) {
    post: markdownRemark(fileAbsolutePath: {eq: $pt}) {
      slug
      htmlAst
      fields {
        date
      }
    },
    image: imageSharp(id: { regex: "/blog.jpg/" }) {
      sizes(maxWidth: 960, maxHeight:320, toFormat: JPG ) {
        ...GatsbyImageSharpSizes
      }
    },
  }
`
export default ({ data }) => 
  <Layout active="blog">
    <Img sizes={data.image.sizes} />
    <div style={{ margin: '0 1rem' }}>
      <Post slug={data.post.slug} htmlAst={data.post.htmlAst} date={data.post.fields.date} />
    </div>
  </Layout>
