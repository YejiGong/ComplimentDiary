const express = require('express');
const path = require('path');
const test=require('./router/test.js');
const app = express();
const server = require('http').createServer(app);
const port = 5000;
const {auth} = require('./middleware/auth');
const bodyparser = require('body-parser');

app.use(express.static(path.join(__dirname, '../../frontend/build')));

app.use(bodyparser.urlencoded({extends:true}));
app.use(bodyparser.json());
const mongoose=require('mongoose');
const {User} = require('./models/user');
const { allowedNodeEnvironmentFlags } = require('process');

var options = require('./../option');
var loginData = {user:options.storageConfig.user, password: options.storageConfig.password};
var URL = "mongodb+srv://"+loginData.user+":"+loginData.password+"@cluster0.r31i4bi.mongodb.net/?retryWrites=true&w=majority";
console.log(URL);
mongoose.connect(URL,{})
        .then(()=> console.log('Successfully connected to DB'))
        .catch(e => console.error('error happend', e));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,'../../frontend/build/index.html'));
})
app.use('/api', test);
app.listen(port, ()=> {
    console.log('server is running on port 5000');
})

const {Compliment} = require('./models/compliments');
app.post('/api/users/write', (req,res) => {
    console.log(req.body, res.body);
    const compliment = new Compliment(req.body)
    compliment.save((err,compliments) => {
        console.log(err);
        if(err) return res.json({success:fail, err})
        return res.status(200).json({
            success:true
        })
    })
})
app.post('/api/users/register', (req,res)=>{

    const user = new User(req.body)
    user.save((err,userInfo) => {
        if(err) return res.json({success:false, err})
        return res.status(200).json({
            success:true
        })
    })
})

const cookieParser = require('cookie-parser');
const { fail } = require('assert');
app.use(cookieParser());
app.post('/api/users/login', (req,res) =>{
    User.findOne({id:req.body.id}, (err, user) =>{
        if(!user) {
            return res.json({
                loginSuccess: false,
                message: '존재하지 않는 id입니다'
            })
        }

        user.comparePassword(req.body.password, (err, isMatch) => {
            if(!isMatch){
                return res.json({
                    loginSuccess:false,
                    message: '잘못된 비밀번호입니다'
                })
            }

            user.generateToken((err,user)=>{
                if(err){
                    return res.status(400).send(err);
                }

                res.cookie("x_auth", user.token)
                .status(200)
                .json({loginSuccess:true, userId:user._id})
            })
        })

    })
})

app.get('/api/users/auth', auth, (req,res) => {
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0? false: true,
        isAuth: true,
        email:req.user.email,
        name:req.user.name,
    })
})
app.get('/api/users/logout', auth, (req,res)=>{
    User.findOneAndUpdate({_id: req.user._id}, {token:""}, (err,user)=>{
        if(err) return res.json({success:false, err});
        return res.status(200).send({
            success: true
        })
    })
})