
package models;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Classe Java pour Produit complex type.
 * 
 * <p>Le fragment de schéma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType name="Produit">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;choice>
 *         &lt;element name="nourriture" type="{https://www.univ-grenoble-alpes.fr/francais/l3miage/Nourriture}Nourriture"/>
 *         &lt;element name="menu" type="{https://www.univ-grenoble-alpes.fr/francais/l3miage/Menu}Menu"/>
 *       &lt;/choice>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "Produit", namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Produit", propOrder = {
    "nourriture",
    "menu"
})
public class Produit {

    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Produit")
    protected Nourriture nourriture;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Produit")
    protected Menu menu;

    /**
     * Obtient la valeur de la propriété nourriture.
     * 
     * @return
     *     possible object is
     *     {@link Nourriture }
     *     
     */
    public Nourriture getNourriture() {
        return nourriture;
    }

    /**
     * Définit la valeur de la propriété nourriture.
     * 
     * @param value
     *     allowed object is
     *     {@link Nourriture }
     *     
     */
    public void setNourriture(Nourriture value) {
        this.nourriture = value;
    }

    /**
     * Obtient la valeur de la propriété menu.
     * 
     * @return
     *     possible object is
     *     {@link Menu }
     *     
     */
    public Menu getMenu() {
        return menu;
    }

    /**
     * Définit la valeur de la propriété menu.
     * 
     * @param value
     *     allowed object is
     *     {@link Menu }
     *     
     */
    public void setMenu(Menu value) {
        this.menu = value;
    }

}
