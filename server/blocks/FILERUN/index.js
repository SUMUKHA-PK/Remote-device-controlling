// Calls file_recogniser, command recogniser and runs the application by calling application runner

var getExtensionF = require('./file_recogniser')
var getCommandF = require('./recognise_command')
var runFileF = require('./application_runner')

module.exports = function (file) {

    // get file extension (mkv)
    var getExtension = getExtensionF(file)

    // get path ("C:/Program Files (x86)/Windows Media Player/wmplayer.exe")
    var getCommand = getCommandF(getExtension)

    // Run the file
    if (getCommand.os === "windows")
        if (getCommand.findCommand === null && getExtension === "exe") {
            runFileF([file])
        }
        else if(getCommand.findCommand === null){
            runFileF([file])
        }
        else {
            runFileF([getCommand.findCommand, file])
        }
    
    else if (getCommand.os === "linux"){
        runFileF(['xdg-open', `"${file}"`])
    }
}
