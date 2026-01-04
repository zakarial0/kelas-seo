import * as React from "react"
import Layout from "../components/layout"

// Components
import Header from "../components/Home/header"
import FeatureSection from "../components/Home/featureSection"
import Testimonial from "../components/Home/testimonial"
import Seo from "../components/seo"

const IndexPage = () => (
  <div className="h-auto w-screen bg-white">
    <Layout>
      <Seo
        title="Home "
        description="Narikela Recycle adalah produsen produk olahan kelapa ramah lingkungan seperti cocopeat, cocofiber, dan briket kelapa berkualitas untuk pertanian dan industri."
      ></Seo>
      <Header></Header>
      <FeatureSection></FeatureSection>
      <Testimonial></Testimonial>
    </Layout>
  </div>
)

export default IndexPage
