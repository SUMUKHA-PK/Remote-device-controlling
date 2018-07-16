const File = require('../models/File')
const Folder = require('../models/Folder')
const type = require('../filerun/file_recogniser')
const { execSync } = require('child_process')
const fs = require('fs')
const os = require('../filerun/recognise_command/getos')
const fileCommand = os === "windows" ? 'dir /b /a-d' : 'ls -p | grep -v /';
const folderCommand = os === "windows" ? 'dir /s /b /o:n /a:d' : 'ls -d */';
const splt = os === "windows" ? '\r\n' : '/\n';

function getFileSize(filename) {
    const stats = fs.statSync(filename)
    const fileSizeInBytes = stats.size
    return fileSizeInBytes / 1000000.0
}

const dir = function (currentDirectory) {
    var filesData = execSync( fileCommand, {
        cwd: currentDirectory
    })

    filesData = filesData.toString().split(splt)

    filesData = filesData.filter((data) => {
        return Boolean(data)
    })

    filesData = filesData.map((file) => {
        let fileType = type(file)
        return new File(file, fileType)
    })

    var foldersData = execSync( folderCommand, {
        cwd: currentDirectory
    })

    foldersData = foldersData.toString().split(splt)

    foldersData = foldersData.filter((data) => {
        return Boolean(data)
    })

    foldersData = foldersData.map((folder) => {
        return new Folder(folder, currentDirectory + '/' + folder)
    })
}

module.exports = dir