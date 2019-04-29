
package JavaServer;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Classe Java pour Ingredient.
 * 
 * <p>Le fragment de schéma suivant indique le contenu attendu figurant dans cette classe.
 * <p>
 * <pre>
 * &lt;simpleType name="Ingredient">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="Poulet"/>
 *     &lt;enumeration value="Viande"/>
 *     &lt;enumeration value="Poivron"/>
 *     &lt;enumeration value="Tomate"/>
 *     &lt;enumeration value="Mozzarella"/>
 *     &lt;enumeration value="Aubergine"/>
 *     &lt;enumeration value="Jambon"/>
 *     &lt;enumeration value="Champignon"/>
 *     &lt;enumeration value="Ananas"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "Ingredient", namespace = "https://www.univ-grenoble-alpes.fr/francais/l3miage/TDP")
@XmlEnum
public enum Ingredient {

    @XmlEnumValue("Poulet")
    POULET("Poulet"),
    @XmlEnumValue("Viande")
    VIANDE("Viande"),
    @XmlEnumValue("Poivron")
    POIVRON("Poivron"),
    @XmlEnumValue("Tomate")
    TOMATE("Tomate"),
    @XmlEnumValue("Mozzarella")
    MOZZARELLA("Mozzarella"),
    @XmlEnumValue("Aubergine")
    AUBERGINE("Aubergine"),
    @XmlEnumValue("Jambon")
    JAMBON("Jambon"),
    @XmlEnumValue("Champignon")
    CHAMPIGNON("Champignon"),
    @XmlEnumValue("Ananas")
    ANANAS("Ananas");
    private final String value;

    Ingredient(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static Ingredient fromValue(String v) {
        for (Ingredient c: Ingredient.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
