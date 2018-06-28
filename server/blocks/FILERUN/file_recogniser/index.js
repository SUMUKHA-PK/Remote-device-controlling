// Gets the extension name of the file to be run

const fs = require('fs')

module.exports = function (file) {

    var data = JSON.parse(fs.readFileSync(__dirname + '/formats.json', 'utf8'))

    //get file extension
    var ext = file.slice(file.lastIndexOf('.')+1)

    for (var key in data){
        if(data[key].indexOf(ext)+1){
            return key
        }
    }

    return null
}
