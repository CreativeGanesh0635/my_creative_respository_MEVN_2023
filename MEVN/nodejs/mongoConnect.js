const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://127.0.0.1:27017';

// Database Name
const dbName = 'collage';

// Use async/await to connect to the server
async function connectToServer() {
  const client = await MongoClient.connect(url, { useUnifiedTopology: true });
  const db = client.db(dbName);
  console.log("Connected successfully to server");
  client.close();
}

connectToServer();
