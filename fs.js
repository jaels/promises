

var fs = require('fs');

function tree(checkedFile) {

    fs.readdir(checkedFile, function (err, data) {
        if(err) {
            console.log(err);
            return;
        }
        var files = data;
        console.log(checkedFile + " contains " + files)
        files.forEach(function(item) {
            fs.stat(checkedFile + item, function(err,stats) {
                if(err) {
                    console.log(err);
                    return;
                }

                if (stats.isDirectory()===true) {
                    tree(checkedFile + item + "/");
                }

            });

        });
    });

}

tree(__dirname + '/files/');
