let express = require("express");
let router = express.Router();
let loguserController = require("../controllers/loguserController");

router.post("/registrar", function (req, res) {
    loguserController.registrar(req, res);
});

module.exports = router;