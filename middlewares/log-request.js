const { request } = require("express");
const logger = require("../logger");

const logRequest = (req = request, res, next) => {
    if (process.env.NODE_ENV != 'test') {
        logger.info('----INICIO REQUEST-----');
        logger.info('FECHA:' + (new Date().toISOString()));
        logger.info('BASEURL');
        logger.info(req.baseUrl);
        logger.info('URL');
        logger.info(req.url);
        logger.info('VERBO HTTP');
        logger.info(req.method);
        logger.info('HEADERS');
        logger.info(req.headers);
        logger.info('PARAMS');
        logger.info(req.params);
        logger.info('QUERY');
        logger.info(req.query);
        logger.info('----FIN REQUEST-----');
    }
    next();
};



module.exports = { logRequest }