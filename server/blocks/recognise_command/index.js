var os = require('./getos')

module.exports = function (fileType) {
    if (os === "windows") {
        var findCommand = require('./findCommand')(fileType, os)
    }

    return findCommand
}