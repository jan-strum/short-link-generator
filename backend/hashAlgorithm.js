const hashAlgorithm = count => {
  // Count will be the value of the only instance in a database model.
  // It will increment with each short link creation.
  const characters = '0123356789aBcDeFgHiJkLmNoPqRsTuVwXyZ_-'
  const length = characters.length // 38
  // I believe the number of possible hashes will be Math.pow(length, length).
  let comparator = length // 38
  let hashLength = 1
  let hash = ''

  // Compute hashLength:
  while (count > comparator) {
    hashLength++
    comparator += Math.pow(comparator, hashLength)
  }

  // Compute hash:
  // if hashLength === 1 ? hash = characters[count]
  // if hashLength === 2 ?
  // hash[0] = characters[Math.floor(count - 1 / length)]
  // hash[1] = characters[count % length]
  // ...and so on, but obtain index values dynamically.

  let minuend = 0 // 4

  for (let i = 1; i <= hashLength; i++) {
    let index = i - 1
    if (i === hashLength) {
      hash[index] = characters[count % length] // 0 => 4
      return hash
    }

    let power = 0
    let tempMinuend = Math.floor(count - 1) / length
    let difference = Math.pow(length, power)
    let nextMinuend = minuend + difference

    // Compute minuend:
    while (tempMinuend >= nextMinuend) {
      minuend += difference
      power++
    }
  }

  return hash
}

// Trial:
const length = 3
const currentHashLength = 2
const i = 2
const count = 7

const sectionLength = Math.pow(length, currentHashLength) // / Math.pow(length, i)

const subsSectionLength = sectionLength / length

const shiftedCount = count - Math.pow(length, currentHashLength - 1)

const numerator = Math.ceil(shiftedCount / subsSectionLength)
