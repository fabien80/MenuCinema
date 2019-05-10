package services;

import java.util.Arrays;
import java.util.List;

public class Utils {

    /**
     * Comme en URLENCODED il est difficile de traité des tableaux, le front envoie les tableaux d'ids sous forme de chaine avec des ";" comme séparateur
     * Du coup on pase cette string
     *
     * @param str : al string à parsé
     * @return La liste des idées
     */
    public static List<String> getListFromString(String str) {
        System.out.println(str);
        List<String> ids;
        ids = Arrays.asList(str.split(";"));
        return ids;

    }

}
