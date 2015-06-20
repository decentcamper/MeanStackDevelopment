var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/messageApp', function () {
    console.log('mongodb connected')
});
module.exports = mongoose;