import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function BlogPost({ data }) {
  // Fix: gunakan data.markdownRemark sesuai query
  const post = data.markdownRemark

  // Format tanggal
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
            className="rounded-xl my-8"
          />
        )}

        {/* Konten */}
        <div
          className="prose prose-green max-w-none"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
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