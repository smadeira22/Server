const express = require('express')
const cors = require('cors')

const datas = require('./data')
const logger = require('./logger.js')

const app = express()

// MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use(logger)


app.get('/', (req, res) => {
  res.send('Hello there!')
})

app.get('/data', (req, res) => {
  res.send(datas)
})

/*app.get('/data/:id', (req, res) => {
  const idx = req.params.id

  const clothing = clothes[idx - 1]
  
  if (!clothing) {
    res.status(404).json({ message: `User with id ${idx} not found` })
  } else {
    res.send(clothing)
  }
})*/

app.post('/data', (req, res) => {
  // pseudocode
  // I want to retrieve information from hoppscotch
  console.log("line 36", req.body)
  // From info
  // I want to create a fruit
  const data = req.body
  // I want to add the fruit to my fruits array
  datas.push(data)
  res.status(201).send(datas)
})


module.exports = app