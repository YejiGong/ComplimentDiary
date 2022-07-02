var express = require('express');
var router = express.Router();
var port = 3000

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017",{
useNewUrlParser:true,
useUnifiedTopology:true,
useCreateIndex:true,
useFindAnyModify: false,
dbName: "compliment"
}).then(()=>console.log('mongoDB conn')).catch((err) => console.error(err));
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
