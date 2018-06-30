const winston=require('winston');
//Using winston default logger
const console= new winston.transports.Console();
winston.add(console);
module.exports=function(){
    var error = arguments.splice(-1,2);
    winston.log('info',arguments);
    winston.log('error',error);
}
