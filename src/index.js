require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (_, res) => {
  res.send('Welcome to the simple express demo!')
})

app.get('/ping', (_, res) => {
  res.send('ok')
})

app.get('/health', (_, res) => {
  res.send('ok')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

console.log("v1.3")