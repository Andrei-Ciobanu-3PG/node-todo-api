//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server', err);
    }
    console.log('connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //         _id: new ObjectID('5b893e64ad866821c2452fef')
    //     }).toArray()
    //     .then((docs) => {
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     },(error) => {
    //         console.log('Unable to fetch todos', err)
    //     });

    // db.collection('Todos').find().count()
    //     .then((count) => {
    //         console.log(`Todos count: ${count}`);
    //     },(error) => {
    //         console.log('Unable to fetch todos', err)
    //     });

    db.collection('Users').find({name: 'Andrei'}).toArray().then(
        result => {
            console.log(result);
        },
        err => {
            console.log('could not fetch users', err)
        }
    );

    client.close();
});