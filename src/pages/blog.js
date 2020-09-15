import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({ data }) => {
  const { nodes } = data.allContentfulBlog
  console.log("nodes: ", nodes)

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Welcome to blog</h1>
      {nodes.map(post => (
        <div key={post.id}>
          <h2>{post.titlePost}</h2>
          <p>{post.textPost}</p>
        </div>
      ))}

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  {
    allContentfulBlog {
      nodes {
        id
        titlePost
        textPost
      }
    }
  }
`
