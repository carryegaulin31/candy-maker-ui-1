/* eslint-disable linebreak-style */
import express from 'express'
// import bodyParser from 'body-parser'
import path from 'path'
import { getAllManufacturers, getManufacturerById } from './controllers/manufacturers'
import { getAllProducts, getProductsById } from './controllers/products'

const app = express()

app.use(express.static('public'))

app.get('/api/manufacturers', getAllManufacturers)
app.get('/api/manufacturers/:id', getManufacturerById)

app.get('/api/products', getAllProducts)
app.get('/api/products/:id', getProductsById)
// app.post('/api/products', bodyParser.json(), saveNewCandy)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))

app.listen(1440, () => {
  console.log('Listening on port 1440...') // eslint-disable-line no-console
})
