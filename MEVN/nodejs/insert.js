var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://0.0.0.0:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("collage");
  var myobj = { F_nm: "Mayur", L_nm: "Kamble", DOB: "12/3/2005", Phone_no: "8711929946" };
  dbo.collection("department").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});