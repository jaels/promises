
var prom = require('./promisified_module.js');
var fs = require('fs');

function bonus (path) {

    var filesPromise = prom.read(path);

    filesPromise.then(function(files) {
        var newFiles = files.map(function(item) {
            prom.stat(path+item).then(function(stats) {
                if(stats.isDirectory()) {
                    console.log(path+item + " is a directoy");

                    bonus(path+item+'/');
                } else {
                    console.log(path+item + " is not a directoy");
                };
            });

        });
    }).catch(function(e) {
        console.log(e);
    });
}



bonus(__dirname + '/files/');
