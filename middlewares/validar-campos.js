const { validationResult } = require('express-validator');
const { logErrors } = require('../log/logger');


const validarCampos = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        logErrors('CAMPOS INVALIDOS');
        return res.status(400).json(errors);
    };
    next();
};

module.exports = {
    validarCampos
}