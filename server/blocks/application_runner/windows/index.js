const { execFile } = require("child_process")
const log = require("../../logger")

// "C:/Program Files (x86)/Windows Media Player/wmplayer.exe", ["D:/TV Shows/Big Bang Theory/The Big Bang Theory Season 3 (2009-2010) BluRay 720p [RoHiT]/The Big Bang Theory S3E01 - The Electric Can Opener Fluctuation [RoHiT].mkv"]

module.exports = function (pathList) {
    
    var executable  = pathList.splice(0,1)[0]

    execFile(`${executable}`, pathList, (err, stdout, stderr) => {
      //  logging implemntation to be done
      log(stdout,stderr,err)
    }).unref()

}