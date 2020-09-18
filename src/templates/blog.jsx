//DATE : 9/18/20

import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = props => {
  const data = props.data.markdownRemark
  return (
    <Layout className={"blog"}>
      <h1>{data.frontmatter.title}</h1>
      <p>{data.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: data.html }} />
    </Layout>
  )
}
export default Blog
