const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: String,
  content: String
});

const Model = mongoose.model('Article', ArticleSchema);
module.exports = Model;