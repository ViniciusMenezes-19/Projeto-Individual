var database = require("../database/config");
 
function atualizar(id, nome, email, senha) {
    console.log("ACESSEI O PERFIL MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizar():", id, nome, email, senha);
 
    var instrucaoSql = `
        UPDATE usuario SET nome = '${nome}', email = '${email}', senha = '${senha}' WHERE id = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
 
module.exports = {
    atualizar
};