
package models;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Classe Java pour Client complex type.
 * 
 * <p>Le fragment de schéma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType name="Client">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="client_id" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="nom" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="prenom" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="mail" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="photo" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="tel" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="fidelite" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="token" type="{http://www.w3.org/2001/XMLSchema}string"/>
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
@XmlType(name = "Client", namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Client", propOrder = {
    "clientId",
    "nom",
    "prenom",
    "mail",
    "photo",
    "tel",
    "fidelite",
    "token",
    "numeroRue",
    "rue",
    "ville",
    "codePostal"
})
public class Client {

    @XmlElement(name = "client_id", namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Client")
    protected int clientId;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Client", required = true)
    protected String nom;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Client", required = true)
    protected String prenom;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Client", required = true)
    protected String mail;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Client", required = true)
    protected String photo;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Client", required = true)
    protected String tel;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Client")
    protected int fidelite;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Client", required = true)
    protected String token;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Client")
    protected int numeroRue;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Client", required = true)
    protected String rue;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Client", required = true)
    protected String ville;
    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Client", required = true)
    protected String codePostal;

    public Client(int clientId, String nom, String prenom, String mail, String photo, String tel, int fidelite, String token, int numeroRue, String rue, String ville, String codePostal) {
        this.clientId = clientId;
        this.nom = nom;
        this.prenom = prenom;
        this.mail = mail;
        this.photo = photo;
        this.tel = tel;
        this.fidelite = fidelite;
        this.token = token;
        this.numeroRue = numeroRue;
        this.rue = rue;
        this.ville = ville;
        this.codePostal = codePostal;
    }

    public Client() {
    }

    /**
     *
     * Obtient la valeur de la propriété clientId.
     * 
     */
    public int getClientId() {
        return clientId;
    }

    /**
     * Définit la valeur de la propriété clientId.
     * 
     */
    public void setClientId(int value) {
        this.clientId = value;
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
     * Obtient la valeur de la propriété prenom.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPrenom() {
        return prenom;
    }

    /**
     * Définit la valeur de la propriété prenom.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPrenom(String value) {
        this.prenom = value;
    }

    /**
     * Obtient la valeur de la propriété mail.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getMail() {
        return mail;
    }

    /**
     * Définit la valeur de la propriété mail.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setMail(String value) {
        this.mail = value;
    }

    /**
     * Obtient la valeur de la propriété photo.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPhoto() {
        return photo;
    }

    /**
     * Définit la valeur de la propriété photo.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPhoto(String value) {
        this.photo = value;
    }

    /**
     * Obtient la valeur de la propriété tel.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTel() {
        return tel;
    }

    /**
     * Définit la valeur de la propriété tel.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTel(String value) {
        this.tel = value;
    }

    /**
     * Obtient la valeur de la propriété fidelite.
     * 
     */
    public int getFidelite() {
        return fidelite;
    }

    /**
     * Définit la valeur de la propriété fidelite.
     * 
     */
    public void setFidelite(int value) {
        this.fidelite = value;
    }

    /**
     * Obtient la valeur de la propriété token.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getToken() {
        return token;
    }

    /**
     * Définit la valeur de la propriété token.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setToken(String value) {
        this.token = value;
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
