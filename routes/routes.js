const express = require('express');
const routes = express()

routes.get('/api/produtos')
routes.post('/api/produtos')
routes.get('/api/produtos/:produtos_id')
routes.put('/api/produtos/:produtos_id')
routes.delete('/api/produtos/:produtos_id')

module.exports = {
  routes
}