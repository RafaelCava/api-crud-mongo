const express = require('express')
const routes = express()

routes.get('/', (req, res) => {
  res.json({ message: 'Beleza! bem-vindo a loja' })
})
routes.get('/produtos')
routes.post('/produtos')
routes.get('/produtos/:produtos_id')
routes.put('/produtos/:produtos_id')
routes.delete('/produtos/:produtos_id')

module.exports = {
  routes,
}
