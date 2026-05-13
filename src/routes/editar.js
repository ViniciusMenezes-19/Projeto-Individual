var express = require("express");
var router = express.Router();

var editarController = require("../controllers/editarController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/atualizar", function (req, res) {
    editarController.atualizar(req, res);
})

module.exports = router;