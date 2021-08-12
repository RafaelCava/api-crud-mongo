/* *
 * Arquivo: controllers.js
 * Descrição: Arquivos onde se encontra toda a lógica dos controladores
 * Author: Rafael Cavalcante
 * Data de criação: 10/08/2021
 */
const Produto = require('../app/models/produto');

const criarProduto = (req, res) => {
  let produto = new Produto()

  produto.nome = req.body.nome
  produto.preco = req.body.preco
  produto.descricao = req.body.descricao

  produto.save(error=>{
    if(error){
      console.log('foi erro')
      return res.status(400).send('Erro ao tentar salvar o produto...' + err)
    }else{
      console.log('produto criado')
      res.status(200).json({message: "produto criado com sucesso!"})
    }
  })
}

const getProdutos = (req, res) => {
  Produto.find((error, produtos) => {
    if(error)
      res.status(404).send('Erro ao tentar selecionar todos os produtos... ' + error);
      
    res.status(200).json(produtos);  
  })
}

const getProdutoById = (req, res) => {
  const { produto_id } = req.params;
  Produto.findById(produto_id, (err, produto) => {
    if(err)
      res.status(404).send('Não foi encontrado produto com id ' + produto_id)

    res.json(produto)  
  })
}

const substituirById = (req, res) => {

}

module.exports = {
  criarProduto,
  getProdutos,
  getProdutoById,
  substituirById
}