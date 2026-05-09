var database = require("../database/config");

function registrar(fk_usuario, quiz, pontuacao, acertos, erros, total) {
    console.log("ACESSEI O TENTATIVA MODEL \n\n\t\t >> function registrar():", 
        fk_usuario, quiz, pontuacao, acertos, erros, total);

    var instrucaoSql = `
        INSERT INTO tentativa (fk_usuario, quiz, pontuacao, acertos, erros, total)
        VALUES ('${fk_usuario}', '${quiz}', '${pontuacao}', '${acertos}', '${erros}', '${total}');
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    registrar
};