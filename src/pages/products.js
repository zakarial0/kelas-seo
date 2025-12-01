import React from "react"
import Seo from "../components/seo"
import { graphql} from "gatsby"
import Layout from "../components/layout"
import ProductVariant from "../components/ProductVarian"

export default function ProductList({ data }) {
  return (
    <Layout>
      <Seo 
        title="Our Products " 
        description="Discover our range of coconut-based products including briquettes, cocopeat, and coco fiber. Sustainable solutions for various needs."
      />
      <ProductVariant />
    </Layout>
  )
}
