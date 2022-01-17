const dbOpers = require("../modules/MongoOperations.js");
const DBConnection = require('../DB');

const getAllUsers = (req,res) => {
  (async()=>{
    // const connection = await connect("Users");
    const connection = await DBConnection.connect("Users", DBConnection.getClient())
    dbOpers.SelectAllFromDatabase(connection.collection, (data)=>{
      res.send({ "message":"ok", data: data });
    })
  })()
}
const getUser = (req,res) => {
}
const addUser = (req,res) => {
  (async()=>{
    const payload = req.body;
    console.log( payload )
    // TODO: EWENTUALNIE DODAC POLE CART
    const connection = await DBConnection.connect("Users", DBConnection.getClient())
    dbOpers.InsertToDatabase(connection.collection, payload);
    res.send({ "message":"User Created Successfully" });
  })()
}
const deleteUser = (req,res) => {

}
const editUsersCart = (req,res) => {

}

module.exports = {
  getAllUsers,
  getUser,
  addUser,
  deleteUser,
  editUsersCart
}
