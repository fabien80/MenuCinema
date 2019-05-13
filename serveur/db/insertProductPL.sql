DELIMITER //
CREATE PROCEDURE insertProduct
( IN id_product VARCHAR(50), IN  type_product VARCHAR(50), IN id_commande INT)
BEGIN
    DECLARE product_already_exist integer;
    DECLARE product_already_commande integer;
    
    SELECT count(*) INTO product_already_exist
    FROM PRODUIT
    WHERE produit_id = id_product
	AND type_produit = type_product;
    
	SELECT count(*) INTO product_already_commande
    FROM PRODUITCOMMANDE
    WHERE commande_id = id_commande
    AND produit_id = id_product
	AND type_produit = type_product;

	IF product_already_exist = 0 THEN
      INSERT INTO PRODUIT
      VALUES(id_product, type_product);
    END IF;

    IF product_already_commande <> 0 THEN
      UPDATE PRODUITCOMMANDE
      SET nb_commande = nb_commande + 1
      WHERE commande_id = id_commande
      AND produit_id = id_product
      AND type_produit = type_product;
    ELSE
      INSERT INTO PRODUITCOMMANDE
      VALUES (id_product,  type_product ,id_commande,1,null,null);
    END IF;
END;
//

