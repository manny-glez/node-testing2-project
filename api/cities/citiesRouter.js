const express = require('express');
const City = require('./cities-model');

const router = express.Router();

router.get('/cities', (req, res) => {
  City.getAll()
    .then(cities => {
      res.status(200).json(cities);
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

router.post('/', (req, res, next) => {

})

router.delete('/', (req, res, next) => {

})


module.exports = router;
