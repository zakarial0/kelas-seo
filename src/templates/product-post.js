import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function ProductTemplate({ data }) {
  const product = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-10 px-4">

        <h1 className="text-3xl font-poppins font-semibold text-[#2E8B57]">
          {product.title}
        </h1>

        <p className="mt-2 text-gray-600 font-lato">{product.description}</p>

        {product.featuredimage && (
          <img
            src={product.featuredimage}
            alt={product.title}
            className="rounded-xl mt-6"
          />
        )}

        <div
          className="mt-8 prose"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProductPost($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
        price
        category
        featuredimage {
          childImageSharp {
            gatsbyImageData(width: 900, quality: 90)
          }
          publicURL
        }
      }
    }
  }
`