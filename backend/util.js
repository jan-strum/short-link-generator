const { ShortLink, TargetLink } = require('./db')
const shortid = require('shortid')
const BASE_URL = 'https://zforth.com/'

// Source: https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/

// const hash = () => {
//   let firstPart = (Math.random() * 46656) | 0
//   let secondPart = (Math.random() * 46656) | 0

//   firstPart = ('000' + firstPart.toString(36)).slice(-3)
//   secondPart = ('000' + secondPart.toString(36)).slice(-3)

//   return firstPart + secondPart
// }

const associateLink = async (link, url) => {
  const id = shortid.generate(link.url)
  const shortLink = await ShortLink.create({ url: BASE_URL + id })
  await link.setShortlink(shortLink)
  const newlyAssociatedLink = await TargetLink.findOne({
    where: { url },
    include: ShortLink
  })
  return newlyAssociatedLink
}

module.exports = associateLink
