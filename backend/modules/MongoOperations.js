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

  DeleteByProductID: function (collection, id) {
    collection.remove({ id: id }, () => {
      console.log(`Collection: ${ id } deleted successfully`)
    })
  },

  EditProduct: function (collection, payload) {
    collection.updateOne(
      { id: payload.id },
      { $set: payload  },
    )
  }

}
