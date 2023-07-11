import React from "react";
import PropTypes from "prop-types";
import { GlobalStyles } from '../styles/js/index';
import {useStaticQuery, graphql} from 'gatsby';

if (typeof window !== "undefined") {
}
const Layout = ({ children }) => {
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
      <GlobalStyles />
      <main>{children}</main>
    </>
   
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;