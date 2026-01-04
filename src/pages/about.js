import React from "react"
import AboutPage from "../components/about/aboutPage"
import Seo from "../components/seo"

import Layout from "../components/layout"
import AboutExtra from "../components/about/aboutExtra"
import AboutHeader from "../components/about/aboutHeader"

const About = () => {
  return (
    <Layout>
      <Seo
        title="About "
        description="Jelajahi produk Narikela Recycle seperti cocopeat, cocofiber, dan briket tempurung kelapa berkualitas tinggi untuk pertanian dan kebutuhan industri."
      ></Seo>
      <AboutHeader></AboutHeader>
      <AboutPage></AboutPage>
      <AboutExtra></AboutExtra>
    </Layout>
  )
}

export default About
