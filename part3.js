
var fs = require('fs');
var obj = {};
var counter = 0;

tree(__dirname + '/files/', obj);

function tree(checkedFile, obj) {

    counter+=1;
    fs.readdir(checkedFile, function (err, data) {
        if(err) {
            console.log(err);
            return;
        }
        var contents = data;
        contents.forEach(function(item) {

            fs.stat(checkedFile + item, function(err,stats) {

                if(err) {
                    console.log(err);
                    return;
                }

                if(stats.isDirectory()===false) {
                    obj[item] = stats['size'];
                    counter-=1;
                }
                else {
                    obj[item] = {};
                    counter+=1;
                    tree(checkedFile + item + "/", obj[item]);
                }
                check();
            });
        });

    });
}

function check () {
    if (counter===1) {
        console.log(obj);
    }
}
