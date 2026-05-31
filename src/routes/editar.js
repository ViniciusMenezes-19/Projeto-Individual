var express = require("express");
var router = express.Router();

var editarController = require("../controllers/editarController");

router.post("/atualizar", function (req, res) {
    editarController.atualizar(req, res);
})

module.exports = router;