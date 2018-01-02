module.exports = {
  siteMetadata: {
    siteUrl: `http://jsconf.us`,
    title: `2018 JSConf US`,
  },
  plugins: [
    {
      options: {
        trackingId: `UA-1264213-15`
      },
      resolve: 'gatsby-plugin-google-analytics'
    },
    {
      options: {
        throw: true
      },
      resolve: 'gatsby-plugin-react-a11y'
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`
  ],
}
