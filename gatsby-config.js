require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Pancake Plus Pasta`,
    description: `Freshly made Pancake and Pasta for you to start the day. A mock up restauran delivery page by Riza Hariati. Please Login before ordering`,
    author: `@rizahariati`,
    siteUrl: process.env.SITE_URL || `https://pancakepluspasta.netlify.app`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GOOGLE_ANALYTIC],

        pluginConfig: {
          head: true,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: `.`,
      },
    },
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#DD9056`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#DD9056`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `e5luqde77e5w`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.API_KEY,
      },
    },
    {
      resolve: "gatsby-plugin-react-leaflet",
      options: {
        linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
      },
    },
    `gatsby-plugin-robots-txt`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: process.env.SITE_URL || `https://pancakepluspasta.netlify.app`,
        sitemap: `https://pancakepluspasta.netlify.app/sitemap.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
}
