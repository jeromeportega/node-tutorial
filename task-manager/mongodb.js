// CRUD Operations

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();

console.log(id);

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database.');
    }
    
    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     name: 'Jerry',
    //     age: 18
    // }, (error, results) => {
    //     if (error) {
    //         return console.log('Unable to insert user!');
    //     }

    //     console.log(results.ops);
    // });

    // db.collection('users').insertMany([
    //     {
    //         name: 'Mary',
    //         age: 23,
    //     },
    //     {
    //         name: 'Jackson',
    //         age: 30,
    //     },
    // ], (error, results) => {
    //     if (error) {
    //         console.log('Unable to insert documents!');
    //     }

    //     console.log(results.ops);
    // });

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Take out the trash.',
    //         completed: false,
    //     },
    //     {
    //         description: 'Wash the dishes.',
    //         completed: true,
    //     },
    //     {
    //         description: 'Mow the Lawn',
    //         completed: false,
    //     },
    // ], (error, results) => {
    //     if (error) {
    //         console.log('Unable to insert documents.');
    //     }

    //     console.log(results.ops);
    // });
});