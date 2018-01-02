import { siteMetadata } from '../../gatsby-config'

// Ported from Jekyll
// See also:
//   https://github.com/jekyll/jekyll/pull/5399
export function absoluteUrl (input) {
  if (!input) {
    return input
  }
  if (!siteMetadata.siteUrl) {
    return relativeUrl(input)
  }
  const host = siteMetadata.siteUrl
  return host + relativeUrl(input)
}

// Ported from Jekyll
// See also:
//   https://github.com/jekyll/jekyll/pull/5399
function ensureLeadingSlash (input) {
  if (!input || input.startsWith('/')) {
    return input
  }
  return `/${input}`
}

// Ported from Jekyll
// See also:
//   https://github.com/jekyll/jekyll/pull/5399
export function relativeUrl (input) {
  if (!input) {
    return ''
  }
  return (
    ensureLeadingSlash(siteMetadata.baseUrl) +
    ensureLeadingSlash(input.replace('index.html', ''))
  )
}
