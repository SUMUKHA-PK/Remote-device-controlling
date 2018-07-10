var appRoot = require('app-root-path');
var winston = require('winston');

var options = {
    file: {                       // Transports for file
      level: 'info',              //Set to level 2, can also be set to level 0 (error) or level 3 (verbose), most commonly used ones
      filename: `/home/some_guyy/pk/git/Remote-device-controlling/server/logs/app.log`,   //${appRoot}  can also use this, since it will be installed on different computers
      handleExceptions: true,
      json: true,
      maxsize: 5242880, // 5MB
      maxFiles: 10,
      colorize: false,
    },
    console: {                    // Transports for console
      level: 'debug',             // level 4
      handleExceptions: true,
      json: false,
      colorize: true,
    },
};

var logger = new winston.Logger({
   transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console)
    ],
    exitOnError: false,            // do not exit on handled exceptions
});

logger.stream = {
    write: function(message, encoding) {
      logger.info(message);
    },
  };

module.exports = logger;           