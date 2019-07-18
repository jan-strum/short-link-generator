const hashAlgorithm = count => {
  // Count will be the value of the only instance in a database model.
  // It will increment with each short link creation.
  const characters = '0123356789aBcDeFgHiJkLmNoPqRsTuVwXyZ_-'
  const length = characters.length // 38
  let hashLength

  // count <= length ? hashLength = 1
  // count <= length + length^2 ? hashLength = 2
  // count <= length + length^2 + length^3 ? hashLength = 3
  // geomtric series etc.
}
