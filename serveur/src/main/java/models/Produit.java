
package models;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Classe Java pour Produit complex type.
 *
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 *
 * <pre>
 * &lt;complexType name="Produit">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;choice>
 *         &lt;element name="product" type="{https://www.univ-grenoble-alpes.fr/francais/l3miage/Nourriture}Nourriture"/>
 *         &lt;element name="menu" type="{https://www.univ-grenoble-alpes.fr/francais/l3miage/Menu}Menu"/>
 *       &lt;/choice>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "Produit", namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Produit", propOrder = {
        "product",
        "menu"
})
public class Produit
{

    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Produit")
    protected Nourriture product;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Produit")
    protected Menu menu;

    /**
     * Obtient la valeur de la propri�t� product.
     *
     * @return possible object is
     * {@link Nourriture }
     */
    public Nourriture getProduct()
    {
        return product;
    }

    /**
     * D�finit la valeur de la propri�t� product.
     *
     * @param value allowed object is
     *              {@link Nourriture }
     */
    public void setProduct(Nourriture value)
    {
        this.product = value;
    }

    /**
     * Obtient la valeur de la propri�t� menu.
     *
     * @return possible object is
     * {@link Menu }
     */
    public Menu getMenu()
    {
        return menu;
    }

    /**
     * D�finit la valeur de la propri�t� menu.
     *
     * @param value allowed object is
     *              {@link Menu }
     */
    public void setMenu(Menu value)
    {
        this.menu = value;
    }


    @Override
    public String toString()
    {
        if (menu != null)
        {
            return menu.toString();
        } else
        {
            return product.toString();
        }
    }
}
