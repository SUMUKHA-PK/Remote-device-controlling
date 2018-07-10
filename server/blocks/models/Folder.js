class Folder {
    //This is called by /server/change_directory/index.js
    constructor(name,size,timeCreated,path){
        this.name = name;
        this.size  = size;
        this.timeCreated = timeCreated;
        this.path = path;
    }
}


Folder.prototype.getSize = function(){
    if(this.size)
        return this.size
    else
        return 0
}

Folder.prototype.getTimeCreated = function(){
    if(this.timeCreated)
        return this.timeCreated
    else
        return Date.now()
}

Folder.prototype.getSize = function(){
    return this.name
}

Folder.prototype.getPath = function(){
    return this.path
}

module.exports = Folder