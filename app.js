require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use('/di', require('./routes/di'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})