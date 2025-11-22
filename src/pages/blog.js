import React from "react"
import BlogHeader from "../components/Blog/blogHeader"
import BlogsContainer from "../components/Blog/blogsContainer"
import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutExtra from "../components/about/aboutExtra"
import { graphql } from "gatsby"

const Blog = ({ data }) => {
  console.log("data", data)
  let HeaderPost = data?.allMarkdownRemark?.edges[0]
  let otherPosts = data?.allMarkdownRemark?.edges.slice(1)

  return (
    <div className="bg-white">
      <Layout>
        <Seo
          title="Blog - "
          description="Holo is a visually striking and highly customizable open source theme built on the powerful Gatsby framework and integrated with the versatile Decap CMS"
        ></Seo>
        <BlogHeader post={HeaderPost} />
        <BlogsContainer data={otherPosts} />
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
            featuredimage {
              childImageSharp {
                gatsbyImageData(width: 900, quality: 90)
              }
              publicURL
            }
          }
        }
      }
    }
  }
`
