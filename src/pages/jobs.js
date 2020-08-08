import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const JobIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All jobs" />
      <h1>Professional experience</h1>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.frontmatter.slug
        return (
          <article key={node.frontmatter.slug}>
            <header>
            <h3>
	    <div id="textbox">
                <p class="alignleft"><Link style={{ boxShadow: `none` }} to={node.frontmatter.slug}>
                  {title}
          </Link></p>
	    <p class="alignright">{node.frontmatter.startdate}
	    &ndash;
	    {node.frontmatter.enddate && node.frontmatter.enddate}
	  {node.frontmatter.enddate === null && "Present"}</p>
	    </div>
	    <div style={{clear:'both'}}></div>
              </h3>
	    <div style={{float:'left'}}>{node.frontmatter.company}</div>
            </header>
	    <div style={{clear:'left'}}></div>
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

export default JobIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___enddate], order: DESC }
      filter: {fileAbsolutePath: {regex: "/jobs/"}}
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            slug
          }
          frontmatter {
            startdate(formatString: "MMMM YYYY")
            enddate(formatString: "MMMM YYYY")
            title
            company
          }
        }
      }
    }
  }
`
