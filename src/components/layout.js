import React from "react";
import PropTypes from "prop-types";
import { GlobalStyles } from '../styles/js/index';
import { IconNav } from "./header";
import Footer from "./footer";

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
    <GlobalStyles />
    <main>{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
