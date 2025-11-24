import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  const date = new Date(post.frontmatter.date)
  const options = { year: "numeric", month: "short", day: "numeric" }
  const formattedDate = date.toLocaleDateString("en-US", options)

  return (
    <Layout>
      <Seo title={post.frontmatter.title} />

      <div className="max-w-3xl mx-auto py-10 px-4 font-lato">

        {/* Judul */}
        <h1 className="text-3xl font-poppins font-semibold text-[#2E8B57] leading-tight">
          {post.frontmatter.title}
        </h1>

        {/* Tanggal */}
        <p className="text-sm text-gray-500 mt-1">
          {formattedDate}
        </p>

        {/* Featured image */}
        {post.frontmatter.featuredimage?.publicURL && (
          <img
            src={post.frontmatter.featuredimage.publicURL}
            alt={post.frontmatter.title}
            className="rounded-xl my-8 w-full h-60 object-cover"
          />
        )}

        {/* Konten */}
        <div
          className="blog-content mt-10"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
      <div className="mt-12 bg-[#2E8B57] p-6 md:p-8 rounded-t-xl text-center text-white">
      
                <h3 className="text-xl md:text-2xl font-poppins font-bold text-white">
                  Tertarik dengan Produk Ini?
                </h3>
                <p className="mt-2 text-sm md:text-base font-semibold font-lato text-white">
                  Hubungi kami untuk informasi lengkap atau pemesanan grosir.
                </p>
      
                {/* Buttons Wrapper */}
                <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
      
                  {/* Back Button */}
                  <Link
                    to="/blog"
                    className="w-full md:w-auto px-6 py-3 rounded-xl bg-[#8B4513] text-white 
                              font-poppins hover:bg-[#6d3410] transition"
                  >
                    ← 
                    Kembali ke blog
                  </Link>
      
                  {/* WhatsApp Button */}
                  <a
                    href="https://wa.me/6281312257583"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto px-6 py-3 rounded-xl border border-[#A3D1B4] text-white 
                              font-poppins hover:bg-[#246c45] transition"
                  >
                    Hubungi via WhatsApp
                  </a>
      
                </div>
              </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPost($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date
      }
    }
  }
`
