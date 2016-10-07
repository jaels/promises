
var prom = require('./promisified_module.js');
var fs = require('fs');
var counter=0;
function bonus (path) {
    counter+=1;
    var filesPromise = prom.read(path);

    filesPromise.then(function(files) {
        var newFiles = files.map(function(item) {
            return prom.stat(path+item).then(function(stats) {
                if(stats.isDirectory()) {
                    console.log(path+item + " is a directoy");
                    bonus(path+item+'/');
                } else {
                    console.log(path+item + " is not a directoy");
                };
            });

        });
        return Promise.all(newFiles);
    }).then(function() {
        counter-=1;
        if (counter===0) {
            console.log('done!');
        }
    }).catch(function(e) {
        console.log(e);
    });
}



bonus(__dirname + '/files/');
