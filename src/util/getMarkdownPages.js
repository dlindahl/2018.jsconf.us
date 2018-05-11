module.exports = function getMarkdownPages (graphql) {
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              visible
            }
          }
        }
      }
    }
  `)
}
