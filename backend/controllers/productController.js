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

}

const editProduct = (req,res) => {
  ( async()=>{
    const payload = req.body;
    console.log( payload )
    const connection = await DBConnection.connect("Products", DBConnection.getClient())
    dbOpers.EditProduct(connection.collection, payload)
    res.send({ "message":"ok" });
  })()
}

const deleteProduct = (req,res) => {
  (async () => {
    const {id} = req.params;
    const connection = await DBConnection.connect("Products", DBConnection.getClient())
    dbOpers.DeleteByProductID( connection.collection, id )
    res.send({ "msg": "success" })
  })()
}

module.exports = {
  getAllProducts,
  editProduct,
  deleteProduct,
  getProduct
}
