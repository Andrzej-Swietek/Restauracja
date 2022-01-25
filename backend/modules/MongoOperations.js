module.exports = {

  //insert

  InsertToDatabase: function (collection, data) {
    collection.insert(data, function (err, result) {
      console.log(result)
    });
  },

  //select all - zwraca tablicę pasujących dokumentów

  SelectAllFromDatabase: async function (collection, callback) {
      collection.find({}).toArray(function (err, items) {
        console.log(items)
        callback(items)
      });
  },

  FindUser: async function (collection, user, callback) {
    collection.find({email: user.email, password: user.password}).toArray(function (err, items) {
      console.log(items)
      callback(items)
    });
  },

  EditUser:async function(collection, email, cart){
    collection.updateOne(
      { email: email},
      { $set: { cart: cart }  },
    )
  },
  BanUser: function(collection, email, value){
    collection.updateOne(
      { email: email},
      { $set: { banned: value }  },
    )
  },
  ChangeRole: function (collection,email,value){
    collection.updateOne(
      {email:email},
      { $set: {role:value} },
    )
  },

  BanUser: function(collection, email, value){
    collection.updateOne(
      { email: email},
      { $set: { banned: value }  },
    )
  },

  //select - zwraca tablicę pasujących dokumentów, z ograniczeniem do {login:"test"}

  SelectAndLimit: function (collection, objectToFind, callback) {
    collection.find(objectToFind).toArray(function (err, items) {
      console.log(items)
      if (err) console.log(err)
      //funkcja zwracająca dane na zewnątrz
      else callback(items)
    });
  },

  DeleteById: function (ObjectID, collection, id) {
    collection.remove({_id: ObjectID(id)}, function (err, data) {
      console.log(data)
    })
  },

  DeleteAll: function (collection) {
    collection.remove({}, () => {
      console.log("Collection Cleared")
    })
  },

  UpdateById: function (ObjectID, collection, data) {
    collection.updateOne(
      {_id: ObjectID("id_dokumentu_ktory_chcemy_usunac")},
      {$set: {pass: "test"}},
      function (err, data) {
        console.log("update: " + data)
      }
    )
  },

  // DeleteByProductID: function (collection, id) {
  //   collection.remove({ id: id }, () => {
  //     console.log(`Collection: ${ id } deleted successfully`)
  //   })
  // },
  DeleteByProductID: function (collection, id) {
    collection.deleteOne({ id: id }, () => {
      console.log(`Collection: ${ id } deleted successfully`)
    })
  },


  EditProduct: function (collection, name, quantity) {
    collection.updateOne(
      { name: name },
      { $set: {quantity:quantity}  },
    )
  }

}

