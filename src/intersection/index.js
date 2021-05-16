function intersection(a, b) {
  var map = new Map()
  var set = new Set()
  for (var e of a) {
    map.set(e, e)
  }
  for (var e of b) {
    if (map.has(e)) {
      set.add(e)
    }
  }
  return Array.from(set)
}

module.exports = intersection
