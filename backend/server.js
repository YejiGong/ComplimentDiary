var mongoose = require('mongoose');
mongoose.connect("mongodb+srv://yejigong:<password>@cluster0.r31i4bi.mongodb.net/?retryWrites=true&w=majority",{
//useNewUrlParser:true,
//useUnifiedTopology:true,
//useCreateIndex:true,
//useFindAnyModify: false,
//dbName: "compliment"
}).then(()=>console.log('mongoDB conn')).catch((err) => console.error(err));
var db = mongoose.connection;

db.on('error', function(){
    console.log('Connection fail');
});

db.once('open', function(){
    console.log('connected');
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