const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://127.0.0.1:27017/collage';

async function findOne() {

    const client = await MongoClient.connect(url, { useNewUrlParser: true })
        .catch(err => { console.log(err); });

    if (!client) {
        return;
    }

    try {

        const db = client.db('collage');

        let collection = db.collection('department');

        let query = { F_nm: 'Ganesh' };

        let res = await collection.findOne(query);
console.log(res);

    } catch (err) {

        console.log(err); 
    } finally {

        client.close();
    }
}

findOne();