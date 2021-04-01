const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const savedLibSchema = new Schema({
  username: String,
  madlib: String
});

module.exports = mongoose.model('gallery', savedLibSchema)