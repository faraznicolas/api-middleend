const logger = require("../logger");

const logResponse = (header, result) => {
    if (process.env.NODE_ENV != 'test') {
        logger.info('----INICIO RESPONSE-----');
        logger.info('FECHA:' + (new Date().toISOString()));
        logger.info('HEADERS');
        logger.info(header);
        logger.info('body');
        logger.info(result);
        logger.info('-----FIN RESPONSE----');
    }
}

module.exports = { logResponse }