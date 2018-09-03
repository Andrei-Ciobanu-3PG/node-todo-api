//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server', err);
    }
    console.log('connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b8ce7913eff4bbcc4e7a209')
    // }, {
    //     $set : {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then(result => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
       _id: new ObjectID("5b8cecc23eff4bbcc4e7a2fb")
    },{
        $set: {
            name: 'Andrei'
        },
        $inc: {
            age: 1
        }
    },{
        returnOriginal: false
    }).then(result => {
        return console.log(result);
    });

    client.close();
});