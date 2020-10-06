import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout-blog"
import SEO from "../components/seo"
import Img from "gatsby-image"


const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <div className="post-list">
        {posts.map(post => (
          <div key={post.node.id} className="post-list__item">
            <div className="post-list__thumbnail">
	    <Link to={post.node.frontmatter.slug}>
	    <Img fluid={post.node.frontmatter.featuredImage.childImageSharp.fluid}/>
	    </Link>
	    </div>
	    <div className="post-list__content">
	     <Link to={post.node.frontmatter.slug}>
	    <h2>{post.node.frontmatter.title}</h2>
	    </Link>
              <div className="post-list__excerpt">{post.node.excerpt}</div>
            </div>
	    </div>
        ))}
      </div>
    </Layout>
  );
};

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {fileAbsolutePath: {regex: "/content/blog/"}}
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          frontmatter {
            slug
            title
            date
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
    }
  }
`
