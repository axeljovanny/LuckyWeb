import * as React from "react"
import { Header } from "../components"
import {graphql} from 'gatsby';

const IndexPage = () => {
  return (
    <>
      <Header id="header" siteTitle="Home" />
      <Portafolio id="portafolio" siteTitle="Home" />
      <Call id="call" siteTitle="Home" />
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;