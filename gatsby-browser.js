/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * Author: LDS(Axel)
 */

// El siguiente bloque es para vizualizar el Layout por defecto en todas las paginas

const React = require('react')
const Layout = require('./src/components/layout').default

exports.wrapRootElement = ({ element }) => (
    <Layout>
        {element}
    </Layout>
)

// import React from 'react';
// import { I18nextProvider } from 'react-i18next';
// import i18n from 'i18next';
// import Layout from './src/components/layout';

// export const wrapRootElement = ({ element }) => {
//   i18n.init({
//     lng: 'en',
//     resources: {
//       en: require('./locales/en/translation.json'),
//       es: require('./locales/es/translation.json'),
//     },
//   });

//   return (
//     <I18nextProvider i18n={i18n}>
//       <Layout>{element}</Layout>
//     </I18nextProvider>
//   );
// };
//Fin del Bloque