DROP DATABASE IF EXISTS savefood;

CREATE DATABASE savefood;

ALTER DATABASE savefood CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE savefood.role(
    id TINYINT(1) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(15) NOT NULL UNIQUE
);

CREATE TABLE savefood.restaurant(
    id SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50),
    -- email VARCHAR(50) NOT NULL UNIQUE,
    -- motdepasse VARCHAR(100) NOT NULL,
    adresse VARCHAR(200),
    photo VARCHAR(100),
    apercu VARCHAR(200),
    numero VARCHAR(20),
    status BOOLEAN
);

CREATE TABLE savefood.visitor(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    lastname VARCHAR(50) NOT NULL,
    -- firstname VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    motdepasse VARCHAR(200) NOT NULL,
    ville VARCHAR(200),
    role_id TINYINT(1) UNSIGNED NOT NULL,
    restaurant_id SMALLINT UNSIGNED,
    FOREIGN KEY(role_id) REFERENCES savefood.role(id),
    FOREIGN KEY(restaurant_id) REFERENCES savefood.restaurant(id) ON DELETE CASCADE
);



CREATE TABLE savefood.product(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50) NOT NULL,
    apercu VARCHAR(200),
    image VARCHAR(100),
    dateexpiration DATE NOT NULL,
    price DECIMAL(4,2) NOT NULL,
    initial_price DECIMAL(4,2) NOT NULL,
    quantity TINYINT(2) NOT NULL,
    restaurant_id SMALLINT UNSIGNED,
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
    (NULL, 'visitor'),
    (NULL, 'admin'),
    (NULL, 'restaurater')
;
-- 1/ INSERT LES OBJETs
INSERT INTO savefood.restaurant VALUES 
     (NULL, 'Paul', '4, rue belfort, 93000 bobigny','pizzerai.jpg','notre magasin propose les meilleur pizza du monde','0147657793', 1),
     (NULL, 'kashmir','9, allée des aulnes, 94000 creteil','kashmir.png','Venez aventurer les spécialité indienne','0190654535', 1)
    ;    
-- 2/ verifier les selects
-- check / marc
INSERT INTO savefood.visitor VALUES
    (NULL, 'check', 'check@hotmail.fr', '$argon2i$v=19$m=16,t=2,p=1$Q1RqRzRaMVI0V2s0Q2pqaA$iThEnzmXix7lCfny+Osc3g', 'aulnay sous bois', 1, NULL),
    (NULL, 'marc', 'marc@hotmail.fr', '$argon2i$v=19$m=16,t=2,p=1$Q1RqRzRaMVI0V2s0Q2pqaA$Opb7fhK22T31WBWdUms6cQ', 'aulnay sous bois', 3, 1)
    ;



 INSERT INTO savefood.product VALUES
    (NULL, 'Panier Patisseries', ' un panier composée de patisserie','75bc8162ec22d09bcf1c2c48812f1d10.jpg', '2024-01-28', 3.50 , 10.50 , 3, 1),
    (NULL, 'Panier petit dejeuner', 'un panier composée de 7 à 10 unitées de petit-dejeuner','0216933ea2011ed119243fd09c989171.jpg', '2024-01-29', 4.00 , 11.50 , 3, 1)
    
     ;


 