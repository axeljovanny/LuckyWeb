import * as React from "react"
import { Header } from "../components"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <Header id="header" siteTitle="Home" />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
