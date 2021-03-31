const mongoose = require('mongoose');
const Template = require('../models/template.model');

const getRandomLib = (cb) => {
  const index = Math.floor(Math.random() * 5);

  Template.find({ id: index }, (err, result) => {
    cb(result);
  })

}

module.exports = getRandomLib;