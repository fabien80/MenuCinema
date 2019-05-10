package controllers;

import enums.TypeDeProduit;
import models.Menu;
import models.Produit;
import org.xml.sax.SAXException;
import services.JsonConverter;
import services.ParsingHandler;

import javax.servlet.http.HttpServletRequest;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class ProduitController
{

    /**
     * Instancie le parser SAX et renvoie les elements du menu correspondants aux criteres demandes
     *
     * @param request La requete http pouvant contenir ou non les parametres pour trier les resultats
     * @return le json correspondant aux elements demandes
     * @throws ParserConfigurationException Si la configuration du parser ne fonctionnent pas
     * @throws SAXException                 Si il y a une erreur lors du parsing
     * @throws IOException                  Si il y a un probleme avec l'ouverture du fichier XML
     */
    public String search(HttpServletRequest request) throws ParserConfigurationException, SAXException, IOException
    {
        SAXParserFactory saxParserFactory = SAXParserFactory.newInstance();
        saxParserFactory.setNamespaceAware(true);
        SAXParser saxParser = saxParserFactory.newSAXParser();
        FileInputStream is = new FileInputStream(new File("src/main/xml/xml/Produits.xml").getAbsolutePath());
        ParsingHandler parsingHandler = new ParsingHandler();
        saxParser.parse(is, parsingHandler);

        ArrayList<Produit> produits = parsingHandler.getProduitList();
        String res;
        String paramQuery = request.getParameter("query");
        String paramType = request.getParameter("type");
        res = search(paramQuery, paramType, produits);
        return res;
    }

    /**
     * Effectue les differents tests en fonction de la presence ou non des parametres. Si il n'y en a pas, retourne le tableau transformer en JSON
     *
     * @param paramQuery le parametre query, une string de recherche
     * @param paramType  un parametre correspondant a l'enumeration TypeDeProduit
     * @param produits   la liste de tout les produits fait a partir du XML
     * @return le json correspondant aux elements correspondants aux parametres
     */
    private String search(String paramQuery, String paramType, ArrayList<Produit> produits)
    {
        String res;
        if (paramQuery != null && paramType != null)
        {
            TypeDeProduit type = TypeDeProduit.fromValue(paramType);
            res = searchByAllParams(type, paramQuery, produits);
        } else if (paramQuery != null)
        {
            res = searchByQuery(paramQuery, produits);
        } else if (paramType != null)
        {
            TypeDeProduit type = TypeDeProduit.fromValue(paramType);
            System.out.println(type);
            res = searchByType(type, produits);
        } else
        {
            res = JsonConverter.convertObjectToJson(produits);
        }
        System.out.println(res);
        return res;
    }

    /**
     * Trie le tableau en fonction du parametre query
     *
     * @param query    une string de recherche
     * @param produits un tableau de produits
     * @return le json correspondant au parametre
     */
    private static String searchByQuery(String query, ArrayList<Produit> produits)
    {
        String res;
        ArrayList<Produit> filteredArray = produits.stream().filter((Produit produit) ->
        {
            Menu menu = produit.getMenu();
            if (menu != null)
            {
                return menu.toString().toLowerCase().contains(query.toLowerCase());
            }

            return produit.getProduct().toString().toLowerCase().contains(query.toLowerCase());
        }).collect(Collectors.toCollection(ArrayList::new));
        res = JsonConverter.convertObjectToJson(filteredArray);
        return res;
    }

    /**
     * Permet de trier le tableau en fonction du type
     *
     * @param type     une string correspondant a l'enumeration TypeDeProduit
     * @param produits un tableau de produits
     * @return le json correspondant au parametre
     */
    private static String searchByType(TypeDeProduit type, ArrayList<Produit> produits)
    {
        String res;
        ArrayList<Produit> filteredArray = produits.stream().filter((Produit produit) ->
        {
            Menu menu = produit.getMenu();
            if (menu != null)
            {
                return type.equals(TypeDeProduit.MENU);
            }
            return type.equals(produit.getProduct().getType());

        }).collect(Collectors.toCollection(ArrayList::new));
        res = JsonConverter.convertObjectToJson(filteredArray);
        return res;
    }

    /**
     * Permet de trier le tableau en fonction du type et de la requete
     *
     * @param type     une string correspondant a l'enumeration TypeDeProduit
     * @param query    une string de recherche
     * @param produits un tableau de produits
     * @return le json correspondant au parametre
     */
    private static String searchByAllParams(TypeDeProduit type, String query, ArrayList<Produit> produits)
    {
        String res;
        ArrayList<Produit> filteredArray = produits.stream().filter((Produit produit) ->
        {
            Menu menu = produit.getMenu();
            if (menu != null)
            {
                return type == TypeDeProduit.MENU && menu.toString().toLowerCase().contains(query.toLowerCase());
            }
            return produit.getProduct().getType() == type &&
                    produit.getProduct().toString().toLowerCase().contains(query.toLowerCase());

        }).collect(Collectors.toCollection(ArrayList::new));
        res = JsonConverter.convertObjectToJson(filteredArray);
        return res;
    }

    public List<String> getProductIdByOtherProduct(HttpServletRequest request) {
        List<String> ids;
        String id = request.getParameter("id");
        String typeRecherche = request.getParameter("type_recherche");
        String typeDonne = request.getParameter("type_donne");
        String query = getQuery(id,typeRecherche,typeDonne);
        ResultSet res;
        res = Controller.getResultSet(query);
        ids = getAllsProductIds(res);
        return ids;
    }

    private List<String> getAllsProductIds(ResultSet res) {
        List<String> idsFilm = new ArrayList<>();
        try
        {
            while (res.next())
            {
                idsFilm.add(res.getString("produit_id"));
            }
            res.close();
        } catch (
                SQLException e)
        {
            e.printStackTrace();
            ;
        }
        return idsFilm;
    }

    private String getQuery(String idFood, String typeRecherche, String typeDonne) {
        String query;
        String subQuery;

        subQuery = "SELECT commande_id";
        subQuery += " FROM produitCommande";
        subQuery += " WHERE produit_id = " + idFood;
        subQuery += " AND type_produit =" + "'" + typeDonne + "'";

        query = "SELECT produit_id, sum(nb_commande) as nbs FROM produitCommande";
        query += " WHERE type_produit =" + "'" + typeRecherche + "'";
        query += " AND commande_id IN  ( " + subQuery + ")";
        query += " group by produit_id";
        query += " order by nbs desc";
        query += " LIMIT 25";

        return query;
    }
}

