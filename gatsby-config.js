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
    {
    options: {
      background_color: `#f0db4f`,
      display: 'standalone',
      icons: [
        {
          sizes: '192x192',
          src: '/img/favicons/android-chrome-192x192.png',
          type: 'image/png'
        },
        {
          sizes: '512x512',
          src: '/img/favicons/android-chrome-512x512.png',
          type: 'image/png'
        }
      ],
      name: `JSConf US`,
      short_name: `JSConf US`,
      start_url: '/',
      theme_color: `#f0db4f`
    },
    resolve: 'gatsby-plugin-manifest'
  },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`
  ],
}
