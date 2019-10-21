DROP DATABASE IF EXISTS newsforum_db;

CREATE DATABASE newsforum_db;

USE newsforum_db;

CREATE TABLE news(
    id INT AUTO_INCREMENT,
    news VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE comments(
    id INT AUTO_INCREMENT,
    newsComment VARCHAR(255) NOT NULL,
    new_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (new_id) REFERENCES news(id)
);

SELECT * FROM news;

SELECT * FROM comments;