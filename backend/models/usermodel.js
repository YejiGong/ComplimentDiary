var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: 'string',
    id: 'string',
    password: 'string',
});

var User = mongoose.model('User', userSchema);
module.exports = User;
