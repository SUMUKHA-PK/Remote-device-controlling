class File {
    constructor( name, fileType){
        this.name = name;
        this.fileType = fileType;
    }
}

File.prototype.getFileType = function(){
    return this.fileType
}

File.prototype.getName = function(){
    return this.name
}

module.exports = File