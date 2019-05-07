
package models;

import enums.TypeDeProduit;

import javax.xml.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;


/**
 * <p>Classe Java pour Menu complex type.
 *
 * <p>Le fragment de schéma suivant indique le contenu attendu figurant dans cette classe.
 *
 * <pre>
 * &lt;complexType name="Menu">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="id" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="nom" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="type" type="{https://www.univ-grenoble-alpes.fr/francais/l3miage/TDP}TypeDeProduit"/>
 *         &lt;element name="foodGroups" type="{https://www.univ-grenoble-alpes.fr/francais/l3miage/FoodGroups}FoodGroups"/>
 *         &lt;element name="prix" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "Menu", namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Menu", propOrder = {
        "id",
        "nom",
        "type",
        "foodGroups",
        "prix"
})
public class Menu
{

    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Menu", required = true)
    protected String id;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Menu", required = true)
    protected String nom;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Menu", required = true)
    @XmlSchemaType(name = "string")
    protected TypeDeProduit type;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Menu", required = true)
    protected FoodGroups foodGroups;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Menu")
    protected double prix;

    /**
     * Obtient la valeur de la propriété id.
     *
     * @return possible object is
     * {@link String }
     */
    public String getId()
    {
        return id;
    }

    /**
     * Définit la valeur de la propriété id.
     *
     * @param value allowed object is
     *              {@link String }
     */
    public void setId(String value)
    {
        this.id = value;
    }

    /**
     * Obtient la valeur de la propriété nom.
     *
     * @return possible object is
     * {@link String }
     */
    public String getNom()
    {
        return nom;
    }

    /**
     * Définit la valeur de la propriété nom.
     *
     * @param value allowed object is
     *              {@link String }
     */
    public void setNom(String value)
    {
        this.nom = value;
    }

    /**
     * Obtient la valeur de la propriété type.
     *
     * @return possible object is
     * {@link TypeDeProduit }
     */
    public TypeDeProduit getType()
    {
        return type;
    }

    /**
     * Définit la valeur de la propriété type.
     *
     * @param value allowed object is
     *              {@link TypeDeProduit }
     */
    public void setType(TypeDeProduit value)
    {
        this.type = value;
    }

    /**
     * Gets the value of the product property.
     *
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the product property.
     *
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getProduct().add(newItem);
     * </pre>
     *
     *
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link Nourriture }
     */
    public FoodGroups getFoodGroups()
    {
        return this.foodGroups;
    }

    public void setFoodGroups(FoodGroups foodGroups)
    {
        this.foodGroups = foodGroups;
    }

    /**
     * Obtient la valeur de la propriété prix.
     */
    public double getPrix()
    {
        return prix;
    }

    /**
     * Définnourritureit la valeur de la propriété prix.
     */
    public void setPrix(double value)
    {
        this.prix = value;
    }

    @Override
    public String toString()
    {
        return "Menu{" +
                "id='" + id + '\'' +
                ", nom='" + nom + '\'' +
                ", type=" + type +
                ", foodGroups=" + foodGroups +
                ", prix=" + prix +
                '}';
    }
}

