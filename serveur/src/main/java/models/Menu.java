
package models;

import enums.*;
import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;


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
 *         &lt;element name="menuId" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="nom" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="typeProduit" type="{https://www.univ-grenoble-alpes.fr/francais/l3miage/TDP}TypeDeProduit"/>
 *         &lt;element name="nourriture" type="{https://www.univ-grenoble-alpes.fr/francais/l3miage/Nourriture}Nourriture" maxOccurs="4" minOccurs="2"/>
 *         &lt;element name="prix" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "Menu", namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Menu", propOrder = {
    "menuId",
    "nom",
    "typeProduit",
    "nourriture",
    "prix"
})
public class Menu {

    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Menu", required = true)
    protected String menuId;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Menu", required = true)
    protected String nom;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Menu", required = true)
    @XmlSchemaType(name = "string")
    protected TypeDeProduit typeProduit;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Menu", required = true)
    protected List<Nourriture> nourriture;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Menu")
    protected double prix;

    /**
     * Obtient la valeur de la propriété menuId.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getMenuId() {
        return menuId;
    }

    /**
     * Définit la valeur de la propriété menuId.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setMenuId(String value) {
        this.menuId = value;
    }

    /**
     * Obtient la valeur de la propriété nom.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNom() {
        return nom;
    }

    /**
     * Définit la valeur de la propriété nom.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNom(String value) {
        this.nom = value;
    }

    /**
     * Obtient la valeur de la propriété typeProduit.
     * 
     * @return
     *     possible object is
     *     {@link TypeDeProduit }
     *     
     */
    public TypeDeProduit getTypeProduit() {
        return typeProduit;
    }

    /**
     * Définit la valeur de la propriété typeProduit.
     * 
     * @param value
     *     allowed object is
     *     {@link TypeDeProduit }
     *     
     */
    public void setTypeProduit(TypeDeProduit value) {
        this.typeProduit = value;
    }

    /**
     * Gets the value of the nourriture property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the nourriture property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getNourriture().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link Nourriture }
     * 
     * 
     */
    public List<Nourriture> getNourriture() {
        if (nourriture == null) {
            nourriture = new ArrayList<Nourriture>();
        }
        return this.nourriture;
    }

    /**
     * Obtient la valeur de la propriété prix.
     * 
     */
    public double getPrix() {
        return prix;
    }

    /**
     * Définit la valeur de la propriété prix.
     * 
     */
    public void setPrix(double value) {
        this.prix = value;
    }

}
