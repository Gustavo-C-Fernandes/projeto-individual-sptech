var historicoModel = require("../models/historicoModel");

function salvar(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var acertos = req.body.acertosServer;
    var erros = req.body.errosServer;

    if (idUsuario == undefined) {
        res.status(400).send("Seu id de usuário está undefined!");
    } else if (acertos == undefined) {
        res.status(400).send("Seus acertos estão undefined!");
    } else if (erros == undefined) {
        res.status(400).send("Seus erros estão undefined!");
    } else {
        historicoModel.salvar(idUsuario, acertos, erros)
            .then(function (resultado) {
                res.json(resultado);
            }).catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao salvar o resultado! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}
function buscar(req, res) {
    var idUsuario = req.params.idUsuario;

    if (idUsuario == undefined) {
        res.status(400).send("Seu id de usuário está undefined!");
    } else {
        historicoModel.buscar(idUsuario)
            .then(function (resultado) {
                res.json(resultado);
            }).catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao buscar o histórico! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}
function kpis(req, res) {
    var idUsuario = req.params.idUsuario;

    if (idUsuario == undefined) {
        res.status(400).send("Seu id de usuário está undefined!");
    } else {
        historicoModel.kpis(idUsuario)
            .then(function (resultado) {
                res.json(resultado[0]);
            }).catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    salvar,
    buscar,
    kpis
}