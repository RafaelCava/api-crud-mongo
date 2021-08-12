const post = (req, res, next) => {
  if(req.method === 'POST'){
    if(!req.body.nome){
      res.status(401).json({message: 'falta o parâmetro nome'})
    }
    if(!req.body.preco){
      res.status(401).json({message: 'falta o parâmetro preço'})
    }
    if(!req.body.descricao){
      res.status(401).json({message: 'falta o parâmetro descrição'})
    }
    next()
  }
}

module.exports = {
  post
}