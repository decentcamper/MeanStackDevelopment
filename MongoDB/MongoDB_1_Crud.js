/**
 * In this demo, we connect to the demo database and then use the people collection.
 *
 * We insert a demo person into the people collection.
 *
 * Notice that the server returns the actual objects inserted.
 *
 * Also note that it modified our memory document with a _id field.
 *
 * We then use the find method to search for any object that has the name:'John'.
 *
 * Finally, we remove all such objects from the database and disconnect.
 * @type {"mongodb".MongoClient}
 */

var MongoClient = require('mongodb').MongoClient;

var demoPerson = { name: 'John', lastName: 'Smith' };
var findKey = { name: 'John' };

/**
 * Creating a connection with the mongodb database: mongo_1
 */
MongoClient.connect('mongodb://127.0.0.1:27017/mongo_1', function (err, db) {
    if (err) throw err;
    console.log('Successfully connected');

    // Creating a collection called poeple....
    var collection = db.collection('people');
    collection.insert(demoPerson, function (err, docs) {
        console.log('Inserted', docs.ops[0]);
        console.log('ID:', demoPerson._id);


        //finding the record from the collection using a key..
        collection.find(findKey).toArray(function (err, results) {
            console.log('Found results:', results);

            // Removing the inserted record....
            collection.remove(findKey, function (err, results) {
                console.log('Deleted person');

                db.close();
            });
        });
    });
});