
package enums;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Classe Java pour TypeDePlat.
 * 
 * <p>Le fragment de sch�ma suivant indique le contenu attendu figurant dans cette classe.
 * <p>
 * <pre>
 * &lt;simpleType name="TypeDePlat">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="Entree"/>
 *     &lt;enumeration value="Plat"/>
 *     &lt;enumeration value="Dessert"/>
 *     &lt;enumeration value="Boisson"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "TypeDePlat", namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/TDP")
@XmlEnum
public enum TypeDePlat {

    @XmlEnumValue("Entree")
    ENTREE("Entree"),
    @XmlEnumValue("Plat")
    PLAT("Plat"),
    @XmlEnumValue("Dessert")
    DESSERT("Dessert"),
    @XmlEnumValue("Boisson")
    BOISSON("Boisson");
    private final String value;

    TypeDePlat(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static TypeDePlat fromValue(String v) {
        for (TypeDePlat c: TypeDePlat.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
