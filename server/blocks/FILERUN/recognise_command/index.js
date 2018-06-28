// Used to get the application runner

// Get the OS (windows, linux or mac)
var os = require('./getos')

module.exports = function (fileType) {
    var findCommand = require('./findCommand')(fileType, os)
    return findCommand
}