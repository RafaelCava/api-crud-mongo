const Produto = require('../app/models/produto');

const criarProduto = (req, res) => {
  let produto = new Produto()

  produto.nome = req.body.nome
  produto.preco = req.body.preco
  produto.descricao = req.body.descricao

  produto.save(err => {
    if(err)
      res.status(400).send('Error ao salvar o produto' + err)
      
    res.status(200).json({message: "produto criado com sucesso"})
  })
}

module.exports = {
  criarProduto
}