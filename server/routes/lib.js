const express = require('express');
const libRouter = express.Router();

const getRandomLib = require('../handlers/getRandomLib');

libRouter.use(express.json());

libRouter.get('/', (req, res) => {
  getRandomLib((result) => {
    res.send(result[0]);
  })
})

module.exports = libRouter;