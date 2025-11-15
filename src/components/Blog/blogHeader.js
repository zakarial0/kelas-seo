import { Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import Fade from "react-reveal/Fade"

const BlogHeader = ({ post }) => {
  const image = getImage(post.node.frontmatter.featuredimage)
  return (
    <div className="max-w-7xl xxs:mx-4 sm:mx-24 mt-10 ">
      <Fade duration={2200}>
        <div className="flex flex-row justify-space xxs:flex-col-reverse xs:flex-col-reverse sm:flex-row mb-5">
          <div className="max-h-80 w-11/12 xxs:ml-0 xxs:mr-0 sm:ml-5 sm:mr-5 xxs:mt-5 xxs:mb-5 flex flex-col justify-center bg-[#2E8B57] p-8 rounded-xl lg:m-5 xxs:w-full xs:w-full sm:w-full lg:w-full">
          <h1 className="font-bold text-xl md:text-4xl font-poppins text-white">Berbagi Ilmu, Membangun Masa Depan.</h1>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default BlogHeader
