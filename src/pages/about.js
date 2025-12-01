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
        description="Holo is a visually striking and highly customizable open source theme built on the powerful Gatsby framework and integrated with the versatile Decap CMS."
      ></Seo>
      <AboutHeader></AboutHeader>
      <AboutPage></AboutPage>
      <AboutExtra></AboutExtra>
    </Layout>
  )
}

export default About
