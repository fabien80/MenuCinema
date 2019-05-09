package controllers;

import models.Client;
import services.Connection;

import javax.servlet.http.HttpServletRequest;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

public class ClientController extends Controller<Client> {
	/**
	 * Permet de transformer le resultat d'une requete SQL en objet client
	 *
	 * @param result Le resultat d'une requete SQL sur la table client
	 * @return Client un objet client creer a partir de la requete
	 */
	protected Client serialize (ResultSet result) {
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
			client = new Client(id, nom, prenom, photo, mail, tel, fidelite, token, numeroRue, rue, ville, codePostal);

		} catch (SQLException e) {
			e.printStackTrace();
		}

		return client;
	}

	@Override
	public boolean create (HttpServletRequest request) {
		return super.create(request);
	}

	@Override
	public List<Client> get (String tableName) {
		return super.get(tableName);
	}

	@Override
	public Client getElem (String tableName, HttpServletRequest request) {
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
	 * Permet de creer une string d'insertion dans la base de donnees a partir du corps de la requete HTTP
	 *
	 * @param request le corps de la requete HTTP
	 * @return la string d'insertion dans la base de donnees
	 */
	protected String getCreateString (HttpServletRequest request) {
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

	@Override
	public boolean update (HttpServletRequest request) {
		return super.update(request);
	}

	@Override
	protected String getUpdateString (HttpServletRequest request) {


		Client client = requestBodyToClass(request);
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
		res += " code_postal = '" + client.getCodePostal() + "'" ;
		res += "WHERE token = " + "'" + client.getToken() + "'";

		return res;
	}

	@Override
	public boolean delete (String tableName, HttpServletRequest request) {
		return super.delete(tableName, request);
	}

	@Override
	protected Client requestBodyToClass (HttpServletRequest request) {
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

		client = new Client(id, nom, prenom, photo, mail, tel, fidelite, token, numeroRue, rue, ville, codePostal);

		return client;
	}
}
