CREATE DATABASE projeto_individual;

USE projeto_individual;

CREATE TABLE usuario(
id_usuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100),
email VARCHAR(50),
senha VARCHAR(40)
);

ALTER TABLE usuario RENAME COLUMN id_usuario TO id;	



DELETE FROM usuario WHERE id = 11;
select * from usuario;


CREATE TABLE tentativa (
id INT AUTO_INCREMENT PRIMARY KEY,
fk_usuario INT NOT NULL,
quiz VARCHAR(50) NOT NULL,
pontuacao INT NOT NULL,
acertos INT NOT NULL,
erros INT NOT NULL,
total INT NOT NULL,
data_hora DATETIME DEFAULT NOW(),
FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

ALTER TABLE tentativa 
ADD COLUMN tempo_segundos INT NOT NULL;

SELECT * FROM tentativa;

CREATE TABLE loguser (
id INT AUTO_INCREMENT PRIMARY KEY,
fk_usuario INT NOT NULL,
data_hora DATETIME DEFAULT NOW(),
FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

SELECT * FROM loguser;


	

