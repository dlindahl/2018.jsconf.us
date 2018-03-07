const p = require('path')
const component = p.resolve(`./src/templates/MarkdownPageTemplate.js`)

module.exports = function markdownPagesGenerator (node, boundActionCreators) {
  // TODO: Reinstate markdown page generation once Splash Page period is over
  const { createPage } = boundActionCreators
  return createPage({
    component,
    context: {
      // Data passed to context is available in page queries as GraphQL variables.
      slug: node.fields.slug
    },
    path: node.fields.slug
  })
}
