var tentativaModel = require("../models/tentativaModel"); 

function registrar(req, res) {
    let fk_usuario = req.body.fk_usuarioServer;
    let quiz = req.body.quizServer;
    let pontuacao = req.body.pontuacaoServer;
    let acertos = req.body.acertosServer;
    let erros = req.body.errosServer;
    let total = req.body.totalServer;

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