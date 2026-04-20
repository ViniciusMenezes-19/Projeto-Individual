CREATE DATABASE projeto_individual;

USE projeto_individual;

CREATE TABLE usuario(
id_usuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100),
email VARCHAR(50),
senha VARCHAR(40)
);

select * from usuario;
