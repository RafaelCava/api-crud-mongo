/* *
* Arquivo: server.js
* Descrição: 
* Author:
* Data de criação: 10/08/2021 
*/

const express = require('express');
const { routes } = require('./routes/routes');
const app = express()
const port = 8000

app.use(express.json())
app.use(routes)
app.listen(port)