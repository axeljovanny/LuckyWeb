import React from "react";
import PropTypes from "prop-types";
import { GlobalStyles } from '../styles/js/index';
import { IconNav } from "./nav";
import Footer from "./footer";
import { Idiomas } from "./idioma";
import {useStaticQuery, graphql} from 'gatsby';
import {Link, Trans, useTranslation, useI18next} from 'gatsby-plugin-react-i18next';

if (typeof window !== "undefined") {
}
const Layout = ({ children }) => {
  const { t, i18n } = useI18next();
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      
      {/* <IconNav /> */}
      {/* <Idiomas /> */}
      <GlobalStyles />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
   
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;