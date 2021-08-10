/* *
* Arquivo: server.js
* Descrição: 
* Author: Rafael Cavalcante
* Data de criação: 10/08/2021 
*/

const express = require('express');
const bodyParser = require('body-parser');
const { routes } = require('./routes/routes');
const app = express()
const port = process.env.port || 8000
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.json())
app.use("/api", routes)
app.listen(port)
console.log('iniciando a app na porta ' + port);