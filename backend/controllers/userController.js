require('dotenv').config()
const dbOpers = require("../modules/MongoOperations.js");
const DBConnection = require('../DB');
const Crypto = require('../Crypto');
const nodemailer = require('nodemailer');
const jwt = require("jsonwebtoken");


const EMAILSETUP = {
  address:'ncesl2015@gmail.com',
  pass: 'antropomancja'
}
const transporter = nodemailer.createTransport({
  host: 'mail.localhost',
  service: 'gmail',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: EMAILSETUP.address,
    pass: EMAILSETUP.pass
  },
  tls:{
    rejectUnauthorized:false
  }
});


const getAllUsers = (req,res) => {
  (async()=>{
    const connection = await DBConnection.connect("Users", DBConnection.getClient())
    dbOpers.SelectAllFromDatabase(connection.collection, (data)=>{
      res.send({ "message":"ok", data: data });
    })
  })()
}
const getUser = (req,res) => {
  (async()=>{
    const {id} = req.params;
    const connection = await DBConnection.connect("Users", DBConnection.getClient())
    dbOpers.SelectAllFromDatabase(connection.collection, (data)=>{
      res.send({ "message":"ok", data: data.filter( e=> e.id == id )[0] });
    })
  })()
}

const login = (req,res) => {
  (async()=>{
    const data = req.body;
    const connection = await DBConnection.connect("Users", DBConnection.getClient())
    dbOpers.FindUser(connection.collection, { email: data.email, password: Crypto.hash(data.password) }, (user)=>{

      if(user.length>0){
          user[0]["token"] = jwt.sign(user[0], process.env.ACCESS_TOKEN);
          res.send(user[0]);
      }
      else
        res.send(JSON.stringify({"message":"rejected"}))

    })
  })()
}

const addUser = (req,res) => {
  (async()=>{
    const payload = req.body;
    console.log( payload )

    payload["cart"] = [];
    payload.password = Crypto.hash(payload.password);
    // console.log(Crypto.hash(payload.password))
    payload["role"] = ["client"];
    const connection = await DBConnection.connect("Users", DBConnection.getClient())
    dbOpers.InsertToDatabase(connection.collection, payload);

    // SENDING EMAIL
    let mailOptions = {
      from: EMAILSETUP.address,
      to: payload.email,
      subject: 'WELCOME',
      html: '<h1>Welcome to our Restaurant</h1><p>Have a good meal</p>'
    }
    // transporter.sendMail(mailOptions, function(error, info){
    //   if (error) { console.log(error);}
    //   else { console.log('Email sent: ' + info.response); }
    // });

    res.send({ "message":"User Created Successfully" });
  })()
}
const deleteUser = (req,res) => {
  (async () => {
    const {id} = req.params;
    const connection = await DBConnection.connect("Users", DBConnection.getClient())
    dbOpers.DeleteByProductID( connection.collection, id )
    res.send({ "msg": "success" })
  })()
}
const editUsersCart = (req,res) => {
  (async () => {
    console.log(req.body)
    const connection = await DBConnection.connect("Users", DBConnection.getClient())
    dbOpers.EditUser(connection.collection, req.body.email, req.body.cart, ()=>{
      res.send({ "msg": "success" })
    })
  })()
}
const banUser = (req,res) => {
  (async () => {
    const connection = await DBConnection.connect("Users", DBConnection.getClient())
    dbOpers.BanUser(connection.collection, req.body.email, req.body.value);
    res.send({ "msg": `User Banned` })
  })()
}
const changeRole = (req,res) =>{
  (async () => {
    const connection = await DBConnection.connect("Users", DBConnection.getClient())
    dbOpers.ChangeRole(connection.collection, req.body.email, req.body.value);
    res.send({ "msg": `Role changed` })
  })()
}

module.exports = {
  getAllUsers,
  getUser,
  addUser,
  deleteUser,
  editUsersCart,
  login,
  banUser,
  changeRole
}
