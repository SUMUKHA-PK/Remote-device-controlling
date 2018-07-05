class Folder {
    //This is called by /server/change_directory/index.js
    constructor(name,size,time_created,path){
        this.name = name;
        this.size  = size;
        this.time_created = time_created;
        this.path = path;
    }
}
