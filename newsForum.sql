USE newsforum_db;

CREATE TABLE articles (
	id INT AUTO_INCREMENT,
	author TEXT NOT NULL,
	content TEXT NOT NULL,
	title TEXT NOT NULL,
	description TEXT NOT NULL,
	publishedAt VARCHAR(100) NOT NULL,
	source TEXT NOT NULL,
	url TEXT NOT NULL,
	urlToImage TEXT NOT NULL,
    PRIMARY KEY (id),
     UNIQUE KEY unique_publishedAt (publishedAt)
);

CREATE TABLE comments (
	id INT AUTO_INCREMENT,
    newsComment TEXT NOT NULL,
    article_id INT NOT NULL,
    username TEXT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE users (
	id INT AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(1000) NOT NULL,
    PRIMARY KEY (id)
);

DROP TABLE articles;
DROP TABLE comments;
DROP TABLE users;
    
truncate table comments;
SELECT * FROM comments;
truncate table articles;
SELECT * FROM articles;
truncate table users;
SELECT * FROM users;