function parse_input(command){
    //Here the command is expected either to be "cd --filename--" or "cd .." or "ls"
    var obj ={
        result : res,
        argument : arg
    };
    var res;
    var arg="null";
    if(command.includes("cd")){
        res = 1;
        if(command.includes("..")){
            arg = "previous";           //Implying that it must be navigated to previous directory.
        }
        else{
            command.replace("cd ","");
            arg =  command;             //Providing the name of the file to be navigated to.
        }
    }
    else if (command.includes("ls")){
        res = -1;                       
    }
    return obj;
}