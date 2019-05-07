
package models;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Classe Java pour Produits complex type.
 * 
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType name="Produits">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="produit" type="{https://www.univ-grenoble-alpes.fr/francais/l3miage/Produit}Produit" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "Produits", namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Produits", propOrder = {
    "produit"
})
public class Produits {

    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Produits")
    protected List<Produit> produit;

    /**
     * Gets the value of the produit property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the produit property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getProduit().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link Produit }
     * 
     * 
     */
    public List<Produit> getProduit() {
        if (produit == null) {
            produit = new ArrayList<Produit>();
        }
        return this.produit;
    }
}
