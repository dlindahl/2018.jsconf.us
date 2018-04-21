export function groupBy (items, key) {
  return items.reduce((set, item) => {
    if (!item.frontmatter.visible) {
      return set
    }
    set[item.frontmatter[key]] = set[item.frontmatter[key]] || []
    set[item.frontmatter[key]].push(item)
    return set
  }, {})
}

export function nodes (data) {
  return data.edges.map((edge) => edge.node)
}

export function pluck (items, key, value) {
  return items.reduce((set, item) => {
    if (!item.frontmatter.visible) {
      return set
    }
    if (item.frontmatter[key] === value) {
      set.push(item)
    }
    return set
  }, [])
}
