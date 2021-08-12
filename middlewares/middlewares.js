const middlewares = (req, res, next) => {
  console.log("estou aqui");
  next()
}

module.exports = {
  middlewares
}