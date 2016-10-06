
var fs = require('fs');
var obj = {};
function tree(checkedFile, obj) {
    var contents = fs.readdirSync(checkedFile);
    contents.forEach(function(item) {
        var stats = fs.statSync(checkedFile + item);
        if(stats.isDirectory()===false) {
            obj[item] = stats['size'];
        }
        else {
            obj[item] = {};
            tree(checkedFile + item + "/", obj[item]);
        }
    });

}

tree(__dirname + '/files/', obj);

console.log(obj);

var json = JSON.stringify(obj,null,4);

fs.writeFile('files.JSON', json);
