const p = require('path')
const genericMarkdownTemplate = p.resolve(
  `./src/templates/MarkdownPageTemplate.js`
)
const sponsorTemplate = p.resolve(`./src/templates/SponsorTemplate.js`)

const SPONSOR_PAGE = /^\/sponsors\/[^/]+\/$/

module.exports = function markdownPagesGenerator (node, boundActionCreators) {
  // TODO: Reinstate markdown page generation once Splash Page period is over
  const { createPage } = boundActionCreators
  let component
  switch (true) {
    case SPONSOR_PAGE.test(node.fields.slug):
      component = sponsorTemplate
      break
    default:
      component = genericMarkdownTemplate
  }
  return createPage({
    component,
    context: {
      // Data passed to context is available in page queries as GraphQL variables.
      slug: node.fields.slug
    },
    path: node.fields.slug
  })
}
