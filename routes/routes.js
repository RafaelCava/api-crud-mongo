const express = require('express')
const { criarProduto } = require('../controllers/controllers')
const routes = express()

routes.get('/', (req, res) => {
  res.json({ message: 'Beleza! bem-vindo a loja' })
})
routes.route('/produtos')
.get((req, res) => {
  res.json({ message: 'Beleza! bem-vindo a loja' })
})
.post(criarProduto)

routes.route('/produtos/:produtos_id')
.put((req, res) => {
  res.json({ message: 'Beleza! bem-vindo a loja' })
})
.delete((req, res) => {
  res.json({ message: 'Beleza! bem-vindo a loja' })
})

module.exports = {
  routes,
}
