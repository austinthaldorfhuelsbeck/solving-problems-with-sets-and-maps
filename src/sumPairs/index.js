/**
 * Return an array of pairs of numbers that sum to N
 * @param {Array} A an array of numbers
 * @param {Number} N an integer value
 */
function sumPairs(A, N) {
  var numbers = new Map()
  var solution = new Map()

  for (var e of A) {
    numbers.set(e, e)
  }

  for (var e of A) {
    var diff = N - e
    if (diff !== e) {
      if (numbers.has(diff)) {
        solution.set(Math.min(e, diff), Math.max(e, diff))
      }
    }
  }

  return Array.from(solution)
}

module.exports = sumPairs
