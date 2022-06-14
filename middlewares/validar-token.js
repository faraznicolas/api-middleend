const config = require("../config");
const { logErrors } = require("../log/logger");

const validarToken = (req, res, next) => {
    const token = req.header('x-auth-token');

    if (!token) {
        logErrors('TOKEN INVALIDO');
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
    logErrors('TOKEN INVALIDO');
    return res.status(401).json({
        msg: 'Token invalido'
    });

};

module.exports = { validarToken }