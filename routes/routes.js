const express = require('express')
const { criarProduto, getProdutos, getProdutoById, substituirById } = require('../controllers/controllers')
const routes = express()

routes.get('/', (req, res) => {
  res.json({ message: 'Beleza! bem-vindo a loja' })
})

routes.route('/produtos')
.get(getProdutos)
.post(criarProduto)


routes.route('/produtos/:produto_id')
.get(getProdutoById)
.put(substituirById)
.delete()

module.exports = {
  routes,
}
