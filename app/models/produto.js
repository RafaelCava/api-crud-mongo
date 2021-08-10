/* *
* Arquivo: produto.js
* Descrição: tratamento de classe 'Produto'
* Author: Rafael Cavalcante
* Data de criação: 10/08/2021 
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ProdutoSchema = new Schema({
  Nome: String,
  Preco: Number,
  descricao: String
})