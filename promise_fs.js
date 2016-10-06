
var prom = require('./promisified_module.js')
var fs = require('fs');
var path = (__dirname + '/files/');

var filesPromise = prom.read(path);

filesPromise.then(function(files) {
    var newFiles = files.map(function(item) {
        var newItem = __dirname + '/files/' + item;
        return prom.stat(newItem).then(function(stats) {
            if(stats.isDirectory()) {
                console.log(item + " is a directoy");
            } else {
                console.log(item + " is not a directoy");
            };
        });
    });
    return Promise.all(newFiles);
}).then(function() {
    console.log('done!');
}).catch(function(e) {
    console.log(e);
});


// Promise.all([
//
// ]).then(function() {
//     console.log("done!")
// }).catch(function() {
//     console.log('At least one of my promises was rejected :(');
// });
