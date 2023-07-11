import * as React from "react"
import Layout from "../components/layout";
import Header from "../components/header"
import Portafolio from "../components/portafolio"
import Servicios from "../components/servicios"
import Call from "../components/call"
import { graphql} from 'gatsby';
import Footer from "../components/footer";
import { IconNav } from "../components/nav";
import { Idiomas } from "../components/idioma";

const IndexPage = () => {
  
  return (
    <>
      <Layout>
        <IconNav/>
        <Idiomas/>
        <Header id="header" siteTitle="Home" />
        <Portafolio id="portafolio" siteTitle="Home" />
        <Servicios id="servicios" siteTitle="Home" />
        <Call id="call" siteTitle="Home" />   
        <Footer/>
      </Layout>   
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { language: { eq: $language } }
    ) {
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