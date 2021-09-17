const db = require('../../data/dbConfig.js')

function getAll() {
  return db('cities')
}

async function insert(city) {
  return null
}

function remove(id) {
  return null
}

module.exports = {
  insert,
  remove,
  getAll
}