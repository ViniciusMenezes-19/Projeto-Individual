var tentativaModel = require("../models/tentativaModel"); 

function registrar(req, res) {
    var fk_usuario = req.body.fk_usuarioServer;
    var quiz = req.body.quizServer;
    var pontuacao = req.body.pontuacaoServer;
    var acertos = req.body.acertosServer;
    var erros = req.body.errosServer;
    var total = req.body.totalServer;

    if (fk_usuario == undefined) {
        res.status(400).send("O id do usuário está undefined!");

    } else if (quiz == undefined) {
        res.status(400).send("O quiz está undefined!");

    } else if (pontuacao == undefined) {
        res.status(400).send("A pontuação está undefined!");

    } else if (acertos == undefined) {
        res.status(400).send("Os acertos estão undefined!");

    } else if (erros == undefined) {
        res.status(400).send("Os erros estão undefined!");

    } else if (total == undefined) {
        res.status(400).send("O total está undefined!");

    } else {
        tentativaModel.registrar(fk_usuario, quiz, pontuacao, acertos, erros, total)
            .then(function (resultado) {
                res.json(resultado);

            }).catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao registrar a tentativa! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);

            });
            
    }
} module.exports = {
    registrar

};