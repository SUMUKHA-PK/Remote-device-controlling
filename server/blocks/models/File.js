class File {
    constructor( name, fileType, size){
        this.name = name;
        this.fileType = fileType;
        this.size = size;
    }
}

File.prototype.getSize = function(){
    if(this.size)
        return this.size
    else
        return 0
}

File.prototype.getFileType = function(){
    return this.fileType
}

File.prototype.getSize = function(){
    return this.name
}

module.exports = File