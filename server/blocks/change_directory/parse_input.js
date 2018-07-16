function parse_input(command){
    //This is called by /server/change_directory/index.js
    //Here the command is expected either to be "cd --filename--" or "cd .."
    var arg = null;
   
    if(command.includes("..")){
        arg = "previous";           //Implying that it must be navigated to previous directory.
    }
    else{
        arg =  command;             //Providing the name of the file to be navigated to.
    }

    return arg;
}

module.exports = parse_input