import { any, shape, string } from 'prop-types'
import DefaultLayout from '../layouts/DefaultLayout'
import Page from '../components/Page'
import React from 'react'

const MarkdownPageTemplate = ({
  data: { page: { frontmatter: { description, title }, html } },
  ...props
}) => (
  <DefaultLayout description={description} title={title}>
    <Page content={html}/>
  </DefaultLayout>
)

MarkdownPageTemplate.propTypes = {
  children: any,
  data: shape({
    page: shape({
      frontmatter: shape({
        description: string,
        title: string.isRequired
      }).isRequired,
      html: string.isRequired
    })
  })
}

export default MarkdownPageTemplate

export const query = graphql`
  query MarkdownPageBySlug($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        description
        title
      }
      html
    }
  }
`
