import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const ProductVariant = () => {
  const data = useStaticQuery(graphql`
    query ProductList {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "product-post" } } }
        sort: { frontmatter: { date: DESC } }
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
                  gatsbyImageData(
                    width: 400
                    height: 300
                    quality: 90
                    layout: CONSTRAINED
                  )
                }
              }
            }
          }
        }
      }
    }
  `)

  // Extract nodes from edges
  const products = data.allMarkdownRemark.edges.map(edge => edge.node)

  // Group products by category (gunakan logika fallback jika category tidak ada)
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

  // Check if any products exist
  if (products.length === 0) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No Products Found</h2>
          <p className="text-gray-600">Please add some products with the templateKey "product-post"</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Product Variant
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-lato">
            There are a variety of briquette product developments that can be selected according to different needs. 
            Each presented optimization for different needs and advantages.
          </p>
        </div>

        {/* Briquette Section - Only show if products exist */}
        {categories.briquette.length > 0 && (
          <div id="briquette" className="mb-20">
            <h2 className="text-3xl font-semibold text-[#2E8B57] mb-8 font-poppins text-center">
              Briquette Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.briquette.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}

        {/* Cocopeat Section - Only show if products exist */}
        {categories.cocopeat.length > 0 && (
          <div id="cocopeat" className="mb-20">
            <h2 className="text-3xl font-semibold text-[#2E8B57] mb-8 font-poppins text-center">
              Cocopeat Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.cocopeat.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}

        {/* Coco Fiber Section - Only show if products exist */}
        {categories.cocofiber.length > 0 && (
          <div id="cocofiber" className="mb-20">
            <h2 className="text-3xl font-semibold text-[#2E8B57] mb-8 font-poppins text-center">
              Coco Fiber Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.cocofiber.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}

        {/* Fallback - Show all products if no categories are defined */}
        {categories.briquette.length === 0 && categories.cocopeat.length === 0 && categories.cocofiber.length === 0 && products.length > 0 && (
          <div id="all-products" className="mb-20">
            <h2 className="text-3xl font-semibold text-[#2E8B57] mb-8 font-poppins text-center">
              All Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
            Detail Product
          </h2>
          <p className="text-gray-600 mb-6 font-lato max-w-2xl mx-auto">
            Get complete specifications and technical details for all our coconut-based products. 
            Contact us for customized solutions and bulk orders.
          </p>
          <button className="bg-[#2E8B57] hover:bg-[#1f6b41] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 font-poppins">
            Download Catalog
          </button>
        </div>
      </div>
    </section>
  )
}

const ProductCard = ({ product }) => {
  const { frontmatter, fields } = product

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Product Image */}
      <div className="h-48 overflow-hidden">
        {frontmatter.featuredimage ? (
          <GatsbyImage
            image={frontmatter.featuredimage.childImageSharp.gatsbyImageData}
            alt={frontmatter.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">No Image</span>
          </div>
        )}
      </div>
      
      {/* Product Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 font-poppins">
          {frontmatter.title}
        </h3>
        
        {/* Description - with fallback */}
        <p className="text-gray-600 mb-4 font-lato leading-relaxed">
          {frontmatter.description || "High quality coconut-based product."}
        </p>
        
        {/* Price - only show if available */}
        {frontmatter.price && (
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-bold text-[#2E8B57] font-poppins">
              {frontmatter.price}
            </span>
          </div>
        )}
        
        {/* View Details Button */}
        <a
          href={fields.slug}
          className="inline-block w-full bg-gray-100 hover:bg-[#2E8B57] hover:text-white text-gray-700 text-center font-semibold py-2 px-4 rounded-lg transition-colors duration-300 font-poppins"
        >
          View Details
        </a>
      </div>
    </div>
  )
}

export default ProductVariant