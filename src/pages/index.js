import * as React from "react"
import Layout from "../components/layout";
import Header from "../components/header"
import Portafolio from "../components/portafolio"
import Servivios from "../components/servicios"
import Call from "../components/call"
import { graphql} from 'gatsby';
import Footer from "../components/footer";
import { IconNav } from "../components/nav";
import { Idiomas } from "../components/idioma";
import { SEO } from "../components/seo"
import { Helmet } from "react-helmet";


export const query = graphql`
  query ($language: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    locales: allLocale(filter: { language: { eq: $language } }) {
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

const IndexPage = ({ data }) => {
  const canonicalUrl = "https://luckyducky.studio";

  const { siteUrl } = data.site.siteMetadata;
  const { locales } = data;
  return (
    <>
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Layout>
        <Header id="header" siteTitle="Home" />
        <Portafolio id="portafolio" siteTitle="Home" />
        <Servivios id="servicios" siteTitle="Home" />
        <Call id="call" siteTitle="Home" />
        <Footer id="footer" siteTitle="Home"/>
        <Idiomas/>
        <IconNav/>
      </Layout>   
    </>
  )
}

export default IndexPage;

export const Head = () => <SEO/> 


