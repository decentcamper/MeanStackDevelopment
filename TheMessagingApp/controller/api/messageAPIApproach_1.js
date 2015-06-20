/**
 * This is a fine solution that has a side benefit of allowing you to
 * easily mock out the app object if you wanted to write a test.
 * @type {exports|module.exports}
 */

var appConstants = require('../util/appConstants');
var Message = require('../../models/Message');
module.exports = function (app) {
    app.get('/api/getMessagesFinal', function (request, response, next) {
        Message.find()
            .sort('-date')
            .exec(function (err, messages) {
                if (err) {
                    return next(err)
                }
                response.json(messages);
            })
    });
    app.post('/api/saveMessage', function (req, res, next) {
        var post = new Message({
            username: req.body.username,
            body: req.body.body
        });
        console.log('created the Message');
        post.save(function (err, post) {
            if (err) {
                return next(err)
            }
            console.log("The request successful" + post);
            res.json(201, post)
        })
    });
};






