import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

export default function ProjectPost({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  let featuredImgFluid = frontmatter.featuredImage.childImageSharp.fluid
  return (
      <Layout>
        <div className="project-post-container">
          <div className="project-post">
            <h1>{frontmatter.title}</h1>
              <div className="featuredImage-container">
                <div className="project-post-featuredImage">
                  <Img fluid={featuredImgFluid}/>
                </div>
              </div>
            <div className="project-post-content"
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
        slug
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
