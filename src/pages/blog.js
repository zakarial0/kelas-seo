import React from "react"
import BlogHeader from "../components/Blog/blogHeader"
import BlogsContainer from "../components/Blog/blogsContainer"
import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutExtra from "../components/about/aboutExtra"
import { graphql } from "gatsby"

const Blog = ({ data }) => {
  const posts = data?.allMarkdownRemark?.edges

  return (
    <div className="bg-white">
      <Layout>
        <Seo
          title="Blog - "
          description="Holo is a visually striking and highly customizable open source theme built on the powerful Gatsby framework and integrated with the versatile Decap CMS"
        />

        {/* Blog header tidak pakai data */}
        <BlogHeader />

        {/* Semua postingan muncul */}
        <BlogsContainer data={posts} />

        <AboutExtra />
      </Layout>
    </div>
  )
}

export default Blog

export const WorkPageQuery = graphql`
  query IndexPage {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      limit: 30
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            title
            description
          }
        }
      }
    }
  }
`
