const mongoClient = require('mongodb').MongoClient;

class DBConnection {
  static mongoClient;
  static dbName = "Restaurant";
  static isInitialized() {
    return this.mongoClient !== undefined;
  }
  static getClient(){
    if (this.isInitialized()) return this.mongoClient;
    const mongoUrl = "mongodb+srv://admin:admin@cluster.an1bw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    this.mongoClient = new mongoClient(mongoUrl);
    return this.mongoClient
  }
  static connect(collectionName,client){
    return new Promise ((async resolve => {
      await client.connect();
      console.log("Connected correctly to DB");
      let db = client.db(DBConnection.dbName);
      let col = db.collection(collectionName);
      resolve({database:db,collection:col})
    }))
  }
}
module.exports = DBConnection
