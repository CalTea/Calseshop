import express from 'express'
import dotenv from 'dotenv'
import products from './data/products.js'

dotenv.config()
const app = express()

const PORT = process.env.PORT || 5000

app.get('/api/products', function (req, res) {
  res.json(products)
})

app.get('/api/products/:id', function (req, res) {
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
  })



app.listen(PORT, console.log(`Sever running in ${process.env.NODE_ENV} mode on port ${PORT}`))