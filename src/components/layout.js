import React from "react";
import PropTypes from "prop-types";
import { GlobalStyles } from '../styles/js/index';
import Nav from "./nav";
import Footer from "./footer";

const Layout = ({ children }) => (
  <>
    <meta
      name='viewport'
      content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <Nav />
    <GlobalStyles />
    <main>{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;