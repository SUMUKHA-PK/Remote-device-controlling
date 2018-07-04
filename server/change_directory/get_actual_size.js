function get_actual_size(stdout){
    // This function is called by get_size.
    // This is done because, exec returns the size as "xxG/M/K  --path to file--", we need to just return the size
    var ret = "";
    for(var i = 0;i<stdout.length;i++){
        if(stdout[i]!=" "){
            ret+=stdout[i];
        }
        else
            break;
    }
    return ret;
}