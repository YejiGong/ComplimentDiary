var mongoose = require('mongoose');
var jwt = require('jsonwebtoken')
var {JsonWebTokenError} = require('jsonwebtoken')

var userSchema = mongoose.Schema({
    name: {
        type:'string',
        required:true,
    },
    id: {
        type: 'string',
        unique: 1,
        required:true,
    },
    password: {
        type:'string',
        minlength: 5,
        required:true,
    },
    email: {
        type:'string',
        required:true,
        match:/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
    },
    token:'string',
    tokenExp:'Number'
});

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
                console.log(user.password)
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

const User = mongoose.model('User', userSchema);
module.exports = {User};
