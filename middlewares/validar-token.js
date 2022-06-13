const config = require("../config");
const logger = require("../logger");

const validarToken = (req, res, next) => {
    const token = req.header('x-auth-token');

    if (!token) {
        logger.error('TOKEN VACIO');
        return res.status(401).json({
            msg: 'Token invalido'
        });
    }
    if (token == config.token) {
        return next();
    }
    if (token == config.tokenMock) {
        req.mock = true;
        return next();
    }
    logger.error('TOKEN INVALIDO');
    return res.status(401).json({
        msg: 'Token invalido'
    });

};

module.exports = { validarToken }