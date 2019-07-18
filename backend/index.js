const express = require('express')
const bodyParser = require('body-parser')
const associateLink = require('./util')
const { db, Hash, TargetLink } = require('./db')

const { SERVE_HOSTNAME, SERVE_PORT } = require('../src/config.json')

const app = express()

app.all('*', function(req, res, next) {
  console.log(`${req.method} ${req.url}`)
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  next() // pass control to the next handler
})

app.use(bodyParser.json())

app.get('/', (req, res) => {
  console.log('Backend ok')
  res.send('Backend ok')
})

app.get('/:value', async (req, res, next) => {
  try {
    const { value } = req.params
    const hash = await Hash.findOne({
      where: { value },
      include: TargetLink
    })
    res.redirect(hash.targetlink.url)
  } catch (error) {
    next(error)
  }
})

app.get('/api/links', async (req, res, next) => {
  try {
    const links = await TargetLink.findAll({
      include: Hash
    })
    res.send(links)
  } catch (error) {
    next(error)
  }
})

app.post('/api/links', async (req, res, next) => {
  try {
    const { url } = req.body
    const [link] = await TargetLink.findOrCreate({
      where: { url },
      include: Hash
    })

    if (link.hash) {
      res.send(link)
    } else {
      const newlyAssociatedLink = await associateLink(link, url)
      res.send(newlyAssociatedLink)
    }

    await db.sync()
  } catch (error) {
    const errors = error.errors.map(error => error.message)
    errors.push('hi there')
    errors.push('bye there')
    console.log(errors)
    res.send(errors)
    next(error)
  }
})

app.get('/api/links/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const link = await TargetLink.findByPk(id, { include: Hash })
    res.send(link)
  } catch (error) {
    next(error)
  }
})

app.listen(SERVE_PORT, SERVE_HOSTNAME, () =>
  console.log(
    `Shortlinks backend listening on ${SERVE_HOSTNAME}:${SERVE_PORT}!`
  )
)
