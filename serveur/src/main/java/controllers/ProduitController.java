package controllers;

import enums.TypeDeProduit;
import models.Menu;
import models.Produit;
import org.xml.sax.SAXException;
import services.JsonConverter;
import services.ParsingHandler;

import javax.servlet.http.HttpServlet;
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
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import controllers.Controller;

public class ProduitController {
    public String search(HttpServletRequest request) throws ParserConfigurationException, SAXException, IOException {
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

    private String search(String paramQuery, String paramType, ArrayList<Produit> produits) {
        String res;
        if (paramQuery != null && paramType != null) {
            TypeDeProduit type = TypeDeProduit.fromValue(paramType);
            res = searchByAllParams(type, paramQuery, produits);
        } else if (paramQuery != null) {
            res = searchByQuery(paramQuery, produits);
        } else if (paramType != null) {
            TypeDeProduit type = TypeDeProduit.fromValue(paramType);
            System.out.println(type);
            res = searchByType(type, produits);
        } else {
            res = JsonConverter.convertObjectToJson(produits);
        }
        System.out.println(res);
        return res;
    }

    private static String searchByQuery(String query, ArrayList<Produit> produits) {
        String res;
        ArrayList<Produit> filteredArray = produits.stream().filter((Produit produit) -> {
            Menu menu = produit.getMenu();
            if (menu != null) {
                return menu.toString().toLowerCase().contains(query.toLowerCase());
            }

            return produit.getProduct().toString().toLowerCase().contains(query.toLowerCase());
        }).collect(Collectors.toCollection(ArrayList::new));
        res = JsonConverter.convertObjectToJson(filteredArray);
        return res;
    }

    private static String searchByType(TypeDeProduit type, ArrayList<Produit> produits) {
        String res;
        ArrayList<Produit> filteredArray = produits.stream().filter((Produit produit) -> {
            Menu menu = produit.getMenu();
            if (menu != null) {
                return type.equals(TypeDeProduit.MENU);
            }
            return type.equals(produit.getProduct().getType());

        }).collect(Collectors.toCollection(ArrayList::new));
        res = JsonConverter.convertObjectToJson(filteredArray);
        return res;
    }

    private static String searchByAllParams(TypeDeProduit type, String query, ArrayList<Produit> produits) {
        String res;
        ArrayList<Produit> filteredArray = produits.stream().filter((Produit produit) -> {
            Menu menu = produit.getMenu();
            if (menu != null) {
                return type == TypeDeProduit.MENU && menu.toString().toLowerCase().contains(query.toLowerCase());
            }
            return produit.getProduct().getType() == type &&
                    produit.getProduct().toString().toLowerCase().contains(query.toLowerCase());

        }).collect(Collectors.toCollection(ArrayList::new));
        res = JsonConverter.convertObjectToJson(filteredArray);
        return res;
    }

    public List<String> getFilmsByFood(HttpServletRequest request) {
        List<String> idsFilm;
        String idFood = request.getParameter("id");
        String query = getFilmsByFoodQuery(idFood);
        ResultSet res;
        res = Controller.getResultSet(query);
        idsFilm = getAllidsFilm(res);
        return idsFilm;
    }

    private List<String> getAllidsFilm(ResultSet res) {
        List<String> idsFilm = new ArrayList<>();
        try {
            while (res.next()) {
                idsFilm.add(res.getString("produit_id"));
            }
            res.close();
        } catch (
                SQLException e) {
            e.printStackTrace();;
        }
        return idsFilm;
    }

    private String getFilmsByFoodQuery(String idFood) {
        String query;
        String subQuery;

        subQuery = "SELECT commande_id";
        subQuery += " FROM produitCommande";
        subQuery += " WHERE produit_id = " + idFood;
        subQuery += " AND type_produit <> 'Film'";

        query = "SELECT produit_id, sum(nb_commande) as nbs FROM produitCommande";
        query += " WHERE type_produit = 'Film' ";
        query += " AND commande_id IN  ( " + subQuery + ")";
        query += " group by produit_id";
        query += " order by nbs desc";
        query += " LIMIT 25";

        return query;
    }
}

