
package models;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
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
 *         &lt;element name="plat" type="{https://www.univ-grenoble-alpes.fr/francais/l3miage/Plat}Plat" maxOccurs="4"/>
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
    "plat"
})
public class Menu {

    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Menu", required = true)
    protected List<Plat> plat;

    /**
     * Gets the value of the plat property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the plat property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getPlat().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link Plat }
     * 
     * 
     */
    public List<Plat> getPlat() {
        if (plat == null) {
            plat = new ArrayList<Plat>();
        }
        return this.plat;
    }

}
