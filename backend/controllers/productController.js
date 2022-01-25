const DBConnection = require("../DB");
const dbOpers = require("../modules/MongoOperations");


const getAllProducts = (req,res) => {
  ( async()=> {
    const connection = await DBConnection.connect("Products", DBConnection.getClient())
    await dbOpers.SelectAllFromDatabase(connection.collection, (data) => {
      res.send(data)
    })
  })()
}

const getProduct = (req,res) => {
  (async()=>{
    const {id} = req.params;
    const connection = await DBConnection.connect("Products", DBConnection.getClient())
    dbOpers.SelectAllFromDatabase(connection.collection, (data)=>{
      res.send({ "message":"ok", data: data.filter( e=> e.id == id )[0] });
    })
  })()
}

const editProduct = (req,res) => {
  ( async()=>{
    console.log( req.body )
    const connection = await DBConnection.connect("Products", DBConnection.getClient())
    dbOpers.EditProduct(connection.collection, req.body.name, req.body.quantity)
    res.send({ "message":"ok" });
  })()
}

const deleteProduct = (req,res) => {
  (async () => {
    const {id} = req.params;
    console.log( id, req.params )
    const connection = await DBConnection.connect("Products", DBConnection.getClient())
    dbOpers.DeleteByProductID( connection.collection, parseInt(id) )
    res.send({ "msg": "success" })
  })()
}

module.exports = {
  getAllProducts,
  editProduct,
  deleteProduct,
  getProduct
}
