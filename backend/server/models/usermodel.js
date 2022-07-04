var mongoose = require('mongoose');
var jwt = require('jsonwebtoken')
var {JsonWebTokenError} = require('jsonwebtoken')

var userSchema = mongoose.Schema({
    name: 'string',
    id: 'string',
    password: 'string',
    email: 'string',
    token:'string',
    tokenExp:'Number'
});

const User = mongoose.model('User', userSchema);
const bcrypt = require('bcrypt')
const saltRounds = 10

userSchema.pre('save', function(next) {
    var user = this;
    if(user.isModified('password')){
        bcrypt.genSalt(saltRounds, function(err,salt){
            if(err) return next(err)
            bcrypt.hash(user.password, salt, function(err, hash) {
                if(err) return next(err)
                user.password = hash
                next()
            })
        })
    } else{
        next()
    }
})

userSchema.methods.comparePassword = function(plainPassword, cb){
    bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
        if(err) return cb(err)
        cb(null, isMatch)
    })
}

userSchema.methods.generateToken = function(cb){
    var user = this;
    var token = jwt.sign(user._id.toHexString(), 'secretToken')
    user.token = token
    user.save(function(err, user){
        if(err) return cb(err)
        cb(null, user)
    })
}

userSchema.statics.findByToken = function(token, cb){
    var user = this;

    jwt.verify(token, 'secretToken', function(err, decoded) {

        user.findOne({"_id":decoded, "token": token}, function(err, user){
            if(err) return cb(err);
            cb(null, user);
        })
    })
}
module.exports = User;
