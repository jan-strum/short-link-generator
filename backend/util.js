const { ShortLink, TargetLink } = require('./db')

// Source: https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
const generateHash = str => {
  let hash = 0

  if (str.length === 0) return hash

  for (let i = 0; i < str.length; i++) {
    let currentChar = str.charCodeAt(i)
    hash = (hash << 5) - hash + currentChar
    hash = hash & hash
    hash = hash >>> 0
  }

  return hash
}

const associateLink = async (link, url) => {
  const hash = generateHash(link.url)

  const shortLink = await ShortLink.create({ hash })
  await link.setShortlink(shortLink)

  const newlyAssociatedLink = await TargetLink.findOne({
    where: { url },
    include: ShortLink
  })

  return newlyAssociatedLink
}

module.exports = associateLink
