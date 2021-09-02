/* *
 * Arquivo: controllers.js
 * Descrição: Arquivos onde se encontra toda a lógica dos controladores
 * Author: Rafael Cavalcante
 * Data de criação: 10/08/2021
 */


const Produto = require('../app/models/produto');

const criarProduto = async (req, res) => {
  let produto = new Produto()
  produto.nome = req.body.nome
  produto.preco = req.body.preco
  produto.descricao = req.body.descricao
  try {
    produto.save().then(() => console.log("criado"))
    res.json({
      message: `produto criado com sucesso`
    })
  } catch (err) {
    console.error(err);
  }
}

const getProdutos = (req, res) => {
  Produto.find((error, produtos) => {
    if (error)
      res.status(404).send('Erro ao tentar selecionar todos os produtos... ' + error);

    res.status(200).json(produtos);
  })
}

const getProdutoById = (req, res) => {
  const {
    produto_id
  } = req.params;
  Produto.findById(produto_id, (err, produto) => {
    if (produto !== null) {
      if (err) res.status(404).send('Não foi encontrado produto com id ' + produto_id)

      res.json(produto)
    } else {
      res.status(404).send('Não foi encontrado produto com id ' + produto_id)
    }
  })
}

const substituirById = (req, res) => {
  const {
    produto_id
  } = req.params;
  Produto.findById(produto_id, async (err, produto) => {
    if (err) return res.status(404).send('Não foi encontrado produto com id ' + produto_id)
    produto.nome = req.body.nome
    produto.preco = req.body.preco
    produto.descricao = req.body.descricao
    try {
      produto.save().then(() => console.log("substituído"))
      res.json({
        message: `produto substituído com sucesso`
      })
    } catch (err) {
      console.error(err);
    }
  })
}

const deleteById = (req, res) => {
  const {
    produto_id
  } = req.params;
  Produto.findById(produto_id, (err, produto) => {
    if (err) res.status(404).send('Não foi possível encontrar o produto.')
    if (produto !== null) {
      produto.delete(err => {
        if (err) res.status(401).send('Não foi possível deletar o produto.')

        res.status(200).json({
          message: "Produto apagado"
        })
      });
    } else {
      res.status(404).send('Não foi possível encontrar o produto.')
    }
  })
}

module.exports = {
  criarProduto,
  getProdutos,
  getProdutoById,
  substituirById,
  deleteById
}