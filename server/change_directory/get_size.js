function get_size(folder_path){
    //This is called by /server/change_directory/index.js
    const { exec } = require('child_process');
    var command = "du -hs " + folder_path;
    var output = "";
    exec(command, (error, stdout, stderr) => {                      
            if (error) {                                             
              console.error(`exec error: ${error}`);
              return;
            }
            output += stdout;                       // the stdout of the command contains the size of the directory
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
          });
    var result = get_actual_size(output);
    return result;
}