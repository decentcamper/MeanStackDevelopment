
var http = require('http');
var errorResp = {
    error: {
        message: "Something really bad has happened",
        code: 909
    },
    data: null
};
var successResp = {
    error: null,
    data: {}
};
var handler = function (req, res) {
    console.log(req.headers);
    res.writeHead(200, {"Content-Type": "application/json"});
    successResp.data.message = "I hope we are all good;";
    res.end(JSON.stringify(successResp) + "\n");

};
var server = http.createServer(handler);
server.listen(3000);
console.log('Now we are talking');





