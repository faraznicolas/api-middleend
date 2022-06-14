const { Router } = require("express");
const { getProductos } = require("../controllers/search");
const { validarToken } = require("../middlewares/validar-token");
const { check, query } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();
router.get('/:site',
    [
        check('site', 'No es un site valido').isIn(['MLA', 'MLB', 'MLM']),
        check('q', 'Es requerido').notEmpty(),
        query('limit', 'Debe ser numerico').custom((val) => val ? !isNaN(val) : true),
        query('offset', 'Debe ser numerico').custom((val) => val ? !isNaN(val) : true),
        query('orderPrice', 'No es un orderPrice valido').custom((val) => val ? ['ASC', 'DES'].includes(val.toUpperCase()) : true),
        validarToken,
        validarCampos
    ]
    , getProductos);

module.exports = router;