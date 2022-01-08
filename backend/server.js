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

let context = {};
const connect = async (collectionName) => {
  return new Promise ((async resolve => {
    await client.connect();
    console.log("Connected correctly to server");
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
app.listen(PORT, ()=> {
  console.log('Server listening on  ' + PORT);
});
