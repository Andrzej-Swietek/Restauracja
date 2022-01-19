const http  = require('http');
const path = require("path");
const express = require("express");
const mongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const cors = require('cors')
const hbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3000;

const mongoUrl = "mongodb+srv://admin:admin@cluster.an1bw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new mongoClient(mongoUrl);

const dbName = "Restaurant";
const dbOpers = require("./modules/MongoOperations.js")


app.use(express.static('static'));
app.use(cors())
app.use(express.json());

app.set('views', path.join(__dirname, 'views'));

// app.engine('hbs', hbs({
//   defaultLayout: 'main.hbs' ,
//   helpers: {
//     shortTitle: function (title) {
//       return title.substring(0,10) +"...";
//     },
//     titledTitle: function (title) {
//       return title.replace(/(^|\s)\S/g, function(t) { return t.toUpperCase() });
//     },
//     dashedTitle: (title) => {
//       let new_str = ''
//       title.split(' ').forEach( word => {
//         for(let i=0; i< word.length; i++){
//           if( i !== word.length-1 ) { new_str += word[i] + "-"; }
//           else new_str += word[i] + "  ";
//         }
//       })
//
//       return new_str;
//     }
//   }
// }));
// app.engine('hbs', hbs({
//   extname: '.hbs',
//   partialsDir: "views/partials",
// }));

const userRoutes = require('./routes/user.js');
const productRoutes = require('./routes/product');
app.use(userRoutes);
app.use(productRoutes);

let context = {};
const connect = async (collectionName) => {
  return new Promise ((async resolve => {
    await client.connect();
    console.log("Connected correctly to DB");
    let db = client.db(dbName);
    let col = db.collection(collectionName);
    resolve({database:db,collection:col})
  }))
}

app.get('/', (req, res) => {
  // res.render('index.hbs',context);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, DELETE');
  res.setHeader('Access-Control-Allow-Headers', '*');
  ( async()=> {
    const connection = await connect("Products")
    await dbOpers.SelectAllFromDatabase(connection.collection, (data) => {
      res.send(data)
    })
  })()
});

app.delete("/delete/:id", (req, res) => {
    (async () => {
      const {id} = req.params;
      const connection = await connect("Products")
      dbOpers.DeleteByProductID( connection.collection, id )
      res.send({ "msg": "success" })
    })()
  })

app.post("/edit", (req,res)=>{
  ( async()=>{
    const payload = req.body;
    console.log( payload )
    const connection = await connect("Products")
    dbOpers.EditProduct(connection.collection, payload)
    res.send({ "message":"ok" });
  })()
})

app.post("*", (req,res)=>{
  res.send({ "message":"wrong url" });
})

app.listen(PORT, ()=> {
  console.log('Server listening on  ' + PORT);
});
