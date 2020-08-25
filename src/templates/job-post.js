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
      <div id="textbox">
      <div style={{float:'left', fontWeight:'bold', fontSize:'26px'}}>{frontmatter.title}</div>
      <div style={{float:'right', fontSize:'24px'}}>{frontmatter.startdate}
      &ndash;
    {frontmatter.enddate && frontmatter.enddate}
    {frontmatter.enddate === null && "Present"}</div>
      </div>
      <div style={{clear:'both'}}></div>
      <div style={{float:'left', fontSize:'22px', fontStyle:'italic'}}>{frontmatter.company}</div>
      <div style={{clear:'left'}}></div>
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
        company
        title
      }
    }
  }
`
