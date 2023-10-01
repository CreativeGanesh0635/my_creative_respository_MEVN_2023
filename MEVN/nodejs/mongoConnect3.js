var MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";
async MongoClient.connect(url, function (error, db) 
{
    if(error)
    throw error;
    await db.db("collage");
    var dbo = db.db("collage");
    dbo.collection("department").findOne({}, function (error, result){
        if(error)
            throw error;
            console.log(result.name);
            db.close();
        });    
});


