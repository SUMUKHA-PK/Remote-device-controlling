function get_file_name(cur_path){
    var len = cur_path.length;
    var name = "";
    for(var i=len-1;i>=0;i--){
        if(cur_path[i]!="/"){         // Finds first occurrence of "/" from behind and return the name preceeding it
            name+=cur_path[i];
        }
        else
            break;
    }
    return name;
}