import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Projects" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.frontmatter.slug
        return (

          <article key={node.frontmatter.slug}>
            <header>
              <h3>
                <Link style={{ boxShadow: `none` }} to={node.frontmatter.slug}>
            {title}

          </Link>
	    	   
              </h3>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default ProjectIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/content/projects/"}}
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
