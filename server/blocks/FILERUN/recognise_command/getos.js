// Called by server/blocks/FILERUN/recognise_command/index.js

var os = "windows"
if (process.platform === "darwin") {
    os = "mac"
}
else if (process.platform === "linux") {
    os = "linux"
}

module.exports = os
