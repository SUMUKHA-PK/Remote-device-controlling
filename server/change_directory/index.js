class Folder {
    constructor(name,size,time_created,path){
        this.name = name;
        this.size  = size;
        this.time_created = time_created;
        this.path = path;
    }
}

class File {
    constructor(name,file_type,size){
        this.name = name;
        this.file_type = file_type;
        this.size = size;
    }
}

function change_directory(currect_dir,command){
    var result = parse_input(command);
    var res = result[0];
    var arg = result[1];
    var folder = new Folder();
    if((res)==-1){
        ls();
    }
    else{
        if(arg == "previous"){
            var prev_name = get_file_name(currect_dir.path);           // If cur dir is "home/system/test" , return "system"
            folder.path = change_name(currect_dir.path,prev_name);     // If cur dir is "home/system/test" , change to "home/system"
            folder.name = prev_name;
            folder.time_created = get_time(folder.path,folder.name);
            folder.size = get_size(folder.path,folder.name); 
        }
        else{
            folder.path = currect_dir.path + "/" + arg;                //If old dir is "/home/system" when cd'd to say ~/test, the new dir will be "/home/system/test"
            folder.name = arg;
            folder.time_created = get_time(folder.path,folder.name);
            folder.size = get_size(folder.path,folder.name); 
        }
    }
}



/*
To Do:
1.get_time
2.get_size
3.change_name
4.get_file_name
5.

*/