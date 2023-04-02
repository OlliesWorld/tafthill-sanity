/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
 require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Taft Hill Acres`,
    description: `Fort Collins Horse Boarding Facility`,
    author: `Roni`,
    siteUrl: `https://tafthillacres.com/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Taft Hill Acres`,
        short_name: `Taft Hill Acres`,
        description: `Fort Collins Horse Boarding Facility`,
        start_url: `/`,
        background_color: `#fffff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/tafthorse.svg`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_STUDIO_PROJECT_ID,
        dataset: "production",
        token: process.env.MY_SANITY_TOKEN,
        graphqlTag: 'default',
      },
    },
  ],
}
