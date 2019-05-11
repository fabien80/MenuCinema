INSERT into client(nom, prenom, mail, photo, tel, fidelite, numero_rue, rue, ville, code_postal, token)
VALUES ('client1', 'Populate1', 'somemail@somemail.fr', '/lienversphotos', '+33614648701', 1, 10, 'rue des pommes',
                   'Grenoble', '38000', 'letokentoken0'),
       ('client2', 'Populate2', 'somemail@somemail.fr', '/lienversphotos', '+33614648701', 6, 10, 'rue des pommes',
                   'Grenoble', '38000', 'letokentoken1'),
       ('client3', 'Populate3', 'somemail@somemail.fr', '/lienversphotos', '+33614648701', 4, 10, 'rue des pommes',
                   'Grenoble', '38000', 'letokentoken2'),
       ('client4', 'Populate4', 'somemail@somemail.fr', '/lienversphotos', '+33614648701', 4, 10, 'rue des pommes',
                   'Grenoble', '38000', 'letokentoken3'),
       ('client5', 'Populate5', 'somemail@somemail.fr', '/lienversphotos', '+33614648701', 0, 10, 'rue des pommes',
                   'Grenoble', '38000', 'letokentoken4'),
       ('client6', 'Populate6', 'somemail@somemail.fr', '/lienversphotos', '+33614648701', 9, 10, 'rue des pommes',
                   'Grenoble', '38000', 'letokentoken5'),
       ('client7', 'Populate7', 'somemail@somemail.fr', '/lienversphotos', '+33614648701', 3, 10, 'rue des pommes',
                   'Grenoble', '38000', 'letokentoken6'),
       ('client8', 'Populate8', 'somemail@somemail.fr', '/lienversphotos', '+33614648701', 5, 10, 'rue des pommes',
                   'Grenoble', '38000', 'letokentoken7'),
       ('client9', 'Populate9', 'somemail@somemail.fr', '/lienversphotos', '+33614648701', 7, 10, 'rue des pommes',
                   'Grenoble', '38000', 'letokentoken8'),
       ('client10', 'Populate10', 'somemail@somemail.fr', '/lienversphotos', '+33614648701', 2, 10,
                    'rue des pommes', 'Grenoble', '38000', 'letokentoken9');

INSERT into commande (commande_id, date_heure, prix, numero_rue, rue, ville, code_postal)
VALUES (1, '2019-05-10 11:29:10', 15.0, 10, 'rue des pommes', 'Grenoble', '38000'),
       (2, '2019-05-10 11:29:10', 15.0, 10, 'rue des pommes', 'Grenoble', '38000'),
       (3, '2019-05-10 11:29:10', 15.0, 10, 'rue des pommes', 'Grenoble', '38000'),
       (4, '2019-05-10 11:29:10', 15.0, 10, 'rue des pommes', 'Grenoble', '38000'),
       (4, '2019-05-10 11:29:10', 15.0, 10, 'rue des pommes', 'Grenoble', '38000'),
       (6, '2019-05-10 11:29:10', 15.0, 10, 'rue des pommes', 'Grenoble', '38000'),
       (7, '2019-05-10 11:29:10', 15.0, 10, 'rue des pommes', 'Grenoble', '38000'),
       (8, '2019-05-10 11:29:10', 15.0, 10, 'rue des pommes', 'Grenoble', '38000'),
       (9, '2019-05-10 11:29:10', 15.0, 10, 'rue des pommes', 'Grenoble', '38000'),
       (10, '2019-05-10 11:29:10', 15.0, 10, 'rue des pommes', 'Grenoble', '38000');

INSERT into produit
VALUES (1, 'Entree'),
       (2, 'Entree'),
       (3, 'Entree'),
       (10, 'Plat'),
       (11, 'Plat'),
       (12, 'Plat'),
       (13, 'Plat'),
       (14, 'Plat'),
       (15, 'Plat'),
       (16, 'Plat'),
       (17, 'Plat'),
       (18, 'Plat'),
       (20, 'Dessert'),
       (21, 'Dessert'),
       (22, 'Dessert'),
       (23, 'Dessert'),
       (30, 'Boisson'),
       (31, 'Boisson'),
       (32, 'Boisson'),
       (33, 'Boisson'),
       (34, 'Boisson'),
       (50, 'Menu'),
       (51, 'Menu'),
       (52, 'Menu'),
       (53, 'Menu'),
       (54, 'Menu'),
       (55, 'Menu'),
       (56, 'Menu'),
       (57, 'Menu'),
       (58, 'Menu'),
       (59, 'Menu');


