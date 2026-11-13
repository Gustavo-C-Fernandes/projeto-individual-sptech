-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

show databases;

CREATE DATABASE ninho_dos_dragoes;
USE ninho_dos_dragoes;



CREATE TABLE usuario (
    id_usuario INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    senha VARCHAR(45) NOT NULL,
    PRIMARY KEY (id_usuario),
    UNIQUE KEY email (email)
);

CREATE TABLE historico (
    id_historico INT NOT NULL AUTO_INCREMENT,
    fk_usuario INT NOT NULL,
    qtd_acerto INT NOT NULL,
    qtd_erro INT NOT NULL,
    dt_historico DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id_historico),
    CONSTRAINT fk_historico_usuario FOREIGN KEY (fk_usuario) REFERENCES usuario (id_usuario),
    CONSTRAINT chk_historico CHECK (qtd_acerto >= 0 AND qtd_erro >= 0)
);

insert into usuario (nome, email, senha) values ('Teste', 'teste@teste.com', 'Teste@123');


select * from usuario;
select * from historico;
