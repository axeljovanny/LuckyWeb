import React from "react";
import PropTypes from "prop-types";
import { GlobalStyles } from '../styles/js/index';
import { IconNav } from "./header";
import Footer from "./footer";
// import { Idiomas } from "./idioma";
import { Link, useI18next, Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { SIdioma, SOverlay } from "../styles/js/idioma";
import { graphql } from 'gatsby';

if (typeof window !== "undefined") {
}
const Layout = ({ children }) => (
  
  <>
    <meta
      name='viewport'
      content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <IconNav />
    <Idiomas />
    <GlobalStyles />
    <main>{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

//

const Idiomas = ({ siteTitle }) => {
  const { languages, originalPath, i18n } = useI18next();
  console.log("hi: " + languages);

  return (  
      <SOverlay>  
          <SIdioma>
              {/* {languages.map((lng) => (  
                  <Link key={lng} to={originalPath} language={lng} style={{ textDecoration: i18n.resolvedLanguage === lng ? 'underline' : 'none' }}>
                  {lng}
                  </Link>
              ))} */}
            <Link key={'es'} to={originalPath} language={'es'} style={{ textDecoration: i18n.resolvedLanguage === 'es' ? 'underline' : 'none' }}>
                {'es'}
            </Link>|
            <Link key={'en'} to={originalPath} language={'en'} style={{ textDecoration: i18n.resolvedLanguage === 'en' ? 'underline' : 'none' }}>
                {'en'}
            </Link>
          </SIdioma>
      </SOverlay>  
  );
};
