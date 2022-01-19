const dbOpers = require("../modules/MongoOperations.js");
const DBConnection = require('../DB');

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
const addUser = (req,res) => {
  (async()=>{
    const payload = req.body;
    console.log( payload )
    payload["cart"]=[];
    const connection = await DBConnection.connect("Users", DBConnection.getClient())
    dbOpers.InsertToDatabase(connection.collection, payload);
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

}

module.exports = {
  getAllUsers,
  getUser,
  addUser,
  deleteUser,
  editUsersCart
}
