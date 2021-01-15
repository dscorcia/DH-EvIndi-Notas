DROP DATABASE if exists NotasDB;
CREATE database if not exists NotasDB;

USE NotasDB;

DROP TABLE if exists  NOTAS ;
CREATE TABLE NOTAS
	(id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title varchar(255) NOT NULL,
    message varchar(1000) NOT NULL
 );


INSERT INTO NotasDB.NOTAS(title,message) 
VALUES
('Nota 1','Esta es la nota numero 1'),
('Nota 2','Esta es la nota numero 2'),
('Nota 3','Esta es la nota numero 3'),
('Nota 4','Esta es la nota numero 4'),
('Nota 5','Esta es la nota numero 5');