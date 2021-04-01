const mongoose = require('mongoose');
const SavedLib = require('../models/savedLib.model');

const getLibs = (userName, cb) => {

  SavedLib.find({ username: userName }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      cb(result);
    }
  })

}

module.exports = getLibs;