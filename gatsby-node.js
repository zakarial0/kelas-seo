const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    const parent = getNode(node.parent)

    const isProduct = parent.sourceInstanceName === "products"

    createNodeField({
      name: `slug`,
      node,
      value: isProduct ? `/products${slug}` : slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // =====================
  // BLOG PAGES
  // =====================
  const blogResult = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      ) {
        edges {
          node {
            id
            fields { slug }
          }
        }
      }
    }
  `)

  blogResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`src/templates/blog-post.js`),
      context: {
        id: node.id, // BLOG MUST USE internal node.id !!!
      },
    })
  })

  // =====================
  // PRODUCT PAGES
  // =====================
  const productResult = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "product-post" } } }
      ) {
        edges {
          node {
            frontmatter {
              id
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  productResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`src/templates/product-post.js`),
      context: {
        id: node.frontmatter.id, // Product uses frontmatter.id
      },
    })
  })
}
