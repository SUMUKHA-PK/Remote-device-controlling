function change_directory(currect_dir,command){
    var get_file_name = require('./get_file_name');
    var change_name = require('./change_name').change_name;
    var parse_input = require('./parse_input');
    const { exec } = require('child_process');

    var arg = parse_input(command);
    var path = undefined;

    if(arg == "previous"){
        var prev_name = get_file_name(currect_dir);           // If cur dir is "home/system/test" , return "test"
        path = change_name(currect_dir, prev_name);        // If cur dir is "home/system/test" , change to "home/system" 
    }
    else{
        path = currect_dir + "/" + arg;                //If old dir is "/home/system" when cd'd to say ~/test, the new dir will be "/home/system/test"
    }
    console.log("message",path);
    return path;
}

change_directory("/home/some_guyy/pk/git","abcd");
// Technically this is all done. Testing must be done.