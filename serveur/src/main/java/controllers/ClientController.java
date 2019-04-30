package controllers;

import models.Client;

import javax.servlet.http.HttpServletRequest;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

public class ClientController extends Controller<Client>
{
    /**
     * Permet de transformer le resultat d'une requete SQL en objet client
     *
     * @param result Le resultat d'une requete SQL sur la table client
     * @return Client un objet client creer a partir de la requete
     */
    protected Client serialize(ResultSet result)
    {
        String id;
        String nom;
        String prenom;
        String photo;
        String email;
        String tel;
        String adresse;

        Client client = null;

        try
        {
            id = result.getString("client_id");
            nom = result.getString("nom");
            prenom = result.getString("prenom");
            photo = result.getString("photo");
            email = result.getString("email");
            tel = result.getString("tel");
            adresse = result.getString("adresse");
            client = new Client(id, nom, prenom, photo, email, tel, adresse);

        } catch (SQLException e)
        {
            e.printStackTrace();
        }

        return client;
    }

    @Override
    public void create(HttpServletRequest request)
    {
        super.create(request);
    }

    @Override
    public List<Client> get(String tableName)
    {
        return super.get(tableName);
    }

    @Override
    public Client getElem(String tableName, HttpServletRequest request)
    {
        return super.getElem(tableName, request);
    }

    /**
     * Permet de creer une string d'insertion dans la base de donnees a partir du corps de la requete HTTP
     *
     * @param request le corps de la requete HTTP
     * @return la string d'insertion dans la base de donnees
     */
    protected String getCreateString(HttpServletRequest request)
    {
        Client client = requestBodyToClass(request);

        String res = "INSERT INTO client ";
        res += "VALUES(";
        res += "'" + client.getId() + "',";
        res += "'" + client.getNom() + "',";
        res += "'" + client.getPrenom() + "',";
        res += "'" + client.getPhoto() + "',";
        res += "'" + client.getEmail() + "',";
        res += "'" + client.getTel() + "',";
        res += "'" + client.getAdresse() + "')";
        return res;
    }

    @Override
    public void update(HttpServletRequest request)
    {
        super.update(request);
    }

    @Override
    protected String getUpdateString(HttpServletRequest request)
    {
        Client client = requestBodyToClass(request);
        String res = "UPDATE client SET";
        res += "client_id = '" + client.getId() + "' ,";
        res += "nom = '" + client.getNom() + "' ,";
        res += "prenom = '" + client.getPrenom() + "' ,";
        res += "photo = '" + client.getPhoto() + "' ,";
        res += "email = '" + client.getEmail() + "' ,";
        res += "tel = '" + client.getTel() + "' ,";
        res += "adresse = '" + client.getAdresse() + "'";
        res += "WHERE client_id = " + client.getId();

        return res;
    }

    @Override
    public boolean delete(String tableName, HttpServletRequest request)
    {
        return super.delete(tableName, request);
    }

    @Override
    protected Client requestBodyToClass(HttpServletRequest request)
    {
        Client client = null;
        String id, nom, prenom, photo, email, tel, adresse;

        id = request.getParameter("client_id");
        nom = request.getParameter("nom");
        prenom = request.getParameter("prenom");
        photo = request.getParameter("photo");
        email = request.getParameter("email");
        tel = request.getParameter("tel");
        adresse = request.getParameter("adresse");

        client = new Client(id, nom, prenom, photo, email, tel, adresse);

        return client;
    }
}
