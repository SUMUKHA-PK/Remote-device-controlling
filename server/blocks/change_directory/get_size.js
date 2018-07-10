function get_size(folder_path){
    //This is called by /server/change_directory/index.js
    const { exec } = require('child_process');
    var command = "du -hs " + folder_path;
    var output = "";
    exec(command, (error, stdout, stderr) => {                      
            output += stdout;                       // the stdout of the command contains the size of the directory
            log(stdout, stderr, err)
          });
    var result = get_actual_size(output);
    return result;
}