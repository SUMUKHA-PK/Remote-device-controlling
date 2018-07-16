class Folder {
    //This is called by /server/change_directory/index.js
    constructor(name,path){
        this.name = name;
        this.path = path;
    }
}

Folder.prototype.getName = function(){
    return this.name
}

Folder.prototype.getPath = function(){
    return this.path
}

module.exports = Folder