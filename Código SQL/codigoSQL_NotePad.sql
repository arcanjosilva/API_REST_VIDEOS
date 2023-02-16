//Criando a Base de Dados
CREATE DATABASE projetobackend

//Criando a Tabela "videos"
CREATE TABLE videos (
id INT NOT NULL AUTO_INCREMENT,
uploader VARCHAR(45),
title VARCHAR(45),
description VARCHAR(45),
duration INT,
url VARCHAR(45),
views INT,
likes INT,
dislikes INT,
comments VARCHAR(45),
tags VARCHAR(45),
PRIMARY KEY (id)
)

//Inserindo valores na Tabela "videos"
INSERT INTO videos (uploader, title, description, duration, url, views, likes, dislikes, comments, tags) VALUES ('arcanjo', 'fernando rocha', 'standup', 3, 'www.youtube.com/watch?v=1', 1400, 315, 56, 'top', 'standup');
INSERT INTO videos (uploader, title, description, duration, url, views, likes, dislikes, comments, tags) VALUES ('arcanjo', 'irmaos silva', 'tiktok', 5, 'www.youtube.com/watch?v=2', 567, 68, 4, 'legal', 'irmaossilva');
INSERT INTO videos (uploader, title, description, duration, url, views, likes, dislikes, comments, tags) VALUES ('kauet', 'portugal 2019', 'madeira', 8, 'www.youtube.com/watch?v=3', 325, 56, 4, 'maneiro', 'portugal');
INSERT INTO videos (uploader, title, description, duration, url, views, likes, dislikes, comments, tags) VALUES ('kauet', 'universidade 2021', 'estudar', 14, 'www.youtube.com/watch?v=4', 609, 98, 13, 'show!', 'faculdade');