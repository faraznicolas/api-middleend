const winston = require('winston')
const consoleTransport = new winston.transports.Console()
const myWinstonOptions = {
    level: 'info',
    format: winston.format.json(),
    transports: [consoleTransport]
}
const logger = new winston.createLogger(myWinstonOptions);

const moment = require('moment');

const logRequest = (req = request, res, next) => {
    process.env.NODE_ENV != 'test' && logger.info(`[REQUEST (${moment().format('DD/MM/YYYY, HH:mm:ss')}) [BASEURL-->${JSON.stringify(req.baseUrl)}] [URL-->${JSON.stringify(req.url)}] [VERBO HTTP-->${JSON.stringify(req.method)}] [HEADERS-->${JSON.stringify(req.headers)}] [PARAMS-->${JSON.stringify(req.params)}] [QUERY-->${JSON.stringify(req.query)}]]`);
    next();
};

const logResponse = (header, result) => {
    process.env.NODE_ENV != 'test' && logger.info(`[RESPONSE (${moment().format('DD/MM/YYYY, HH:mm:ss')}) [HEADERS-->${JSON.stringify(header)}] [BODY-->${JSON.stringify(result)}]]`);
}

const logErrors = (errorMesagge) => {
    process.env.NODE_ENV != 'test' && logger.error(`[ERROR (${moment().format('DD/MM/YYYY, HH:mm:ss')}) [-->${JSON.stringify(errorMesagge)}]]`);
}

module.exports = { logRequest, logResponse, logErrors };