const express = require('express');
const libRouter = express.Router();

const getRandomLib = require('../handlers/getRandomLib');

libRouter.use(express.json());

libRouter.get('/', (req, res) => {
  res.send('works');
})

module.exports = libRouter;