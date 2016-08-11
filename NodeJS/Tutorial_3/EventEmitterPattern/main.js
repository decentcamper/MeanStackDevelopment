var EventEmitter = require('events').EventEmitter;
var fs = require('fs');

/**
 *
 * @param files
 * @param regex
 * @returns {"events".EventEmitter}
 * The EventEmitter created by the following function will produce the following three events:
 * fileread: This event occurs when a file is read
 * found: This event occurs when a match has been found
 * error: This event occurs when an error has occurred during the reading of the file
 */
function findPattern(files, regex) {
    var emitter = new EventEmitter();
    files.forEach(function (file) {
        fs.readFile(file, 'utf8', function (err, content) {
            if (err)
                return emitter.emit('error', err);

            emitter.emit('fileread', file);
            var match = null;
            if (match = content.match(regex))
                match.forEach(function (elem) {
                    emitter.emit('found', file, elem);
                });
        });
    });
    return emitter;
}

findPattern(
    ['fileA.txt', 'fileB.json'],
    /hello \w+/g
)
    .on('fileread', function (file) { //listener function
        console.log(file + ' was read');
    })
    .on('found', function (file, match) {//listener function
        console.log('Matched "' + match + '" in file ' + file);
    })
    .on('error', function (err) {//listener function
        console.log('Error emitted: ' + err.message);
    });

