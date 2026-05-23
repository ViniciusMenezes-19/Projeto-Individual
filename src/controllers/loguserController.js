let loguserModel = require("../models/loguserModel");

function registrar(req, res) {
    let fk_usuario = req.body.fk_usuarioServer;

    if (fk_usuario == undefined) {
        res.status(400).send("O id do usuário está undefined!");
    } else {
        loguserModel.registrar(fk_usuario)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao registrar o log.", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    registrar
};