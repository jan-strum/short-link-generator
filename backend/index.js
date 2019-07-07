const express = require('express')
const bodyParser = require('body-parser')
const associateLink = require('./util')
const { db, ShortLink, TargetLink } = require('./db')

const { SERVE_HOSTNAME, SERVE_PORT } = require('../src/config.json')

const app = express()

app.use(bodyParser.json())

app.all('*', function(req, res, next) {
  console.log(`${req.method} ${req.url}`)
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    // res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'),
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next() // pass control to the next handler
})

app.get('/', (req, res) => {
  console.log('Backend ok')
  res.send('Backend ok')
})

app.get('/api/links', async (req, res, next) => {
  try {
    const links = await TargetLink.findAll({
      include: ShortLink
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
      include: ShortLink
    })

    if (!link.shortlink) {
      const newlyAssociatedLink = await associateLink(link, url)
      res.json(newlyAssociatedLink)
    } else {
      res.send(link)
    }
    await db.sync()
  } catch (error) {
    next(error)
  }
})

app.get('/api/links/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const link = await TargetLink.findByPk(id, { include: ShortLink })
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
