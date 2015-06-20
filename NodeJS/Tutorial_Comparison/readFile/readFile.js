
// Declare variables
var fs = require('fs'),
    obj;

// Read the file and send to the callback
fs.readFile('/Users/viveksh2/Documents/UCSC/WebFrameworkUsingJavaScript/JavaComparison/ComparisonProject/src/main/java/com/ucsc/java/Express.txt', handleFile);

// Write the callback function
function handleFile(err, data) {
    if (err) throw err;
   // obj = JSON.parse(data);
    console.log(data.toString());

}

exports.handleFile = handleFile;
