var fs = require('fs')

function findCommand (fileType, os){
    let data = JSON.parse(fs.readFileSync((__dirname + '/methods.json'), 'utf8'))

    if(fileType === "exe")
        return null
    else{
        if(Object.keys(data['windows'][fileType]).length>1){
            return data['windows'][fileType][Object.keys(data['windows'][fileType])[1]]
        }
        return data['windows'][fileType]['default']
    }
}

module.exports = findCommand