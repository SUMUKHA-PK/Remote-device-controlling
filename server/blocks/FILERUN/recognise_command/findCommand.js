var fs = require('fs')

function findCommand (fileType, os){

    // Parse JSON file methods.json to get the file command
    let data = JSON.parse(fs.readFileSync((__dirname + '/methods.json'), 'utf8'))

    // Windows uses default types
    if(!(Object.keys(data[os]).indexOf(fileType)+1))
        return null
    else if(data[os][fileType]['overide']){
        return data[os][fileType]['overide']
    }

    return null
}

module.exports = findCommand