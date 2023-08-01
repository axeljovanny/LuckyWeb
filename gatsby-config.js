/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: `¡Hola! 🦆`,
    description: `¡Bienvenidos a Lucky Ducky Studio!

    Somos un estudio creativo que derrocha alegría y pasión en cada proyecto. Nuestra misión es hacer que tu marca se destaque como un patito de la suerte entre la multitud. Con un equipo de talentosos diseñadores, expertos en desarrollo web y estrategas de marketing, estamos listos para llevar tu visión al siguiente nivel.
    
    En Lucky Ducky Studio, no solo creamos identidades de marca únicas y profesionales, sino que también somos expertos en generar contenido creativo y efectivo para cautivar a tu audiencia en el mundo digital.
    
    ¿Necesitas una página web impresionante? No hay problema, estamos listos para crear una experiencia en línea que deje a tus visitantes con la boca abierta.
    
    Aquí, la creatividad y la diversión se fusionan para hacer realidad tus sueños. Queremos que tus diseños hablen por ti y destaquen en un mar de mediocridad.
    
    Así que, si estás buscando un equipo apasionado y lleno de energía para potenciar tu marca, ¡has encontrado tu estudio perfecto! Únete a nosotros en Lucky Ducky Studio y descubre cómo juntos podemos lograr que tu marca vuele alto y alcance nuevas alturas. ¡Vamos a hacer magia juntos! 🎉✨`,
    siteUrl: `https://luckyducky.studio`,
    author: `@ldstudio`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-LSYD37FEWL", // Google Analytics / GA      
        ],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    "gatsby-plugin-styled-components", 
    "gatsby-plugin-image", 
    "gatsby-plugin-sitemap", 
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    }, 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`
      }
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`en`, `es`],
        defaultLanguage: `en`,
        siteUrl: `https://luckyducky.studio`,
        i18nextOptions: {
          interpolation: {
            escapeValue: false
          },
          keySeparator: false,
          nsSeparator: false
        },
        pages: [
          {
            matchPath: '/:lang?/blog/:uid',
            getLanguageFromPath: true,
            excludeLanguages: ['es']
          },
          {
            matchPath: '/preview',
            languages: ['en']
          }
        ]
      }
    }
  ]
};