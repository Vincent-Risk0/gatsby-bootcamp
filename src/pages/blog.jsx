//DATE : 9/17/20

import React from "react"
import Layout from "../components/Layout"
import { Link, graphql, useStaticQuery } from "gatsby"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const renderPosts = data.allMarkdownRemark.edges.map((item, index) => {
    return (
      <li key={index}>
        <h2>
          <Link to={`/blog/${item.node.fields.slug}`}>
            {item.node.frontmatter.title}
          </Link>{" "}
        </h2>
        <p>{item.node.frontmatter.date}</p>
      </li>
    )
  })

  return (
    <Layout className={"blog"}>
      <h1>Blog</h1>

      <ul>{renderPosts}</ul>
    </Layout>
  )
}
export default BlogPage
