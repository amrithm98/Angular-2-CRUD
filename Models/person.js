var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var personSchema = new Schema({
    name: String,
    phone: Number
});

var Model = mongoose.model('person', personSchema);

module.exports = Model;