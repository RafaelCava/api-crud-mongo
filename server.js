/* *
 * Arquivo: server.js
 * Descrição:
 * Author: Rafael Cavalcante
 * Data de criação: 10/08/2021
 */

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const { routes } = require('./routes/routes')
const { post } = require('./middlewares/middlewares');
const uri = "mongodb+srv://dbAdmin:12345@node-crud-api.fog8d.mongodb.net/node-crud-api";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})

const app = express()

const port = process.env.port || 8000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.json())

app.use(post)

app.use('/api', routes)


app.listen(port)

console.log('iniciando a app na porta ' + port)
