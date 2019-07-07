const Sequelize = require('sequelize')
const shortid = require('shortid')
const { username, password } = '/secrets.js'

const db = new Sequelize('zf', username, password, {
  dialect: 'postgres',
  logging: false
})

const TargetLink = db.define('targetlink', {
  url: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
      isUrl: true
    }
  }
})

const ShortLink = db.define('shortlink', {
  url: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
      isUrl: true
    }
  }
})

TargetLink.hasOne(ShortLink)

// const seed = async () => {
//   const BASE_URL = 'https://zforth.com/'
//   const youtube = await TargetLink.create({ url: 'https://www.youtube.com/' })
//   const youtubeId = shortid.generate(youtube.url)
//   const shortYoutube = await ShortLink.create({
//     url: BASE_URL + youtubeId
//   })
//   // console.log(Object.keys(youtube.__proto__))
//   await youtube.setShortlink(shortYoutube)

//   const github = await TargetLink.create({ url: 'https://github.com/' })
//   const githubId = shortid.generate(github.url)
//   const shortGithub = await ShortLink.create({
//     url: BASE_URL + githubId
//   })
//   await github.setShortlink(shortGithub)

//   await db.sync({ force: true })
// }

// seed()

module.exports = { db, TargetLink, ShortLink }
