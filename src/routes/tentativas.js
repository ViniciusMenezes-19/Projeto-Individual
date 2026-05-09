var express = require("express");
var router = express.Router();

var tentativaController = require("../controllers/tentativaController");

router.post("/registrar", function (req, res) {
    tentativaController.registrar(req, res);
});

module.exports = router;