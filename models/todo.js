var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
    type: String,
    value: String,
});

module.exports = mongoose.model('Todo', todoSchema);