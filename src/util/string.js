export function slugify (str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/([^a-zA-Z0-9._-]+)/, '')
}
