import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

export default function BlogPost({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  let featuredImgFluid = frontmatter.featuredImage.childImageSharp.fluid
  return (
      <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <Img fluid={featuredImgFluid} />
      <p style={{margin:`1cm`}}></p>
          <div
            className="blog-post-content"
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
        date(formatString: "MMMM DD, YYYY")
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
