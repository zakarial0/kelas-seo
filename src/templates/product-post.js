import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function ProductTemplate({ data }) {
  const product = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-6 px-4 sm:py-10 sm:px-6 lg:px-4">

        {/* JUDUL */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-semibold text-[#2E8B57] leading-tight">
          {product.title}
        </h1>

        {/* DESKRIPSI SINGKAT */}
        <p className="mt-2 text-gray-600 font-lato text-sm sm:text-base">
          {product.description}
        </p>

        {/* GAMBAR PRODUK */}
        {product.featuredimage?.publicURL && (
          <img
            src={product.featuredimage.publicURL}
            alt={product.title}
            className="
              rounded-xl mt-6 w-full 
              max-h-[320px] sm:max-h-[420px] lg:max-h-[500px] 
              object-cover shadow-sm
            "
          />
        )}

        {/* KONTEN DETAIL */}
        <div
          className="
            mt-8 prose prose-sm sm:prose-base lg:prose-lg
            max-w-none prose-img:rounded-xl
          "
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
