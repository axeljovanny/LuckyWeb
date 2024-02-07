import * as React from "react"
import Layout from "../components/layout";
import { graphql} from 'gatsby';
import Footer from "../components/footer";
import { IconNav } from "../components/nav";
import { SEO } from "../components/seo"
import { Helmet } from "react-helmet";
import { SInfo } from "../styles/js/info";
import { StaticImage } from "gatsby-plugin-image";


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
  const canonicalUrl = "https://luckyducky.studio/info";

  const { siteUrl } = data.site.siteMetadata;
  const { locales } = data;
  return (
    <>
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Layout>
        <SInfo>
        <StaticImage
                src="../images/Info/Organigrama.jpeg"
                alt="Organigrama"
                loading="eager"
                placeholder="blurred"
                quality='70'
                formats={['auto', 'webp']}
                className='info'
                style={{
                    position: "absolute",
                }}
            />
        </SInfo>
        <Footer id="footer" siteTitle="Home"/>
        <IconNav/>
      </Layout>   
    </>
  )
}

export default IndexPage;

export const Head = () => <SEO/> 


