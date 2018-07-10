const winston = require('winston')

const transports = [
	new winston.transports.Console({
		level: 'info'
	}),
	new winston.transports.File({
		filename: 'error.log',
		level: 'warn'
	})
]

const logger = winston.createLogger({
	format: winston.format.json(),
	transports: transports
})

module.exports = function (stdout, stderr = undefined, err = undefined) {
	if (stdout != null)
		logger.info(stdout)
	if (stderr)
		logger.warn(stderr)
	if (err)
		logger.warn(err)
}