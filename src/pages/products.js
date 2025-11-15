import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default function ProductList({ data }) {
  const products = data.allMarkdownRemark.edges

  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-poppins font-semibold text-[#2E8B57] mb-6">
          Produk Kami
        </h1>

        <div className="space-y-5">
          {products.map(({ node }) => (
            <Link
              key={node.id}
              to={node.fields.slug}
              className="group flex items-center justify-between border-b pb-2 hover:border-[#2E8B57]"
            >
              <span className="font-lato text-gray-800 group-hover:text-[#2E8B57] flex-1 truncate">
                {node.frontmatter.title}
              </span>

              <span className="text-xs font-lato text-gray-500">
                {node.frontmatter.price}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProductList {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "product-post" } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            price
          }
        }
      }
    }
  }
`
