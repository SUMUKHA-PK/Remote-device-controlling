function change_directory(currect_dir,command){
    var Folder = require('./Folder');
    var get_file_name = require('./get_file_name');
    var change_name = require('./change_name');
    const { exec } = require('child_process');

    var obj = parse_input(command);
    var res = obj.result;
    var arg = obj.argument;
    var folder = new Folder();
    if((res)==-1){ 
        exec('ls', (error, stdout, stderr) => {                       // Executes "ls" and returns results
            log(stdout, stderr, err)
          });
    }
    else{
        if(arg == "previous"){
            var prev_name = get_file_name(currect_dir.path);           // If cur dir is "home/system/test" , return "test"
            folder.path = change_name(currect_dir.path,prev_name);     // If cur dir is "home/system/test" , change to "home/system"
            folder.name = prev_name; 
        }
        else{
            folder.path = currect_dir.path + "/" + arg;                //If old dir is "/home/system" when cd'd to say ~/test, the new dir will be "/home/system/test"
            folder.name = arg;
        }
    }
    console.log(message,folder.name);
}

change_directory("/home/some_guyy/pk/git","cd ..");
// Technically this is all done. Testing must be done.