/**
 * Created by viveksh2 on 9/9/15.
 */

var MongoClient = require('mongodb').MongoClient;

var demoPerson = { name: 'John', lastName: 'Smith' };
var findKey = { name: 'John' };

MongoClient.connect('mongodb://localhost/mongo_1', function (err, db) {
    if (err) throw err;

    var collection = db.collection('people');

    collection.insert(demoPerson, function (err, docs) {

        demoPerson.lastName = 'Martin';
        /**
         *You simply update the object and pass it back in to the database.
         *
         * The database looks up the object by _id and sets the new values as specified.
         *
         * The save function replaces the entire document.
         *
         * However, most of the time you will not want to replace the entire document with a new version.
         *
         * That would be really bad in a distributed, data-intensive environment.
         *
         * Many people might want to modify different fields of the document at about the same time.
         *
         * This is where the collection.update method and the update operators come in.
         */
        collection.save(demoPerson, function (err) {
            console.log('Updated');
            collection.find(findKey).toArray(function (err, results) {
                console.log(results);

                // cleanup
                collection.drop(function () { db.close() });
            });
        });
    });
});

