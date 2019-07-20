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

  for (let i = 1; i <= hashLength; i++) {
    let index = i - 1
    if (i === hashLength) {
      hash[index] = characters[count % length]
    }
  }

  return hash
}
