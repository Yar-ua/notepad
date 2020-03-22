var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var documentSchema = new Schema({
  title: { type: [String], index: true }
});

exports.Document = mongoose.model('Document', documentSchema);