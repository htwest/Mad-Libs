const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TemplateSchema = new Schema({
  id: Number,
  madlib: String
});

module.exports = mongoose.model('template', TemplateSchema)