var appRoot = require('app-root-path');
var winston = require('winston');

// define the custom settings for each transport (file, console)
var options = {
  
  console: {
    level: 'info',
    handleExceptions: true,
    colorize: true,
    //timestamp:true,
  },
};

// instantiate a new Winston Logger with the settings defined above
var logger = winston.createLogger({
  format : winston.format.simple(),
  transports: [
    //new winston.transports.File(options.file),
    new winston.transports.Console(options.console)
  ],
  exitOnError: false, // do not exit on handled exceptions
});

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
  write: function(message, encoding) {
    // use the 'info' log level so the output will be picked up by both transports (file and console)
    logger.info(message);
  },
};

module.exports = logger;