/**
 * Created by viveksh2 on 9/9/15.
 */

/**
 * One final thing deserving special attention is the fact that
 * the query functions (for example, find, findOne) are chainable.
 *
 * This allows you to build advanced queries by adding function calls.
 *
 * The final query is sent to the server after you call the exec function.
 *
 * @type {*|exports|module.exports}
 *
 */
var mongoose = require('mongoose');

// Define a schema
var tankSchema = new mongoose.Schema({ name: 'string', size: 'string' });
tankSchema.methods.print = function () { console.log('I am', this.name, 'the', this.size); };

// Compile it into a model
var Tank = mongoose.model('Tank', tankSchema);

mongoose.connect('mongodb://127.0.0.1:27017/mongo_1');
var db = mongoose.connection;
db.once('open', function callback() {
    console.log('connected!');

    // Use the model
    var tony = new Tank({ name: 'tony', size: 'small' });
    tony.print(); // I am tony the small
    tony.save(function (err) {
        Tank.findOne({ name: 'tony' }).exec(function (err, tank) {

            // You get a model instance all setup and ready!
            tank.print();

            //db.collection('tanks').drop(function () { db.close();})
        });
    });
});
