package controllers;

import enums.TypeDeProduit;
import models.Commande;
import services.Connection;
import models.Produit;
import models.Commande;
import services.Utils;

import javax.servlet.http.HttpServletRequest;
import java.sql.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class CommandeController extends Controller<Commande> {


    /**
     * Fonction qui va sérialisé le resultset en objet Commande
     *
     * @param result : le résultset
     * @return une Commande
     */
    @Override
    protected Commande serialize(ResultSet result) {

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
            idPlats = getProductsIds(commandeId, "plat");
            idFilms = getProductsIds(commandeId, "film");
            idMenu = getProductsIds(commandeId, "menu");
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

    /**
     * Fonction qui va ajouter l'id du produit de res dans la liste idsProduits (le fait plusieurs fois si le produit a été commandé plusieurs fois )
     *
     * @param res         : RésultSet
     * @param idsProduits : La liste des idsProduits
     */
    private void getProductId(ResultSet res, List<String> idsProduits) {

        try {
            int nbCommande = res.getInt("nb_commande");
            for (int i = 1; i <= nbCommande; i++) {
                idsProduits.add(res.getString("produit_id"));
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    /**
     * Fonction qui va récupéré tous les idsproduits
     *
     * @param commandeId  l'id de la ocmmande
     * @param typeProduit le type du produit
     * @return : la listes des ids produit de type TypeProduit et de la commande d'id commandeId
     */
    private List<String> getProductsIds(int commandeId, String typeProduit) {

        List<String> idsProduits = new ArrayList<>();
        ResultSet res;
        String query = "SELECT produit_id, nb_commande ";
        query += "FROM produitCommande ";
        query += "WHERE commande_id = " + commandeId;
        query += " AND type_produit = " + "'" + typeProduit + "'";
        res = super.getResultSet(query);
        try {
            while (res.next()) {
                getProductId(res, idsProduits);
            }
            res.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return idsProduits;


    }

    /**
     * Fonction qui va retourner la requête pour créer une commande
     *
     * @param request
     * @return la  chaine de carazctère qui représente la requette sql à faire pout créer une commande.
     */
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

    /**
     * Transforme le body de la requête envoyé par le front en class Commande
     *
     * @param request
     * @return renvoie la commande ainsi crée
     */
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

        idPlats = Utils.getListFromString(request.getParameter("id_plats"));
        idMenu = Utils.getListFromString(request.getParameter("id_menus"));
        idFilms = Utils.getListFromString(request.getParameter("id_films"));

        clientId = ClientController.getClientIdByToken(clientToken);
        cmd = new Commande(clientId, idPlats, idFilms, idMenu, prix, numeroRue, rue, ville, codePostal);

        System.out.println(cmd);
        return cmd;
    }


    /**
     * Fonction qui va insérer la commande dans la base de données et tousles produitCommandes
     *
     * @param request
     * @return true si ça s'est bien passé, false sinon.
     */
    @Override
    public boolean create(HttpServletRequest request) {

        Commande commande = requestBodyToClass(request);
        boolean result = super.create(request);
        commande.setCommandeId(getLastCommande());
        result = insertProducts(commande.getCommandeId(), commande.getIdPlats(), "Nourriture");
        result = insertProducts(commande.getCommandeId(), commande.getIdFilms(), "Film");
        result = insertProducts(commande.getCommandeId(), commande.getIdMenu(), "Menu");
        return result;
    }

    /**
     * Fonction qui va récupéé l'id de la dernière commande ou -1 s'il n'y en a pas.
     *
     * @return : l'id de la dernière commande.
     */
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

    /**
     * Insère un produit dans produitCommande en faisant appelle à la procédure stoquées insertProduct
     *
     * @param commandeId
     * @param idProduct
     * @param productType
     * @return true si ça c'est bien passé.
     */
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

    /**
     * insert tous les produitsIds de type productType dans la base
     *
     * @param commandeId
     * @param products
     * @param productType
     * @return true si ça c'est bien passé, faux sinon.
     */
    public boolean insertProducts(int commandeId, List<String> products, String productType) {
        boolean result = false;
        for (int i = 0; i < products.size(); i++) {
            result = insertAProduct(commandeId, products.get(i), productType);
        }
        return result;
    }

    /**
     * Permet de récupéré l'élement commande d'id passé en requête.
     * @param tableName
     * @param request
     * @return renvoie la commande demandé
     */
    @Override
    public Commande getElem(String tableName, HttpServletRequest request) {
        Commande cmd = (Commande) super.getElem(tableName, request);
        return cmd;
    }

    /**
     * Fonction qui renvoie toute la liste des commandes
     * @param tableName
     * @return
     */
    @Override
    public List get(String tableName) {
        return super.get(tableName);
    }

    /**
     * Renvoie l'ensemble des commandes du client dont l'id a été passé dans request.
     * @param request
     * @return la liste de l'historique des commandes
     */
    public List getOrderHistory(HttpServletRequest request) {
        String tokenCLient = request.getParameter("token");
        int clientId = ClientController.getClientIdByToken(tokenCLient);
        String query = getQueryOrderHistory(clientId);
        return super.getList(query);
    }

    /**
     * Renvoie la requête pour avoir l'ensemble des commandes du client d'id clientId
     * @param clientId
     * @return la requête.
     */
    private String getQueryOrderHistory(int clientId) {
        String query = "SELECT * FROM COMMANDE ";
        query += " WHERE client_id = " + clientId;

        return query;
    }

    /**
     * Fonction qui en théorie renvoie la requête d'update d'une commande, mais elle n'est pas utile dans notre
     * cas, mais on doit l'override quand même. 
     * @param request
     * @return
     */
    @Override
    protected String getUpdateString(HttpServletRequest request) {
        return null;
    }
}
