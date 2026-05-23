let database = require("../database/config");

function registrar(fk_usuario) {
    console.log("ACESSEI O LOGUSER MODEL - function registrar():", fk_usuario);

    let instrucaoSql = `
        INSERT INTO loguser (fk_usuario) VALUES (${fk_usuario});
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    registrar
};