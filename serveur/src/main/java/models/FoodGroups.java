package models;

import javax.xml.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

/**
 * <p>Classe Java pour FoodGroups complex Type</p>
 *
 * <p>Le fragment de schema suivant indique le contenu attendu figurant dans cette classe</p>
 * <pre>
 * &lt;complexType name="FoodGroups">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;choice minOccurs="0" maxOccurs="unbounded">
 *         &lt;element name="product" type="{https://www.univ-grenoble-alpes.fr/francais/l3miage/Nourriture}Nourriture" maxOccurs="4" minOccurs="2"/>
 *       &lt;/choice>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "FoodGroups", namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/FoodGroups", propOrder = {
        "product",
})
public class FoodGroups
{
    @XmlElement( namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/FoodGroups")
    protected List<Nourriture> product;

    public List<Nourriture> getProduct()
    {
        if (product == null)
        {
            product = new ArrayList<Nourriture>();
        }
        return this.product;
    }

    @Override
    public String toString()
    {
        return "FoodGroups{" +
                "product=" + product +
                '}';
    }
}
