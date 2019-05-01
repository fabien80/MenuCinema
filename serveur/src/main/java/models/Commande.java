
package models;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Classe Java pour Commande complex type.
 * 
 * <p>Le fragment de schéma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType name="Commande">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="comandeId" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="dateHeure" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="clientId" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="PlatsId" type="{https://www.univ-grenoble-alpes.fr/francais/l3miage/TDP}IdList" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="idFilms" type="{https://www.univ-grenoble-alpes.fr/francais/l3miage/TDP}IdList" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="prix" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *         &lt;element name="numeroRue" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="rue" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="ville" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="codePostal" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "Commande", namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/TDP", propOrder = {
    "comandeId",
    "dateHeure",
    "clientId",
    "platsId",
    "idFilms",
    "prix",
    "numeroRue",
    "rue",
    "ville",
    "codePostal"
})
public class Commande {

    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/TDP", required = true)
    protected String comandeId;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/TDP", required = true)
    protected String dateHeure;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/TDP", required = true)
    protected String clientId;
    @XmlElement(name = "PlatsId", namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/TDP")
    protected List<String> platsId;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/TDP")
    protected List<String> idFilms;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/TDP")
    protected double prix;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/TDP")
    protected int numeroRue;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/TDP", required = true)
    protected String rue;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/TDP", required = true)
    protected String ville;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/TDP", required = true)
    protected String codePostal;

    /**
     * Obtient la valeur de la propriété comandeId.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getComandeId() {
        return comandeId;
    }

    /**
     * Définit la valeur de la propriété comandeId.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setComandeId(String value) {
        this.comandeId = value;
    }

    /**
     * Obtient la valeur de la propriété dateHeure.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDateHeure() {
        return dateHeure;
    }

    /**
     * Définit la valeur de la propriété dateHeure.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDateHeure(String value) {
        this.dateHeure = value;
    }

    /**
     * Obtient la valeur de la propriété clientId.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getClientId() {
        return clientId;
    }

    /**
     * Définit la valeur de la propriété clientId.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setClientId(String value) {
        this.clientId = value;
    }

    /**
     * Gets the value of the platsId property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the platsId property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getPlatsId().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link String }
     * 
     * 
     */
    public List<String> getPlatsId() {
        if (platsId == null) {
            platsId = new ArrayList<String>();
        }
        return this.platsId;
    }

    /**
     * Gets the value of the idFilms property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the idFilms property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getIdFilms().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link String }
     * 
     * 
     */
    public List<String> getIdFilms() {
        if (idFilms == null) {
            idFilms = new ArrayList<String>();
        }
        return this.idFilms;
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

    /**
     * Obtient la valeur de la propriété numeroRue.
     * 
     */
    public int getNumeroRue() {
        return numeroRue;
    }

    /**
     * Définit la valeur de la propriété numeroRue.
     * 
     */
    public void setNumeroRue(int value) {
        this.numeroRue = value;
    }

    /**
     * Obtient la valeur de la propriété rue.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getRue() {
        return rue;
    }

    /**
     * Définit la valeur de la propriété rue.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setRue(String value) {
        this.rue = value;
    }

    /**
     * Obtient la valeur de la propriété ville.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getVille() {
        return ville;
    }

    /**
     * Définit la valeur de la propriété ville.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setVille(String value) {
        this.ville = value;
    }

    /**
     * Obtient la valeur de la propriété codePostal.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCodePostal() {
        return codePostal;
    }

    /**
     * Définit la valeur de la propriété codePostal.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCodePostal(String value) {
        this.codePostal = value;
    }

}
