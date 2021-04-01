const mongoose = require("mongoose");
const Template = require("../models/template.model");

const getRandomLib = (cb) => {
  const index = Math.floor(Math.random() * 10);

  Template.find({ id: index }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      cb(result);
    }
  });
};

module.exports = getRandomLib;
