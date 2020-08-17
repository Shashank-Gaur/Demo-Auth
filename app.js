require('dotenv').config()
const express = require('express')
require('./src/db/mongoose')
const userRoutes = require('./src/routes/user')
const app = express()
app.use(express.json())
app.use(userRoutes)

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server on ${port}`)
})