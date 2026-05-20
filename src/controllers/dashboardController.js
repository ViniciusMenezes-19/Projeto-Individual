let dashboardModel = require("../models/dashboardModel");
 
function buscarDadosDashboard(req, res) {
    let fk_usuario = req.params.fk_usuario;
 
    console.log("Buscando dados da dashboard para o usuário:", fk_usuario);
 
    dashboardModel.buscarDadosDashboard(fk_usuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado[0]);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os dados da dashboard.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}
 
module.exports = {
    buscarDadosDashboard
};