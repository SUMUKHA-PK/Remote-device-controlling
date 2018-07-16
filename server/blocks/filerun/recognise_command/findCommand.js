// Called by server/blocks/filerun/recognise_command/index.js

var fs = require('fs')

function findCommand (fileType, os){

    // Parse JSON file methods.json to get the file command
    let data = JSON.parse(fs.readFileSync((__dirname + '/methods.json'), 'utf8'))

    // Windows uses default types
    if(!(Object.keys(data[os]).indexOf(fileType)+1))
        return null
    else if(data[os][fileType]['override']){
        return data[os][fileType]['override']
    }

    return null
}

module.exports = findCommand
