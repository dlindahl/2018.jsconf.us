export function nodes (data) {
  return data.edges.map((edge) => edge.node)
}
