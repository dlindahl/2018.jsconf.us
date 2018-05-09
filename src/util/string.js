export function slugify (str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/([^a-zA-Z0-9._-]+)/, '')
}

export function toSentence (strs) {
  if (strs.length === 2) {
    return strs.join(' and ')
  }
  if (strs.length > 2) {
    return `${strs.slice(0, -1).join(', ')}, and ${strs.slice(-1)}`
  }
  return strs
}
