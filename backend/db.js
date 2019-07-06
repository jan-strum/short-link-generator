const Sequelize = require('sequelize')
const { username, password } = '/secrets.js'

const db = new Sequelize('zf', username, password, {
  dialect: 'postgres',
  logging: false
})

// console.log(db)

const ShortLink = db.define('shortlink', {
  url: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isUrl: true
    }
  }
})

const TargetLink = db.define('targetlink', {
  url: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isUrl: true
    }
  }
})

TargetLink.hasOne(ShortLink)

const seed = async () => {
  const target = await TargetLink.create({ url: 'https://www.youtube.com/' })
  const short = await ShortLink.create({ url: 'https://www.youtube.com/' })
  await target.setShortlink(short)
  await db.sync()
}

seed()

module.exports = db
