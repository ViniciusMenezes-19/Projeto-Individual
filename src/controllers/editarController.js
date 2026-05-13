let editarModel = require("../models/editarModel");
 
function atualizar(req, res) {
    let id    = req.body.idServer;
    let nome  = req.body.nomeServer;
    let email = req.body.emailServer;
    let senha = req.body.senhaServer;
 
    if (id == undefined) {
        res.status(400).send("ID do usuário não encontrado!");
    } else if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        editarModel.atualizar(id, nome, email, senha)
            .then(function (resultado) {
                console.log("\nPerfil atualizado com sucesso! Resultado: ", resultado);
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao atualizar o perfil! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}
 
module.exports = {
    atualizar
};