module.exports = {
  siteMetadata: {
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
    `gatsby-plugin-react-helmet`
  ],
}
