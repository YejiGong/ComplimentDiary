var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
var db = mongoose.connection;

db.on('error', function(){
    console.log('Connection fail');
});

db.once('open', function(){
    console.log('connectied');
});

var user = mongoose.Schema({
    name: 'string',
    id: 'string',
    password: 'string'
});

var User = mongoose.model('Schema', user);
var newUser = new User({name:'k', id:'abcd', password:'1234'});
newUser.save(function(error, data){
    if(error){
        console.log(error);
    }else{
        console.log('saved');
    }
});
User.find(function(error, users){
    console.log('---Read all---');
    if(error){
        console.log(error);
    }else{
        console.log(users);
    }
})