import React from "react"
import Layout from "../components/shared/layout"
import SEO from "../components/shared/seo"
import FrontView from "../components/FrontView"
import Showcase from "../components/Showcase"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <FrontView />
    <Showcase />
  </Layout>
)

export default IndexPage
