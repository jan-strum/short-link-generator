const Sequelize = require('sequelize')
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
  hash: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

TargetLink.hasOne(ShortLink)
ShortLink.belongsTo(TargetLink)

module.exports = { db, TargetLink, ShortLink }
