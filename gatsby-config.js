module.exports = {
  siteMetadata: {
    siteUrl: `http://jsconf.us`,
    title: `2018 JSConf US`,
  },
  plugins: [
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
