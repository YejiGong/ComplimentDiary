var mongoose = require('mongoose');

var complimentSchema = mongoose.Schema({
    compliment: 'string'
});

const Compliment= mongoose.model('Compliment', complimentSchema);
module.exports = {Compliment};