import React from "react"
import Hero from '../components/hero'
import Layout from "../components/layout"
import Info from "../components/info"
import Recipe from "../components/recipe"

const IndexPage = () => (
  <Layout>
    <Hero/>
    <Info/>
    <Recipe/>
  </Layout>
)

export default IndexPage
