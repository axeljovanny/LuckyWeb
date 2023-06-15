import * as React from "react"
import { Header, Nav } from "../components"

const IndexPage = () => {
  return (
    <>
      <Nav />
      <Header id="header" siteTitle="Home" />
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
