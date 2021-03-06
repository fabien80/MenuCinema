package controllers;

import models.Client;
import services.Connection;

import javax.servlet.http.HttpServletRequest;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

public class ClientController extends Controller<Client> {


    /**
     *
     * @param result : Un resultSet d'un n-uplet de la table lié au controller de type Client
     * @return
     */
    @Override
    protected Client serialize(ResultSet result)
    {
        int id;
        String nom;
        String prenom;
        String mail;
        String photo;
        String tel;
        int fidelite;
        int numeroRue;
        String rue;
        String ville;
        String codePostal;
        String token;


		Client client = null;

		try {
			id = result.getInt("client_id");
			nom = result.getString("nom");
			prenom = result.getString("prenom");
			photo = result.getString("photo");
			tel = result.getString("tel");
			fidelite = result.getInt("fidelite");
			token = result.getString("token");
			numeroRue = result.getInt("numero_rue");
			rue = result.getString("rue");
			ville = result.getString("ville");
			codePostal = result.getString("code_postal");
			mail = result.getString("mail");

			client = new Client(id, nom, prenom, mail, photo, tel, fidelite, token, numeroRue, rue, ville, codePostal);
		} catch (SQLException e) {
			e.printStackTrace();
		}

		return client;
	}

    /**
     *  Ajoute un client dans la base de données
     * @param request
     * @return : Vrai si l'opération a réussi, faux sinon.
     */
    @Override
    public boolean create(HttpServletRequest request)
    {
        return super.create(request);
    }

    /**
     * Renvoie la liste de tous les n-uplets de la table passé en paramètre
     * @param tableName le nom de la table voulue
     * @return : la liste des clients.
     */
    @Override
    public List<Client> get(String tableName)
    {
        return super.get(tableName);
    }

    /**
     *
     * @param tableName le nom de la table de l'element voulu
     * @param request   la requete qui contient le token du client
     * @return : Le client de token token.
     */
    @Override
    public Client getElem(String tableName, HttpServletRequest request)
    {
        Client elem = null;
        String token = request.getParameter("token");

		try {
			ResultSet result =
					Connection.conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY)
							.executeQuery("SELECT * from client WHERE token = " + "'" + token + "'");

			if (result.first()) {
				elem = serialize(result);
			}
			result.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return elem;
	}

    /**
     * Fonction qui renvoie la requète de création d'un client dans le base de données sous la forme d'une string
     * @param request La requete http recue
     * @return : La string contenant la requête de création d'un client.
     */
    @Override
    protected String getCreateString(HttpServletRequest request)
    {
        Client client = requestBodyToClass(request);

		String res = "INSERT INTO client ";
		res += " ( ";
		res += " nom , ";
		res += " prenom , ";
		res += " mail , ";
		res += " photo , ";
		res += " tel , ";
		res += " fidelite , ";
		res += " numero_rue , ";
		res += " rue , ";
		res += " ville , ";
		res += " code_postal , ";
		res += " token ";
		res += " ) ";
		res += "VALUES(";
		res += "'" + client.getNom() + "',";
		res += "'" + client.getPrenom() + "',";
		res += "'" + client.getMail() + "',";
		res += "'" + client.getPhoto() + "',";
		res += "'" + client.getTel() + "',";
		res += client.getFidelite() + ",";
		res += client.getNumeroRue() + ",";
		res += "'" + client.getRue() + "',";
		res += "'" + client.getVille() + "',";
		res += "'" + client.getCodePostal() + "',";
		res += "'" + client.getToken() + "')";
		return res;
	}

    /**
     * Edit un client.
     * @param request La requete http passee dans getUpdateString
     * @return : Vrai si l'opération a réussi, faux sinon.
     */
    @Override
    public boolean update(HttpServletRequest request)
    {
        return super.update(request);
    }

    /**
     *
     * @param request la requete HTTP concernant les nouvelle information
     * @return : La requête d'update sous forme de String
     */
    @Override
    protected String getUpdateString(HttpServletRequest request)
    {


		Client client = requestBodyToClass(request);
		System.out.println(client.toString());
		String res = "UPDATE client SET";
		res += " nom = '" + client.getNom() + "' ,";
		res += " prenom = '" + client.getPrenom() + "' ,";
		res += " mail = '" + client.getMail() + "' ,";
		res += " photo = '" + client.getPhoto() + "' ,";
		res += " tel = '" + client.getTel() + "' ,";
		res += " fidelite = " + client.getFidelite() + " ,";
		res += " numero_rue = " + client.getNumeroRue() + " ,";
		res += " rue = '" + client.getRue() + "' ,";
		res += " ville = '" + client.getVille() + "' ,";
		res += " code_postal = '" + client.getCodePostal() + "'";
		res += "WHERE token = " + "'" + client.getToken() + "'";

		return res;
	}

    /**
     * Supprime un client dans la db.
     * @param tableName le nom de la table ou il faut supprimer l'element
     * @param request   la requete contenant l'id de l'element a supprimer
     * @return : Vrai si l'opération, faux sinon.
     */
    @Override
    public boolean delete(String tableName, HttpServletRequest request)
    {
        return super.delete(tableName, request);
    }

    /**
     * Transforme les informations de la requête en un Client
     * @param request une requete HTTP contenant les informations de l'objet au format url-encoded
     * @return : Le client ainsi créer.
     */
    @Override
    protected Client requestBodyToClass(HttpServletRequest request)
    {
        Client client = null;
        int id;
        String nom;
        String prenom;
        String mail;
        String photo;
        String tel;
        int fidelite;
        int numeroRue;
        String rue;
        String ville;
        String codePostal;
        String token;

		id = Integer.parseInt(request.getParameter("client_id"));
		nom = request.getParameter("nom");
		prenom = request.getParameter("prenom");
		mail = request.getParameter("mail");
		photo = request.getParameter("photo");
		tel = request.getParameter("tel");
		fidelite = Integer.parseInt(request.getParameter("fidelite"));
		numeroRue = Integer.parseInt(request.getParameter("numero_rue"));
		rue = request.getParameter("rue");
		ville = request.getParameter("ville");
		codePostal = request.getParameter("code_postal");
		token = request.getParameter("token");
		client = new Client(id, nom, prenom, mail, photo, tel, fidelite, token, numeroRue, rue, ville, codePostal);

		return client;
	}


    /**
     * Fonction statique qui renvoie l'id d'un client en fonction du token passé en paramètre.
     * @param token
     * @return
     */
	public static int getClientIdByToken(String token) {
		int clientId = -1;
		ResultSet res;
		String query = "SELECT client_id ";
		query += "FROM CLIENT ";
		query += " WHERE token =  " + "'" + token + "'";
		res = Controller.getResultSet(query);
		try {
			if (res.first()) {
				clientId = res.getInt("client_id");
			}
			res.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return clientId;

	}

}
