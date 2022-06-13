const { Router } = require("express");
const { getItem } = require("../controllers/item");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarToken } = require("../middlewares/validar-token");

const router = Router();


//GET
router.get('/:id', [
    validarToken,
    validarCampos
], getItem);

module.exports = router;