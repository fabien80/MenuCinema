
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
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType name="Commande">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="commandeId" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="dateHeure" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="clientId" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="idPlats" type="{https://www.univ-grenoble-alpes.fr/francais/l3miage/TDP}IdList" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="idFilms" type="{https://www.univ-grenoble-alpes.fr/francais/l3miage/TDP}IdList" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="idMenu" type="{https://www.univ-grenoble-alpes.fr/francais/l3miage/TDP}IdList" maxOccurs="unbounded" minOccurs="0"/>
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
    "commandeId",
    "dateHeure",
    "clientId",
    "idPlats",
    "idFilms",
    "idMenu",
    "prix",
    "numeroRue",
    "rue",
    "ville",
    "codePostal"
})
public class Commande {

    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/TDP", required = true)
    protected String commandeId;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/TDP", required = true)
    protected String dateHeure;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/TDP", required = true)
    protected String clientId;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/TDP")
    protected List<String> idPlats;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/TDP")
    protected List<String> idFilms;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/TDP")
    protected List<String> idMenu;
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

    public Commande(String commandeId, String dateHeure, String clientId, List<String> idPlats, List<String> idFilms, List<String> idMenu, double prix, int numeroRue, String rue, String ville, String codePostal) {
        this.commandeId = commandeId;
        this.dateHeure = dateHeure;
        this.clientId = clientId;
        this.idPlats = idPlats;
        this.idFilms = idFilms;
        this.idMenu = idMenu;
        this.prix = prix;
        this.numeroRue = numeroRue;
        this.rue = rue;
        this.ville = ville;
        this.codePostal = codePostal;
    }

    public Commande() {
    }

    /**
     * Obtient la valeur de la propri�t� commandeId.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCommandeId() {
        return commandeId;
    }

    /**
     * D�finit la valeur de la propri�t� commandeId.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCommandeId(String value) {
        this.commandeId = value;
    }

    /**
     * Obtient la valeur de la propri�t� dateHeure.
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
     * D�finit la valeur de la propri�t� dateHeure.
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
     * Obtient la valeur de la propri�t� clientId.
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
     * D�finit la valeur de la propri�t� clientId.
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
     * Gets the value of the idPlats property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the idPlats property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getIdPlats().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link String }
     * 
     * 
     */
    public List<String> getIdPlats() {
        if (idPlats == null) {
            idPlats = new ArrayList<String>();
        }
        return this.idPlats;
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
     * Gets the value of the idMenu property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the idMenu property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getIdMenu().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link String }
     * 
     * 
     */
    public List<String> getIdMenu() {
        if (idMenu == null) {
            idMenu = new ArrayList<String>();
        }
        return this.idMenu;
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
     * Obtient la valeur de la propri�t� numeroRue.
     * 
     */
    public int getNumeroRue() {
        return numeroRue;
    }

    /**
     * D�finit la valeur de la propri�t� numeroRue.
     * 
     */
    public void setNumeroRue(int value) {
        this.numeroRue = value;
    }

    /**
     * Obtient la valeur de la propri�t� rue.
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
     * D�finit la valeur de la propri�t� rue.
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
     * Obtient la valeur de la propri�t� ville.
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
     * D�finit la valeur de la propri�t� ville.
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
     * Obtient la valeur de la propri�t� codePostal.
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
     * D�finit la valeur de la propri�t� codePostal.
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
