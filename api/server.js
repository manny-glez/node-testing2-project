const express = require('express');
const server = express();
const citiesRouter = require('./cities/citiesRouter')

server.use(express.json());
server.use('/cities', citiesRouter)

module.exports = server;