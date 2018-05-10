const React = require('react')

function slugify (str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/([^a-zA-Z0-9._-]+)/, '')
}

function toSentenceJSX (items) {
  items = React.Children.toArray(items)
  if (items.length === 2) {
    items.splice(1, 0, ' and ')
    return items
  }
  const lastItem = items.pop()
  const set = items.reduce(
    (sentence, item) => sentence.concat([item, ', ']),
    []
  )
  return set.concat([' and ', lastItem])
}

function toSentence (items) {
  if (items.length < 2) {
    return items
  }
  if (React.isValidElement(items[0])) {
    return toSentenceJSX(items)
  }
  if (items.length === 2) {
    return items.join(' and ')
  }
  items = items.slice()
  const lastItem = items.pop()
  return `${items.join(', ')} and ${lastItem}`
}

function pluralize (set, singular, plural) {
  if (set.length === 1) {
    return singular
  }
  return plural
}

module.exports = {
  pluralize,
  slugify,
  toSentence
}
