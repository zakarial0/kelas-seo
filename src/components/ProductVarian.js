import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProductVariant = () => {
  const data = useStaticQuery(graphql`
   query ProductList {
  allMarkdownRemark(
    filter: {frontmatter: {templateKey: {eq: "product-post"}}}
    sort: {frontmatter: {date: DESC}}
  ) {
    edges {
      node {
        id
        fields {
          slug
        }
        frontmatter {
          title
          price
          description
          category
          featuredimage {
            childImageSharp {
              gatsbyImageData(width: 600, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
}

  `)

  const products = data.allMarkdownRemark.edges.map(edge => edge.node)

  // Group products by category + keyword fallback
  const categories = {
    briquette: products.filter(product =>
      product.frontmatter.category === "briquette" ||
      product.frontmatter.title.toLowerCase().includes("charcoal") ||
      product.frontmatter.title.toLowerCase().includes("briquette")
    ),
    cocopeat: products.filter(product =>
      product.frontmatter.category === "cocopeat" ||
      product.frontmatter.title.toLowerCase().includes("cocopeat")
    ),
    cocofiber: products.filter(product =>
      product.frontmatter.category === "cocofiber" ||
      product.frontmatter.title.toLowerCase().includes("fiber")
    )
  }

  if (products.length === 0) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No Products Found</h2>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold font-poppins text-gray-900 mb-4">
            Product Variant
          </h1>
          <p className="text-lg text-gray-600 font-lato max-w-3xl mx-auto">
            Explore a wide range of coconut-based products from Narikela Recycle.
            Each product is made with high standards for quality and sustainability.
          </p>
        </div>

        {/* Briquette Section */}
        {categories.briquette.length > 0 && (
          <SectionBlock
            title="Briquette Products"
            products={categories.briquette}
          />
        )}

        {/* Cocopeat Section */}
        {categories.cocopeat.length > 0 && (
          <SectionBlock
            title="Cocopeat Products"
            products={categories.cocopeat}
          />
        )}

        {/* Cocofiber Section */}
        {categories.cocofiber.length > 0 && (
          <SectionBlock
            title="Coco Fiber Products"
            products={categories.cocofiber}
          />
        )}

        {/* Fallback — No Categories Detected */}
        {categories.briquette.length === 0 &&
          categories.cocopeat.length === 0 &&
          categories.cocofiber.length === 0 && (
            <SectionBlock title="All Products" products={products} />
          )}

        {/* CTA */}
        <div className="text-center mt-20 pt-10 border-t">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 font-poppins">
            Detail Product
          </h2>
          <p className="text-gray-600 mb-6 font-lato max-w-lg mx-auto">
            Download the complete catalog for specifications, sizes, and options.
          </p>
          <button className="bg-[#2E8B57] hover:bg-[#246c45] text-white py-3 px-8 rounded-xl font-semibold transition">
            Download Catalog
          </button>
        </div>
      </div>
    </section>
  )
}

const SectionBlock = ({ title, products }) => (
  <div className="mb-16">
    <h2 className="text-3xl font-semibold text-[#2E8B57] mb-8 text-center font-poppins">
      {title}
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
)

const ProductCard = ({ product }) => {
  const { frontmatter, fields } = product
  const imageData = getImage(frontmatter.featuredimage)

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition border overflow-hidden">
      {/* Image */}
      <div className="h-48 overflow-hidden">
        {imageData ? (
          <GatsbyImage
            image={imageData}
            alt={frontmatter.title}
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          />
        ) : frontmatter.featuredimage?.publicURL ? (
          <img
            src={frontmatter.featuredimage.publicURL}
            alt={frontmatter.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-2">
          {frontmatter.title}
        </h3>

        <p className="text-gray-600 font-lato mb-4">
          {frontmatter.description ||
            "High-quality coconut-based product engineered for multiple uses."}
        </p>

        {frontmatter.price && (
          <p className="text-lg font-bold text-[#2E8B57] mb-4">
            {frontmatter.price}
          </p>
        )}

        <a
          href={fields.slug}
          className="block text-center py-2 w-full hover:bg-[#A3D1B4] bg-[#2E8B57] hover:text-white rounded-lg font-semibold transition"
        >
          View Details
        </a>
      </div>
    </div>
  )
}

export default ProductVariant
