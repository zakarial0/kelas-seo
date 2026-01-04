import React from "react"
import Seo from "../components/seo"
import { graphql} from "gatsby"
import Layout from "../components/layout"
import ProductVariant from "../components/ProductVarian"

export default function ProductList({ data }) {
  return (
    <Layout>
      <Seo 
        title="Produk Kami " 
        description="Jelajahi produk Narikela Recycle seperti cocopeat, cocofiber, dan briket tempurung kelapa berkualitas tinggi untuk pertanian dan kebutuhan industri."
      />
      <ProductVariant />
    </Layout>
  )
}
