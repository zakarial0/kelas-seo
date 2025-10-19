import React from "react"
import Product from "../components/Product-page"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ProductPage = () => {
  return (
    <Layout>
      <Seo
        title="Holo - Product"
        description="Holo is a visually striking and highly customizable open source theme built on the powerful Gatsby framework and integrated with the versatile Decap CMS"
      ></Seo>
      <Product></Product>
    </Layout>
  )
}

export default ProductPage
