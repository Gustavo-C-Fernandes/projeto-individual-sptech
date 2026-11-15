var express = require("express");
var router = express.Router();

var historicoController = require("../controllers/historicoController");

router.post("/salvar", function (req, res) {
    historicoController.salvar(req, res);
});
router.get("/buscar/:idUsuario", function (req, res) {
    historicoController.buscar(req, res);
});
router.get("/kpis/:idUsuario", function (req, res) {
    historicoController.kpis(req, res);
});

module.exports = router;