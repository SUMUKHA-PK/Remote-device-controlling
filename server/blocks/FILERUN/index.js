var getExtensionF = require('./file_recogniser')
var getCommandF = require('./recognise_command')
var runFileF = require('./application_runner')

module.exports = function(file){
    
    var getExtension = getExtensionF(file)
    var getCommand = getCommandF(getExtension)

    if(getCommand === null){
        runFileF([file])
    }
    else{
        runFileF([getCommand, file])
    }

}