DELIMITER //
CREATE FUNCTION reviewAverage
(id_product VARCHAR(50),  type_product VARCHAR(50))
RETURNS DOUBLE
BEGIN
    DECLARE nb_note_product integer ;
    DECLARE sum_note_product DOUBLE;
    DECLARE average_note DOUBLE;

    SELECT count(*) INTO nb_note_product
    FROM PRODUITCOMMANDE
    WHERE produit_id = id_product
	AND type_produit = type_product
    AND note is not null;
    
    SELECT sum(note) INTO sum_note_product
    FROM PRODUITCOMMANDE
    WHERE produit_id = id_product
    AND type_produit = type_product
    AND note is not null;

IF nb_note_product = 0 THEN
   SET average_note =  -1;
ELSE 
   SET average_note = sum_note_product/nb_note_product;
END IF;
    RETURN average_note;
END ;
//