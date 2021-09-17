const configs = require('../knexfile.js')
const knex = require('knex');

const environment = "development";

module.exports = knex(configs[environment])

