const File = require('../models/File')
const Folder = require('../models/Folder')
const type = require('../FILERUN/file_recogniser')
const { execSync } = require('child_process')
const fs = require('fs')

const ls = function (currentDirectory) {
    var filesData = execSync('ls -p | grep -v /', {
        cwd: currentDirectory
    })

    filesData = filesData.toString().split('\n')

    filesData = filesData.filter((data) => {
        return Boolean(data)
    })

    filesData = filesData.map((file) => {
        let fileType = type(file)
        return new File(file, fileType)
    })

    var foldersData = execSync('ls -d */', {
        cwd: currentDirectory
    })

    foldersData = foldersData.toString().split('/\n')

    foldersData = foldersData.filter((data) => {
        return Boolean(data)
    })

    foldersData = foldersData.map((folder) => {
        return new Folder(folder, currentDirectory + '/' + folder)
    })

    console.log(filesData, foldersData)
}

module.exports = ls

ls('/home/some_guyy/pk/git/Remote-device-controlling')