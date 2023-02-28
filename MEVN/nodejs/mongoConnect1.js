const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://0.0.0.0:27017/collage';

async function findOne() {

    const client = await MongoClient.connect(url, { useNewUrlParser: true })
        .catch(err => { console.log(err); });

    if (!client) {
        return;
    }

    try {

        const db = client.db('collage');

        let collection = db.collection('department');

        let query = { F_nm: 'Sunil' };

        let res = await collection.findOne(query);
console.log(res);

    } catch (err) {

        console.log(err); 
    } finally {

        client.close();
    }
}

findOne();