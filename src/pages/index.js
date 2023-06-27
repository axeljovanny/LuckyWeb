import * as React from "react"
import { Call, Header, Portafolio, Servicios } from "../components"

const IndexPage = () => {
  return (
    <>
      <Header id="header" siteTitle="Home" />
      <Portafolio id="portafolio" siteTitle="Home" />
      <Servicios id="servicios" siteTitle="Home" />
      <Call id="call" siteTitle="Home" />
      
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

