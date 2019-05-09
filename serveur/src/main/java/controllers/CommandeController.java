package controllers;

import enums.TypeDeProduit;
import models.Commande;
import services.Connection;
import models.Produit;
import models.Commande;

import javax.servlet.http.HttpServletRequest;
import java.sql.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class CommandeController extends Controller {

    @Override
    protected Object serialize(ResultSet result) {

        int commandeId;
        String dateHeure;

        int clientId;
        List<String> idPlats;
        List<String> idFilms;
        List<String> idMenu;
        double prix;
        int numeroRue;
        String rue;
        String ville;
        String codePostal;

        Commande commande = null;
        try {
            commandeId = result.getInt("commande_id");
            dateHeure = result.getString("date_heure");
            clientId = result.getInt("client_id");
            idPlats = getProductIds(commandeId, "plat");
            idFilms = getProductIds(commandeId, "film");
            idMenu = getProductIds(commandeId, "menu");
            prix = result.getDouble("prix");
            numeroRue = result.getInt("numero_rue");
            rue = result.getString("rue");
            ville = result.getString("ville");
            codePostal = result.getString("code_postal");
            commande = new Commande(commandeId, dateHeure, clientId, idPlats, idFilms, idMenu, prix, numeroRue, rue, ville, codePostal);

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return commande;
    }

    private List<String> getProductIds(int commandeId, String typeProduit) {

        List<String> idProduit = new ArrayList<>();
        ResultSet res;
        String query = "SELECT produit_id, nb_commande ";
        query += "FROM produitCommande ";
        query += "WHERE commande_id = " + commandeId;
        query += " AND type_produit = " + "'" + typeProduit + "'";
        System.out.println(query);
        res = super.getResultSet(query);
        try {
            while (res.next()) {
                System.out.println("Le produit d'id : " + res.getString("produit_id") + " de type : " + typeProduit);
                int nbCommande = res.getInt("nb_commande");
                for (int i = 1; i <= nbCommande; i++) {
                    idProduit.add(res.getString("produit_id"));
                }
            }
            res.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return idProduit;


    }

    @Override
    protected String getCreateString(HttpServletRequest request) {
        Commande commande = requestBodyToClass(request);
        String res = "INSERT INTO commande ";
        res += " ( " + "client_id";
        res += " , " + "prix ";
        res += " , " + "date_heure ";
        res += " , " + "numero_rue";
        res += " , " + "rue";
        res += " , " + "ville";
        res += " , " + "code_postal " + " ) ";
        res += " VALUES(";
        res += commande.getClientId() + ",";
        res += commande.getPrix() + ",";
        res += "SYSDATE() ,";
        res += commande.getNumeroRue() + ",";
        res += "'" + commande.getRue() + "',";
        res += "'" + commande.getVille() + "',";
        res += "'" + commande.getCodePostal() + "'" + ")";
        return res;
    }

    @Override
    protected Commande requestBodyToClass(HttpServletRequest request) {

        String clientToken;
        int clientId;
        List<String> idPlats;
        List<String> idFilms;
        List<String> idMenu;
        double prix;
        int numeroRue;
        String rue;
        String ville;
        String codePostal;
        Commande cmd;

        clientToken = request.getParameter("token");
        prix = Double.parseDouble(request.getParameter("prix"));
        numeroRue = Integer.parseInt(request.getParameter("numero_rue"));
        rue = request.getParameter("rue");
        ville = request.getParameter("ville");
        codePostal = request.getParameter("code_postal");

        idPlats = getParsedString(request.getParameter("id_plats"));
        idMenu = getParsedString(request.getParameter("id_menus"));
        idFilms = getParsedString(request.getParameter("id_films"));

        clientId = getClientIdByToken(clientToken);
        cmd = new Commande(clientId, idPlats, idFilms, idMenu, prix, numeroRue, rue, ville, codePostal);

        System.out.println(cmd);
        return cmd;
    }

    private int getClientIdByToken(String token) {
        int clientId = -1;
        ResultSet res;
        String query = "SELECT client_id ";
        query += "FROM CLIENT ";
        query += " WHERE token =  " + "'" + token + "'";
        res = super.getResultSet(query);
        try {
            res.next();
            clientId = res.getInt("client_id");
            res.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return clientId;

    }

    private List<String> getParsedString(String str) {
        System.out.println(str);
        List<String> ids = new ArrayList<>();
        ids = Arrays.asList(str.split(";"));
        return ids;
    }


    @Override
    public boolean create(HttpServletRequest request) {

        Commande commande = requestBodyToClass(request);
        boolean result = super.create(request);
        commande.setCommandeId(getLastCommande());
        result = insertProducts(commande.getCommandeId(), commande.getIdPlats(), "Plat");
        result = insertProducts(commande.getCommandeId(), commande.getIdFilms(), "Film");
        result = insertProducts(commande.getCommandeId(), commande.getIdMenu(), "Menu");
        return result;
    }

    private int getLastCommande() {
        int lastCommandeId = -1;
        String query = "SELECT max(commande_id) FROM COMMANDE ";
        ResultSet res;
        res = super.getResultSet(query);
        try {
            res.next();
            lastCommandeId = res.getInt("max(commande_id)");
            res.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return lastCommandeId;


    }

    private boolean insertAProduct(int commandeId, String idProduct, String productType) {
        try {
            if (!idProduct.equals("")) {
                int j = 1;
                CallableStatement cstmt = Connection.conn.prepareCall("{call insertProduct(?, ?,?)}");
                cstmt.setString(j++, idProduct);
                cstmt.setString(j++, productType);
                cstmt.setInt(j, commandeId);
                cstmt.executeQuery();
                cstmt.close();
                Connection.commit();
            }
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }

    public boolean insertProducts(int commandeId, List<String> products, String productType) {

        boolean result = false;
        for (int i = 0; i < products.size(); i++) {
            result = insertAProduct(commandeId, products.get(i), productType);
        }
        return result;


    }

    @Override
    public Commande getElem(String tableName, HttpServletRequest request) {
        Commande cmd = (Commande) super.getElem(tableName, request);
        return cmd;
    }

    @Override
    public List get(String tableName) {
        return super.get(tableName);
    }

    @Override
    protected String getUpdateString(HttpServletRequest request) {
        return null;
    }
}
