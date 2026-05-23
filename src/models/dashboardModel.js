let database = require("../database/config");
 
function buscarDadosDashboard(fk_usuario) {
    console.log("ACESSEI O DASHBOARD MODEL \n\n\t\t >> function buscarDadosDashboard():", fk_usuario);
 
    let instrucaoSql = `
        SELECT
        MAX(CASE WHEN quiz = 'autor' THEN pontuacao END) AS maior_pontuacao_autor,
        MIN(CASE WHEN quiz = 'autor' THEN pontuacao END) AS menor_pontuacao_autor,
        MAX(CASE WHEN quiz = 'batismo' THEN pontuacao END) AS maior_pontuacao_batismo,
        MIN(CASE WHEN quiz = 'batismo' THEN pontuacao END) AS menor_pontuacao_batismo
        FROM tentativa
        WHERE fk_usuario = ${fk_usuario};
    `;
 
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
 
module.exports = {
    buscarDadosDashboard
};