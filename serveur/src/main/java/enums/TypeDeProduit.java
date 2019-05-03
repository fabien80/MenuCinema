//
// Ce fichier a �t� g�n�r� par l'impl�mentation de r�f�rence JavaTM Architecture for XML Binding (JAXB), v2.2.8-b130911.1802 
// Voir <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Toute modification apport�e � ce fichier sera perdue lors de la recompilation du sch�ma source. 
// G�n�r� le : 2019.05.03 � 03:01:52 PM CEST 
//


package enums;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Classe Java pour TypeDeProduit.
 * 
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 * <p>
 * <pre>
 * &lt;simpleType name="TypeDeProduit">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="Entree"/>
 *     &lt;enumeration value="Plat"/>
 *     &lt;enumeration value="Dessert"/>
 *     &lt;enumeration value="Boisson"/>
 *     &lt;enumeration value="Menu"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "TypeDeProduit", namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/TDP")
@XmlEnum
public enum TypeDeProduit {

    @XmlEnumValue("Entree")
    ENTREE("Entree"),
    @XmlEnumValue("Plat")
    PLAT("Plat"),
    @XmlEnumValue("Dessert")
    DESSERT("Dessert"),
    @XmlEnumValue("Boisson")
    BOISSON("Boisson"),
    @XmlEnumValue("Menu")
    MENU("Menu");
    private final String value;

    TypeDeProduit(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static TypeDeProduit fromValue(String v) {
        for (TypeDeProduit c: TypeDeProduit.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
