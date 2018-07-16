const File = require('../models/File')
const Folder = require('../models/Folder')
const type = require('../FILERUN/file_recogniser')
const { execSync } = require('child_process')
const fs = require('fs')

function getFileSize(filename) {
    const stats = fs.statSync(filename)
    const fileSizeInBytes = stats.size
    return fileSizeInBytes / 1000000.0
}

const dir = function (currentDirectory) {
    var filesData = execSync('dir /b /a-d', {
        cwd: currentDirectory
    })

    filesData = filesData.toString().split('\r\n')

    filesData = filesData.filter((data) => {
        return Boolean(data)
    })

    filesData = filesData.map((file) => {
        let fileType = type(file)
        return new File(file, fileType)
    })

    var foldersData = execSync('dir /s /b /o:n /a:d', {
        cwd: currentDirectory
    })

    foldersData = foldersData.toString().split('\r\n')

    foldersData = foldersData.filter((data) => {
        return Boolean(data)
    })

    foldersData = foldersData.map((folder) => {
        return new Folder(folder, cwd + '/' + folder)
    })
}

module.exports = dir