const { Router } = require("express");
const { getItem } = require("../controllers/item");
const { logRequest } = require("../middlewares/log-request");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarToken } = require("../middlewares/validar-token");

const router = Router();


//GET
router.get('/:id', [
    logRequest,
    validarToken,
    validarCampos
], getItem);

module.exports = router;