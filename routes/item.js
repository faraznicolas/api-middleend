const { Router } = require("express");
const { check } = require("express-validator");
const { getItem } = require("../controllers/item");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarToken } = require("../middlewares/validar-token");

const router = Router();


//GET
router.get('/:id', [
    check('id', 'Debe ser de tipo string').custom((val) => (typeof val === 'string' && isNaN(val)) ? true : false),
    validarToken,
    validarCampos
], getItem);

module.exports = router;