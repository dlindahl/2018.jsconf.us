const p = require('path')
const markdownTemplate = p.resolve(`./src/templates/MarkdownPageTemplate.js`)
const speakerTemplate = p.resolve(`./src/templates/SpeakerTemplate.js`)
const sponsorTemplate = p.resolve(`./src/templates/SponsorTemplate.js`)

const SPONSOR_PAGE = /^\/sponsors\/[^/]+\/$/
const SPEAKER_PAGE = /^\/speakers\/[^/]+\/$/

module.exports = function markdownPagesGenerator (
  node,
  boundActionCreators,
  loadNodeContent
) {
  // TODO: Reinstate markdown page generation once Splash Page period is over
  const { createPage } = boundActionCreators
  let component
  switch (true) {
    case SPEAKER_PAGE.test(node.fields.slug):
      component = speakerTemplate
      break
    case SPONSOR_PAGE.test(node.fields.slug):
      component = sponsorTemplate
      break
    default:
      component = markdownTemplate
  }
  if (node.frontmatter.visible === false) {
    return null
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
