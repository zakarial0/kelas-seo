import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function ProductTemplate({ data }) {

  // Prevent error if markdownRemark is null
  if (!data?.markdownRemark) {
    return (
      <Layout>
        <div className="max-w-3xl mx-auto py-20 px-4 text-center">
          <h1 className="text-3xl font-bold text-red-600">Product Not Found</h1>
          <Link
            to="/products"
            className="mt-6 inline-block px-6 py-3 bg-[#2E8B57] text-white rounded-xl"
          >
            ← Back to Products
          </Link>
        </div>
      </Layout>
    )
  }

  const { frontmatter, html } = data.markdownRemark
  const imageData = getImage(frontmatter.featuredimage?.childImageSharp)

  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-10 px-4">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-poppins font-semibold text-[#2E8B57]">
          {frontmatter.title}
        </h1>

        {/* Description */}
        <p className="mt-2 text-gray-700 font-lato md:text-lg">
          {frontmatter.description}
        </p>

        {/* PRODUCT IMAGE */}
        {imageData ? (
          <div className="w-full h-60 md:h-72 rounded-xl overflow-hidden mt-6 shadow">
            <GatsbyImage
              image={imageData}
              alt={frontmatter.title}
              className="w-full h-full object-cover"
            />
          </div>
        ) : frontmatter.featuredimage?.publicURL ? (
          <div className="w-full h-60 md:h-72 rounded-xl overflow-hidden mt-6 shadow">
            <img
              src={frontmatter.featuredimage.publicURL}
              alt={frontmatter.title}
              className="w-full h-full object-cover"
            />
          </div>
        ) : null}

        {/* MARKDOWN CONTENT */}
        <div
          className="product-content mt-10 font-poppins"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {/* CTA + Buttons */}
        <div className="mt-12 bg-[#A3D1B4] p-6 md:p-8 rounded-xl text-center">

          <h3 className="text-xl md:text-2xl font-poppins font-semibold text-[#2E8B57]">
            Tertarik dengan Produk Ini?
          </h3>

          <p className="mt-2 text-sm md:text-base font-lato text-[#2E8B57]">
            Hubungi kami untuk informasi lengkap atau pemesanan grosir.
          </p>

          {/* BOTTON BUTTONS */}
          <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">

            {/* Back Button */}
            <Link
              to="/products"
              className="px-6 py-3 rounded-xl bg-[#8B4513] text-white 
              font-poppins hover:bg-[#6d3410] transition w-full md:w-auto text-center"
            >
              ← Kembali ke Produk
            </Link>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/6281312257583"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#2E8B57] text-white 
              font-poppins hover:bg-[#246c45] transition w-full md:w-auto text-center"
            >
              Hubungi via WhatsApp
            </a>

          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProductPost($id: String!) {
    markdownRemark(frontmatter: { id: { eq: $id } }) {
      html
      frontmatter {
        id
        title
        description
        price
        category
        featuredimage {
            childImageSharp {
              gatsbyImageData(width: 600, placeholder: BLURRED)
            }
          }
      }
    }
  }
`
