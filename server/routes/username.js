const express = require('express');
const usernameRouter = express.Router();

const getLibs = require('../handlers/getLibs');

usernameRouter.use(express.urlencoded({ extended: true}));

usernameRouter.get('/:username', (req, res) => {
  const userName = req.params.username;

  getLibs(userName, (data) => {
    res.send(data);
  })
})

module.exports = usernameRouter;