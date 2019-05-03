
package models;

import models.Plat;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Classe Java pour Plats complex type.
 * 
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType name="Plats">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="plats" type="{https://www.univ-grenoble-alpes.fr/francais/l3miage/Plat}Plat" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "Plats", namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Plats", propOrder = {
    "plats"
})
public class Plats {

    @XmlElement(namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/Plats")
    protected List<Plat> plats;

    /**
     * Gets the value of the plats property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the plats property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getPlats().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link Plat }
     * 
     * 
     */
    public List<Plat> getPlats() {
        if (plats == null) {
            plats = new ArrayList<Plat>();
        }
        return this.plats;
    }

    /**
     *
     * @param references
     * @return le prix du plat d'id references ou -1 s'il n'existe pas
     */
    public double getPrixPlat(String references){
        double prixPlat = -1;
        int i = 0;
        Plat current;
        while(i < plats.size() && prixPlat == -1){
            current = plats.get(i);
            if(current.getId().equals(references)){
                prixPlat = current.getPrix();
            }
            i++;
        }

        return prixPlat;
    }

}
