require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Gatsby boilerplate',
    titleTemplate: '%s - Gatsby boilerplate',
    description: 'Gatsby boilerplate with Typescript and Styled Components',
    image: 'src/assets/images/prime-icon.png',
    url: 'https://ronnyrook.nl',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    'gatsby-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'fonts',
        path: `${__dirname}/src/assets/fonts/`,
      },
    },
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          components: './components',
          common: './components/common',
          modules: './components/modules',
          pages: './pages',
          styles: './styles',
          services: './services',
          ducks: './ducks',
          selectors: './selectors',
          templates: './templates',
          images: './assets/images',
          fonts: './assets/fonts',
          vectors: './assets/vectors',
          css: './assets/css',
          types: './types',
          static: {
            root: './public',
            alias: './static',
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/assets/vectors/internal/`,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-boilerplate-ts',
        short_name: 'starter',
        start_url: '/',
        background_color: '#010101',
        theme_color: '#e7ff04',
        display: 'minimal-ui',
        icon: 'src/assets/images/prime-icon.png',
      },
    },
    'gatsby-plugin-offline',
  ],
};
