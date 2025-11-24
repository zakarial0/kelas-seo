import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default function ProductTemplate({ data }) {
  const product = data.markdownRemark.frontmatter
  const html = data.markdownRemark.html

  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-10 px-4">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-poppins font-semibold text-[#2E8B57]">
          {product.title}
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-2 text-gray-700 font-lato md:text-lg">
          {product.description}
        </p>

        {/* PRODUCT IMAGE */}
        {product.featuredimage?.publicURL && (
          <div className="w-full h-60 md:h-72 rounded-xl overflow-hidden mt-6 shadow-sm">
            <img
              src={product.featuredimage.publicURL}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* MARKDOWN CONTENT */}
        <div
          className="product-content mt-10 font-poppins"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {/* CTA + BACK BUTTON (1 div, sejajar) */}
        <div className="mt-12 bg-[#A3D1B4] p-6 md:p-8 rounded-xl text-center text-white">

          <h3 className="text-xl md:text-2xl font-poppins font-semibold text-[#2E8B57]">
            Tertarik dengan Produk Ini?
          </h3>
          <p className="mt-2 text-sm md:text-base font-lato text-[#2E8B57]">
            Hubungi kami untuk informasi lengkap atau pemesanan grosir.
          </p>

          {/* Buttons Wrapper */}
          <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">

            {/* Back Button */}
            <Link
              to="/products"
              className="w-full md:w-auto px-6 py-3 rounded-xl bg-[#8B4513] text-white 
                        font-poppins hover:bg-[#6d3410] transition"
            >
              ← Kembali ke Produk
            </Link>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/6281312257583"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-6 py-3 rounded-xl bg-[#2E8B57] text-white 
                        font-poppins hover:bg-[#246c45] transition"
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
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
        price
        category
      }
    }
  }
`
