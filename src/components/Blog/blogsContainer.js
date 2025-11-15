import React from "react"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"

const BlogsContainer = ({ data }) => {

  // Format ulang data
  const posts = data?.map(item => {
    const dateParts = item.node.frontmatter.date.split(" ") // "26 Apr 2024"
    const [day, month, year] = dateParts
    return {
      title: item.node.frontmatter.title,
      slug: item.node.fields.slug,
      day,
      month,
      year,
    }
  })

  // Kelompokkan berdasarkan tahun
  const groups = {}
  posts.forEach(post => {
    if (!groups[post.year]) groups[post.year] = []
    groups[post.year].push(post)
  })

  return (
    <div className="max-w-4xl mx-auto mt-14 px-4">

      <Fade bottom>
        {Object.keys(groups)
          .sort((a, b) => b - a)
          .map(year => (
            <div key={year} className="mb-12">

              {/* Judul Tahun */}
              <h2 className="text-lg font-poppins font-semibold mb-4 text-[#2E8B57]">
                {year}
              </h2>

              {/* List posting */}
              <div className="space-y-4">
                {groups[year].map((post, i) => (
                  <Link
                    to={post.slug}
                    key={i}
                    className="group flex items-center justify-between border-b pb-2 border-gray-300 hover:border-[#2E8B57] transition"
                  >
                    {/* Judul */}
                    <span className="flex-1 font-lato text-[15px] text-gray-800 group-hover:text-[#2E8B57] truncate">
                      {post.title}
                    </span>

                    {/* Tanggal (di kanan) */}
                    <span className="text-xs font-lato text-gray-500 w-24 text-right">
                      {post.day} {post.month}, {year}
                    </span>
                  </Link>
                ))}
              </div>

            </div>
          ))}
      </Fade>
    </div>
  )
}

export default BlogsContainer
