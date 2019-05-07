#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: client
#------------------------------------------------------------

CREATE TABLE client(
        client_id   Int  Auto_increment  NOT NULL ,
        nom         Varchar (5) NOT NULL ,
        prenom      Varchar (50) NOT NULL ,
        mail        Varchar (50) ,
        photo       Varchar (50) ,
        tel         Varchar (20) ,
        fidelite    Int NOT NULL ,
        numero_rue  Int ,
        rue         Varchar (50) ,
        ville       Varchar (50) ,
        code_postal Int ,
        token       Varchar (50) NOT NULL
        ,CONSTRAINT client_token_unique UNIQUE (token)
        ,CONSTRAINT client_PK PRIMARY KEY (client_id)
        ,CONSTRAINT numero_rue_domain CHECK (numero_rue > 0)
        ,CONSTRAINT fidelite_domain CHECK (fidelite > 0)

)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: commande
#------------------------------------------------------------Jd

CREATE TABLE commande(
        commande_id Int NOT NULL ,
        date_heure  Datetime NOT NULL ,
        prix        Float NOT NULL ,
        numero_rue  Int ,
        rue         Varchar (50) ,
        ville       Varchar (50) NOT NULL ,
        code_postal Varchar (50) NOT NULL
        ,CONSTRAINT commande_PK PRIMARY KEY (commande_id)
        ,CONSTRAINT prix_domain CHECK (prix > 0)
)ENGINE=InnoDB;

#------------------------------------------------------------
# Table: produit
#------------------------------------------------------------

CREATE TABLE produit(
        produit_id   Int NOT NULL ,
        type_produit Varchar (50) NOT NULL
        ,CONSTRAINT produit_PK PRIMARY KEY (produit_id)
        ,CONSTRAINT  type_produit_domain CHECK (type_produit IN ('entree','plat','dessert','boisson','menu','film'))
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: produitCommandé
#------------------------------------------------------------

CREATE TABLE produitCommande(
        client_id   Int NOT NULL ,
        commande_id Int NOT NULL ,
        produit_id  Int NOT NULL ,
        nb_commande Int NOT NULL
        ,CONSTRAINT produitCommande_PK PRIMARY KEY (client_id,commande_id,produit_id)
        ,CONSTRAINT produitCommande_client_FK FOREIGN KEY (client_id) REFERENCES client(client_id)
        ,CONSTRAINT produitCommande_commande_FK FOREIGN KEY (commande_id) REFERENCES commande(commande_id)
        ,CONSTRAINT produitCommande_produit1_FK FOREIGN KEY (produit_id) REFERENCES produit(produit_id)
        ,CONSTRAINT nb_commande_domain CHECK (nb_commande > 0)
)ENGINE=InnoDB;

