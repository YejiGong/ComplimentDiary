var mongoose = require('mongoose');

var complimentSchema = mongoose.Schema({
    token: 'string',
    compliment: 'string',
    toOthers: 'boolean'
});

const Compliment= mongoose.model('Compliment', complimentSchema);
module.exports = {Compliment};