import * as React from "react"
import { Footer, Header, Nav } from "../components"

const IndexPage = () => {
  return (
    <>
      <Nav/>
      <Header id="header" siteTitle="Home" />
      <Footer/>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
