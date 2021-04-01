const mongoose = require('mongoose');
const savedLib = require('../models/savedLib.model');

const saveNewLib = (data) => {

  const newLib = new savedLib({
    username: data.username,
    madlib: data.madlib
  })
  .save()
}

module.exports = saveNewLib;