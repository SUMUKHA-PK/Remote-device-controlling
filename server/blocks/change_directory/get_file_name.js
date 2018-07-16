function get_file_name(cur_path){
    //This is called by /server/change_directory/index.js
    var len = cur_path.length;
    var name = "";
    for(var i=len-1;i>=0;i--){
        if(cur_path.charAt(i) != "/"){         // Finds first occurrence of "/" from behind and return the name preceeding it
            name = cur_path.charAt(i) + name;
        }
        else
            break;
    }
    return name;
}

module.exports = get_file_name