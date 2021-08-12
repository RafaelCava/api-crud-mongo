/* *
 * Arquivo: routes.js
 * Descrição: Arquivos que contém todas as rotas do projeto CRUD
 * Author: Rafael Cavalcante
 * Data de criação: 10/08/2021
 */
const express = require('express')
const {
  criarProduto,
  getProdutos,
  getProdutoById,
  substituirById,
  deleteById
} = require('../controllers/controllers')
const routes = express()

routes.get('/', (req, res) => {
  res.json({
    message: 'Beleza! bem-vindo a loja'
  })
})

routes.route('/produtos')
  .get(getProdutos)
  .post(criarProduto)


routes.route('/produtos/:produto_id')
  .get(getProdutoById)
  .put(substituirById)
  .delete(deleteById)

module.exports = {
  routes,
}