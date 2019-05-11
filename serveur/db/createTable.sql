#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: client
#------------------------------------------------------------

CREATE TABLE client(
        client_id   Int  Auto_increment  NOT NULL ,
        nom         Varchar (50) NOT NULL ,
        prenom      Varchar (50) NOT NULL ,
        mail        Varchar (50) ,
        photo       Varchar (50) ,
        tel         Varchar (20) ,
        fidelite    Int NOT NULL ,
        numero_rue  varchar(10),
        rue         Varchar (50) ,
        ville       Varchar (50) ,
        code_postal varchar (12),
        token       Varchar (512) NOT NULL
        ,CONSTRAINT client_token_unique UNIQUE (token)
        ,CONSTRAINT client_PK PRIMARY KEY (client_id)
        ,CONSTRAINT numero_rue_domain CHECK (numero_rue > 0)
        ,CONSTRAINT fidelite_domain CHECK (fidelite >= 0)

) ENGINE = InnoDB;


#------------------------------------------------------------
# Table: commande
#------------------------------------------------------------Jd

CREATE TABLE commande(
        commande_id Int  Auto_increment  NOT NULL ,
        date_heure  Datetime NOT NULL ,
        prix        Float NOT NULL ,
        numero_rue  varchar(10) ,
        rue         Varchar (50) ,
        ville       Varchar (50) NOT NULL ,
        code_postal Varchar (50) NOT NULL ,
        client_id   Int NOT NULL
        ,CONSTRAINT commande_PK PRIMARY KEY (commande_id)
        ,CONSTRAINT prix_domain CHECK (prix > 0)
        ,CONSTRAINT commande_client_FK FOREIGN KEY (client_id) REFERENCES client(client_id)
)ENGINE=InnoDB;

#------------------------------------------------------------
# Table: produit
#------------------------------------------------------------

CREATE TABLE produit(
	produit_id   Varchar (50) NOT NULL ,
	type_produit Varchar (50) NOT NULL
	,CONSTRAINT produit_PK PRIMARY KEY (produit_id,type_produit)
	,CONSTRAINT  type_produit_domain CHECK (type_produit IN ('Plat','Film','Menu'))
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: produitCommandé
#------------------------------------------------------------

CREATE TABLE produitCommande(
        produit_id   Varchar (50) NOT NULL ,
        type_produit Varchar (50) NOT NULL ,
        commande_id  Int NOT NULL ,
        nb_commande  Int NOT NULL,
        note Int,
        review Varchar (500)
        ,CONSTRAINT produitCommande_PK PRIMARY KEY (produit_id,type_produit,commande_id)
        ,CONSTRAINT produitCommande_produit_FK FOREIGN KEY (produit_id,type_produit) REFERENCES produit(produit_id,type_produit)
        ,CONSTRAINT produitCommande_commande_FK FOREIGN KEY (commande_id) REFERENCES commande(commande_id)
        ,CONSTRAINT nb_commande_domain CHECK (nb_commande > 0)
        ,CONSTRAINT note_domain CHECK  (note BETWEEN 0 AND 5)
)ENGINE=InnoDB;

