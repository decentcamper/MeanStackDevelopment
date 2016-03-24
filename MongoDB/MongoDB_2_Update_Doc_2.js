/**
 * Created by viveksh2 on 9/9/15.
 */

/**
 * In this example, we demonstrate sending four update requests to the server without waiting for a response.
 *
 * Each request is asking the server to increment the visits count by 1.
 *
 * As you can see, when we fetch the results, after all four requests are complete,
 * the visits count is indeed 4—none of the update requests conflicted with one another.
 *
 * Lots of other update operators are supported by MongoDB.
 *
 * Operators exist for setting a single field, deleting fields,
 * conditionally updating a field if its current value is greater than or smaller than the value we want,
 * and so on.
 *
 * Also there are operators for updating sub collections (arrays) inside a document.
 *
 * For example, consider the case of having a simple tags field inside a document that is an array of strings.
 *
 * Multiple users might want to update this array—some will want to add a tag, others would want remove a tag.
 *
 * MongoDB allows you to update the array on the server using $push (to add an item)
 *
 * and $pull (to remove an item) update operators so you don’t overwrite the complete array.
 *
 *
  * @type {"mongodb".MongoClient}
 */
var MongoClient = require('mongodb').MongoClient;

var website = {
    url: 'http://www.google.com',
    visits: 0
};
var findKey = {
    url: 'http://www.google.com'
};

MongoClient.connect('mongodb://127.0.0.1:27017/demo', function (err, db) {
    if (err) throw err;

    var collection = db.collection('websites');

    collection.insert(website, function (err, docs) {
        var done = 0;
        function onDone(err) {
            done++;
            if (done < 4) return;
            collection.find(findKey).toArray(function (err, results) {
                console.log('Visits:', results[0].visits); // 4
                // cleanup
                collection.drop(function () { db.close() });
            });
        }

        var incrementVisits = { '$inc': { 'visits': 1 } };
        collection.update(findKey, incrementVisits, onDone);
        collection.update(findKey, incrementVisits, onDone);
        collection.update(findKey, incrementVisits, onDone);
        collection.update(findKey, incrementVisits, onDone);

    });
});

