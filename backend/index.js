const express = require('express');

const { SERVE_HOSTNAME, SERVE_PORT } = require('../src/config.json')

const app = express();

app.all('*', function (req, res, next) {
  console.log(`${req.method} ${req.url}`)
  res.header('Access-Control-Allow-Origin', '*')
  next() // pass control to the next handler
})

app.get('/', (req, res) => res.send('Backend ok'))


app.get(
  '/api/links', 
  (req, res, next)=> {
    res.json([
      'test1',
      'test2'
    ])
    next();
  }
)

app.post(
  '/api/links', 
  (req, res, next)=> {
    // TODO
    next();
  }
)


app.get(
  '/api/links/:id', 
  (req, res, next)=> {
    // TODO
    res.send(`Id=${req.params.id}`);
    next();
  }
)

app.listen(
  SERVE_PORT, 
  SERVE_HOSTNAME,
  ()=> console.log(`Shortlinks backend listening on ${SERVE_HOSTNAME}:${SERVE_PORT}!`)
)