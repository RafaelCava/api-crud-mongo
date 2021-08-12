const express = require('express')
const { criarProduto, getProdutos } = require('../controllers/controllers')
const routes = express()

routes.get('/', (req, res) => {
  res.json({ message: 'Beleza! bem-vindo a loja' })
})

routes.route('/produtos')
.get(getProdutos)
.post(criarProduto)

module.exports = {
  routes,
}
