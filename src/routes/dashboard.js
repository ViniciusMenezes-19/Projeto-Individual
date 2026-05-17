var express = require("express");
var router = express.Router();
var dashboardController = require("../controllers/dashboardController");
 
router.get("/dados/:fk_usuario", function (req, res) {
    dashboardController.buscarDadosDashboard(req, res);
});
 
module.exports = router;