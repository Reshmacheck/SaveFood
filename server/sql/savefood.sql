DROP DATABASE IF EXISTS savefood;

CREATE DATABASE savefood;

CREATE TABLE savefood.role(
    id TINYINT(1) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(15) NOT NULL UNIQUE
);

CREATE TABLE savefood.visitor(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    lastname VARCHAR(50) NOT NULL,
    firstname VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    motdepasse VARCHAR(100) NOT NULL,
    adresse VARCHAR(200),
    role_id TINYINT(1) UNSIGNED,
    FOREIGN KEY(role_id) REFERENCES savefood.role(id)
);

CREATE TABLE savefood.restaurant(
    id TINYINT(1) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    adresse VARCHAR(200) NOT NULL,
    photo VARCHAR(100),
    apercu VARCHAR(200),
    numero VARCHAR(20),
    status VARCHAR(30) NOT NULL
);

CREATE TABLE savefood.product(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50) NOT NULL,
    apercu VARCHAR(200),
    photo VARCHAR(100),
    dateexpiration DATETIME NOT NULL,
    price DECIMAL(4,2) NOT NULL,
    initial_price DECIMAL(4,2) NOT NULL,
    quantity TINYINT(2) NOT NULL,
    restaurant_id TINYINT(1) UNSIGNED,
    FOREIGN KEY(restaurant_id) REFERENCES savefood.restaurant(id)
);

CREATE TABLE savefood.reserver(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    quantity TINYINT(2) NOT NULL,
    visitor_id INT UNSIGNED,
    product_id INT UNSIGNED,
    FOREIGN KEY(visitor_id) REFERENCES savefood.visitor(id),
    FOREIGN KEY(product_id) REFERENCES savefood.product(id)
);

INSERT INTO savefood.role VALUES
    (NULL, 'user'),
    (NULL, 'admin'),
    (NULL, 'restaurater')
;
-- 1/ INSERT LES OBJETs
-- 2/ verifier les selects
