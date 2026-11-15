var database = require("../database/config")

function salvar(idUsuario, acertos, erros) {
    var instrucaoSql = `
        INSERT INTO historico (fk_usuario, qtd_acerto, qtd_erro) VALUES (${idUsuario}, ${acertos}, ${erros});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscar(idUsuario) {
    var instrucaoSql = `
        SELECT qtd_acerto FROM historico WHERE fk_usuario = ${idUsuario} ORDER BY id_historico ASC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function kpis(idUsuario) {
    var instrucaoSql = `
        SELECT COUNT(*) AS tentativas,
               SUM(qtd_acerto) AS somaAcertos,
               SUM(qtd_erro) AS somaErros,
               ROUND(AVG(qtd_acerto * 100 / (qtd_acerto + qtd_erro))) AS mediaGeral
        FROM historico
        WHERE fk_usuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    salvar,
    buscar,
    kpis
};