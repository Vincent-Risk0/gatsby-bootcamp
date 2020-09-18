//DATE : 9/17/20

import React from "react"
import Layout from "../components/Layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import blogStyles from "./blog.module.scss"

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
      <li key={index} className={blogStyles.post}>
        <Link to={`/blog/${item.node.fields.slug}`}>
          <h2>{item.node.frontmatter.title}</h2>
          <p>{item.node.frontmatter.date}</p>
        </Link>
      </li>
    )
  })

  return (
    <Layout className={"blog"}>
      <h1>Blog</h1>

      <ul className={blogStyles.posts}>{renderPosts}</ul>
    </Layout>
  )
}
export default BlogPage
