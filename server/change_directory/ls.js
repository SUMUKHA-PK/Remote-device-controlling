function ls(source){
    const { lstatSync, readdirSync } = require('fs')
    const { join } = require('path')

    const isDirectory = source => lstatSync(source).isDirectory()
    const getDirectories = source => readdirSync(source).map(name => join(source, name)).filter(isDirectory)
}

//Not sure about this code, will get back to this