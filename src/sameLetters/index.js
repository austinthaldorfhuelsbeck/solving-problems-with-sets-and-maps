/**
 * return a Map of the unique letters and arrays of words that are made up of those letters
 * @param {array} words An array  of words
 */
function sameLetters(words) {
  var results = new Map()

  words.forEach((word) => {
    let letters = Array.from(new Set(word.split("")))
      .sort()
      .join("")
    if (results.has(letters)) {
      results.get(letters).push(word)
    } else {
      results.set(letters, [word])
    }
  })

  return results
}

module.exports = sameLetters
