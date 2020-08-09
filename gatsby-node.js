const path = require(`path`)
//const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const jobPost = path.resolve(`./src/templates/job-post.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
              contentType
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (node.frontmatter.contentType === 'blog') {
        createPage({
          path: node.frontmatter.slug,
          component: blogPost,
          context: {
              slug: node.frontmatter.slug,
          },
        })
      }
      if (node.frontmatter.contentType === 'job') {
        createPage({
          path: node.frontmatter.slug,
          component: jobPost,
          context: {
            slug: node.frontmatter.slug,}
        })
      }
    })
  })
}

exports.onCreateNode =({ node, getNode, actions }) => {
    if (node.internal.type === 'MarkdownRemark') {
        const { createNodeField } = actions;
        node.collection = getNode(node.parent).sourceInstanceName;
    }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    createNodeField({
      name: `slug`,
      node,
    })
  }
}

