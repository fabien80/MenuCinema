
package models;

import enums.Ingredient;
import enums.TypeDeProduit;

import javax.xml.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;


/**
 * <p>Classe Java pour Nourriture complex type.
 *
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 *
 * <pre>
 * &lt;complexType name="Nourriture">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="id" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="type" type="{https://www.univ-grenoble-alpes.fr/francais/l3miage/TDP}TypeDeProduit"/>
 *         &lt;element name="nom" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="description" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="prix" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *         &lt;element name="ingredients" type="{https://www.univ-grenoble-alpes.fr/francais/l3miage/Ingredient}Ingredient" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "Nourriture", namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Nourriture", propOrder = {
        "id",
        "type",
        "nom",
        "description",
        "prix",
        "ingredients"
})
public class Nourriture
{

    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Nourriture", required = true)
    protected String id;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Nourriture", required = true)
    @XmlSchemaType(name = "string")
    protected TypeDeProduit type;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Nourriture")
    protected String nom;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Nourriture")
    protected String description;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Nourriture")
    protected double prix;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Nourriture")
    @XmlSchemaType(name = "string")
    protected List<Ingredient> ingredients;

    /**
     * Obtient la valeur de la propri�t� id.
     *
     * @return possible object is
     * {@link String }
     */
    public String getId()
    {
        return id;
    }

    /**
     * D�finit la valeur de la propri�t� id.
     *
     * @param value allowed object is
     *              {@link String }
     */
    public void setId(String value)
    {
        this.id = value;
    }

    /**
     * Obtient la valeur de la propri�t� type.
     *
     * @return possible object is
     * {@link TypeDeProduit }
     */
    public TypeDeProduit getType()
    {
        return type;
    }

    /**
     * D�finit la valeur de la propri�t� type.
     *
     * @param value allowed object is
     *              {@link TypeDeProduit }
     */
    public void setType(TypeDeProduit value)
    {
        this.type = value;
    }

    /**
     * @return Le nom de la product
     */
    public String getNom()
    {
        return nom;
    }

    /**
     * @param nom le nouveau nom de la product
     */
    public void setNom(String nom)
    {
        this.nom = nom;
    }

    /**
     * @return la description de la product
     */
    public String getDescription()
    {
        return description;
    }

    /**
     * @param description la nouvelle description de la product
     */
    public void setDescription(String description)
    {
        this.description = description;
    }

    /**
     * Obtient la valeur de la propri�t� prix.
     */
    public double getPrix()
    {
        return prix;
    }

    /**
     * D�finit la valeur de la propri�t� prix.
     */
    public void setPrix(double value)
    {
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
     */
    public List<Ingredient> getIngredients()
    {
        if (ingredients == null)
        {
            ingredients = new ArrayList<Ingredient>();
        }
        return this.ingredients;
    }

    @Override
    public String toString()
    {
        return "Nourriture{" +
                "id='" + id + '\'' +
                ", type=" + type +
                ", nom='" + nom + '\'' +
                ", description='" + description + '\'' +
                ", prix=" + prix +
                ", ingredients=" + ingredients +
                '}'+"\n";

    }
}
