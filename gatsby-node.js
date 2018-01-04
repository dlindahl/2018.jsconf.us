const addSlugToNode = require('./src/util/slugGenerator')
const getMarkdownPages = require('./src/util/getMarkdownPages')
const generateMarkdownPages = require('./src/util/generateMarkdownPages')

exports.onCreateNode = ({ boundActionCreators, node, getNode }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === 'MarkdownRemark') {
    addSlugToNode(createNodeField, getNode, node)
  }
}

exports.createPages = async ({ boundActionCreators, graphql }) => {
  const markdownPages = await getMarkdownPages(graphql)
  return Promise.all(
    markdownPages.data.allMarkdownRemark.edges.map((page) =>
      generateMarkdownPages(page.node, boundActionCreators)
    )
  )
}
