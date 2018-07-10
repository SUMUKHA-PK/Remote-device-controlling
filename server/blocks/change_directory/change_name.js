function change_name(cur_path,name){
    //This is called by /server/change_directory/index.js
    name = "/" + name;              //If it is "test", changed to "/test"
    cur_path.replace(name,"");      //If curr path is "/home/system/test", new path is "/home/system"
    return cur_path;
}