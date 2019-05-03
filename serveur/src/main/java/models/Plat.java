
package models;

import enums.Ingredient;
import enums.TypeDePlat;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Classe Java pour Plat complex type.
 * 
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType name="Plat">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="id" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="type" type="{https://www.univ-grenoble-alpes.fr/francais/l3miage/TDP}TypeDePlat"/>
 *         &lt;element name="prix" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *         &lt;element name="ingredients" type="{https://www.univ-grenoble-alpes.fr/francais/l3miage/Ingredient}Ingredient" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "Plat", namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Plat", propOrder = {
    "id",
    "type",
    "prix",
    "ingredients"
})
public class Plat {

    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Plat", required = true)
    protected String id;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Plat", required = true)
    @XmlSchemaType(name = "string")
    protected TypeDePlat type;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Plat")
    protected double prix;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Plat")
    @XmlSchemaType(name = "string")
    protected List<Ingredient> ingredients;

    /**
     * Obtient la valeur de la propri�t� id.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getId() {
        return id;
    }

    /**
     * D�finit la valeur de la propri�t� id.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setId(String value) {
        this.id = value;
    }

    /**
     * Obtient la valeur de la propri�t� type.
     * 
     * @return
     *     possible object is
     *     {@link TypeDePlat }
     *     
     */
    public TypeDePlat getType() {
        return type;
    }

    /**
     * D�finit la valeur de la propri�t� type.
     * 
     * @param value
     *     allowed object is
     *     {@link TypeDePlat }
     *     
     */
    public void setType(TypeDePlat value) {
        this.type = value;
    }

    /**
     * Obtient la valeur de la propri�t� prix.
     * 
     */
    public double getPrix() {
        return prix;
    }

    /**
     * D�finit la valeur de la propri�t� prix.
     * 
     */
    public void setPrix(double value) {
        this.prix = value;
    }

    /**
     * Gets the value of the ingredients property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the ingredients property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getIngredients().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link Ingredient }
     * 
     * 
     */
    public List<Ingredient> getIngredients() {
        if (ingredients == null) {
            ingredients = new ArrayList<Ingredient>();
        }
        return this.ingredients;
    }

}
