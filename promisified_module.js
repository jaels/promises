
var fs = require('fs');
function read(path) {
    return new Promise(function(resolve, reject) {
        fs.readdir(path, function(err, files) {
            if (err) {
                reject(err);
            } else {
                resolve(files);
            }
        });
    });
}


function stat(newItem) {
    return new Promise(function(resolve, reject) {
        fs.stat(newItem, function(err,stats) {
            if (err) {
                reject(err);
            } else {
                resolve(stats);

            }
        });
    });
}



module.exports.read = read;
module.exports.stat = stat;
