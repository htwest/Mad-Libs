const express = require('express');
const libRouter = express.Router();

const getRandomLib = require('../handlers/getRandomLib');
const saveNewLib = require('../handlers/saveNewLib');

libRouter.use(express.urlencoded({ extended: true}));

libRouter.get('/', (req, res) => {
  getRandomLib((result) => {
    res.send(result[0]);
  })
})

libRouter.post('/', (req, res) => {
  saveNewLib(req.body);
  res.sendStatus(200);
})

module.exports = libRouter;