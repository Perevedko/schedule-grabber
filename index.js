const express = require('express')
const helpers = require('./helpers')
const grabber = require('./grabber')

const app = express()

app.get('/', (req, res) => {
  grabber.getScheduleForToday(table => {
    res.set('Content-Type', 'text/html');
    res.send(new Buffer(table))
  })
})

const PORT = parseInt(process.env.PORT) || 3333

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
