import React from "react";
import PropTypes from "prop-types";
import { GlobalStyles } from '../styles/js/index';
import { useStaticQuery, graphql } from 'gatsby';
import { StyleSheetManager } from "styled-components";

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
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover" />

        <script src="https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.development.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.development.js"></script>
      </head>

      <GlobalStyles />
      <StyleSheetManager>
        <main>{children}</main>
      </StyleSheetManager>
    </html>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;