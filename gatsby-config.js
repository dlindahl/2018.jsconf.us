module.exports = {
  plugins: [
    'gatsby-plugin-react-next',
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
        name: 'jsonData',
        path: `${__dirname}/data/`
      },
      resolve: 'gatsby-source-filesystem'
    },
    {
      options: {
        name: 'markdownPages',
        path: `${__dirname}/content/`
      },
      resolve: 'gatsby-source-filesystem'
    },
    'gatsby-transformer-json',
    {
      options: {
        plugins: ['gatsby-remark-autolink-headers']
      },
      resolve: 'gatsby-transformer-remark'
    },
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
  siteMetadata: {
    baseUrl: '',
    description: `2018 iteration of JSConf US`,
    siteUrl: `http://jsconf.us`,
    title: `JSConf US 2018`
  }
}
