if((res)==-1){ 
    exec('ls', (error, stdout, stderr) => {                       // Executes "ls" and returns results
        log(stdout, stderr, err)
      });
}