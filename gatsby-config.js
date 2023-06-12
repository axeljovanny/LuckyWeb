/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Lucky Ducky Studio`,
    siteUrl: `https://luckyducky.studio`,
    author: `@ldstudio`,
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp",

  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  //Locales para idioma
  // {
  //   resolve: `gatsby-source-filesystem`,
  //   options: {
  //     path: `${__dirname}/locales`,
  //     name: `locale`
  //   }
  // },
  
  ]
};