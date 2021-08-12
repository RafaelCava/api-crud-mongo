/* *
 * Arquivo: middleware.js
 * Descrição: Arquivo com a lógica do middleware, fazendo verificações antes de entrar na api.
 * Author: Rafael Cavalcante
 * Data de criação: 12/08/2021
 */

const post = (req, res, next) => {
  if (req.method === 'POST') {
    if (!req.body.nome) {
      res.status(401).json({
        message: 'falta o parâmetro nome'
      })
    }
    if (!req.body.preco) {
      res.status(401).json({
        message: 'falta o parâmetro preço'
      })
    }
    if (!req.body.descricao) {
      res.status(401).json({
        message: 'falta o parâmetro descrição'
      })
    }
    next()
  }
  next()
}
const put = (req, res, next) => {
  if (req.method === 'PUT') {
    if (!req.body.nome) {
      res.status(401).json({
        message: 'falta o parâmetro nome'
      })
    }
    if (!req.body.preco) {
      res.status(401).json({
        message: 'falta o parâmetro preço'
      })
    }
    if (!req.body.descricao) {
      res.status(400).json({
        message: 'falta o parâmetro descrição'
      })
    }
    next()
  }
  next()
}

module.exports = {
  post,
  put
}