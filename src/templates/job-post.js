import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function JobPost({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
      <Layout>
      <div className="job-post-container">
      <div className="job-post">
      <h1>{frontmatter.title}</h1>
      <h1>{frontmatter.startdate}</h1>
      <div
            className="job-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
      />
      </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        startdate(formatString: "MMMM DD, YYYY")
        enddate(formatString: "MMMM DD, YYYY")
        jobseries
        slug
        title
      }
    }
  }
`
