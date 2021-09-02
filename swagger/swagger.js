const swaggerAutogen = require('swagger-autogen');

swaggerAutogen()("./swagger/swagger.json",["../src/server.js"])