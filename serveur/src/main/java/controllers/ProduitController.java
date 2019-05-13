package controllers;

import dto.NourrituresMenusDTO;
import dto.ReviewDTO;
import dto.UserReviewDTO;
import enums.DBProductType;
import dto.ReviewDTO;
import enums.TypeDeProduit;
import models.Client;
import models.Menu;
import models.Nourriture;
import models.Produit;
import org.xml.sax.SAXException;
import services.Connection;
import services.JsonConverter;
import services.ParsingHandler;

import javax.servlet.http.HttpServletRequest;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.sql.CallableStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import services.Utils;

public class ProduitController {


    /**
     * * Instancie le parser SAX et renvoie les elements du menu correspondants aux criteres demandes
     *
     * @return
     * @throws ParserConfigurationException Si la configuration du parser ne fonctionnent pas
     * @throws SAXException                 Si il y a une erreur lors du parsing
     * @throws IOException                  Si il y a un probleme avec l'ouverture du fichier XML
     */
    public ParsingHandler initParse() throws ParserConfigurationException, SAXException, IOException {
        SAXParserFactory saxParserFactory = SAXParserFactory.newInstance();
        saxParserFactory.setNamespaceAware(true);
        SAXParser saxParser = saxParserFactory.newSAXParser();
        FileInputStream is = new FileInputStream(new File("src/main/xml/xml/Produits.xml").getAbsolutePath());
        ParsingHandler parsingHandler = new ParsingHandler();
        saxParser.parse(is, parsingHandler);
        return parsingHandler;
    }

    private ArrayList<Produit> getAllProducts() throws ParserConfigurationException, SAXException, IOException {
        ParsingHandler parsingHandler = initParse();
        ArrayList<Produit> produits = parsingHandler.getProduitList();
        return produits;
    }

    /**
     * @param request La requete http pouvant contenir ou non les parametres pour trier les resultats
     * @return le json correspondant aux elements demandes
     * @throws ParserConfigurationException Si la configuration du parser ne fonctionnent pas
     * @throws SAXException                 Si il y a une erreur lors du parsing
     * @throws IOException                  Si il y a un probleme avec l'ouverture du fichier XML
     */
    public String search(HttpServletRequest request) throws ParserConfigurationException, SAXException, IOException {
        ArrayList<Produit> produits = getAllProducts();
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

    /**
     * Trie le tableau en fonction du parametre query
     *
     * @param query    une string de recherche
     * @param produits un tableau de produits
     * @return le json correspondant au parametre
     */
    private static String searchByQuery(String query, ArrayList<Produit> produits) {
        String res;
        ArrayList<Produit> filteredArray = produits.stream().filter((Produit produit) -> {
            Menu menu = produit.getMenu();
            if (menu != null) {
                return menu.toString().toLowerCase().contains(query.toLowerCase());
            }

            return produit.getProduct().getNomDescription().toLowerCase().contains(query.toLowerCase());
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
    private static String searchByType(TypeDeProduit type, ArrayList<Produit> produits) {
        String res;
        ArrayList<Produit> filteredArray = produits.stream().filter((Produit produit) -> {
            Menu menu = produit.getMenu();
            if (menu != null) {
                return type == TypeDeProduit.MENU;
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
    private static String searchByAllParams(TypeDeProduit type, String query, ArrayList<Produit> produits) {
        String res;
        ArrayList<Produit> filteredArray = produits.stream().filter((Produit produit) -> {
            Menu menu = produit.getMenu();
            if (menu != null) {
                return type == TypeDeProduit.MENU && menu.toString().toLowerCase().contains(query.toLowerCase());
            }
            return produit.getProduct().getType() == type &&
                    produit.getProduct().getNomDescription().toLowerCase().contains(query.toLowerCase());

        }).collect(Collectors.toCollection(ArrayList::new));
        res = JsonConverter.convertObjectToJson(filteredArray);
        return res;
    }

    public NourrituresMenusDTO getAllProductsById(HttpServletRequest request) throws ParserConfigurationException,
            SAXException, IOException {
        String ids = request.getParameter("ids");
        List<String> idsList = Utils.getListFromString(ids);
        System.out.println(idsList);
        List<Produit> allProducts = getAllProducts();
        List<Menu> menusWanted = new ArrayList<>();
        List<Nourriture> nourrituresWanted = new ArrayList<>();
        allProducts.forEach(produit -> {
            Menu menu = produit.getMenu();
            if (menu != null) {
                if (ids.contains(menu.getId())) {
                    menusWanted.add(menu);
                }
            } else {
                Nourriture nourriture = produit.getProduct();
                if (ids.contains(nourriture.getId())) {
                    nourrituresWanted.add(nourriture);
                }
            }
        });

		return new NourrituresMenusDTO(menusWanted, nourrituresWanted);
	}

    /**
     * @param produits : La liste de tous les produits
     * @param id       : L'id du produit recherché
     * @return : Le produit dont l'id correspond à celui passé en paramètre.
     */
    private Produit getProductById(List<Produit> produits, String id) {
        Produit prod = null;
        ArrayList<Produit> filteredArray = produits.stream().filter((Produit produit) -> {
            Menu menu = produit.getMenu();
            if (menu != null) {
                return menu.getId().equals(id);
            } else {
                return produit.getProduct().getId().equals(id);
            }

        }).collect(Collectors.toCollection(ArrayList::new));
        if (filteredArray.size() != 0) {
            prod = filteredArray.get(0);
        }
        System.out.println(prod);
        return prod;
    }


    /**
     * R
     *
     * @param request : La requête passé par le front
     * @return : Le produit d'id correspondant à celui passé en paramètre.
     * @throws ParserConfigurationException
     * @throws SAXException
     * @throws IOException
     */
    public Produit getElem(HttpServletRequest request) throws ParserConfigurationException, SAXException, IOException {
        ArrayList<Produit> produits = getAllProducts();
        String id = request.getParameter("id");
        Produit prod = getProductById(produits, id);
        return prod;
    }

    /**
     * @param request : Requête envoyé par le front
     * @return : Les 5 ids des produits les plus commandés du type demandé dans la requête avec le produit dont l'id est passé
     *  en paramètre
     */
    public List<String> getProductIdByOtherProduct(HttpServletRequest request) {
        List<String> ids;
        String id = request.getParameter("id");
        System.out.println(DBProductType.Menu);
        System.out.println(request.getParameter("type_recherche"));
        DBProductType typeRecherche = DBProductType.valueOf(request.getParameter("type_recherche").trim());
        DBProductType typeDonne = DBProductType.valueOf(request.getParameter("type_donne"));
        String query = getQuery(id, typeRecherche, typeDonne);
        ResultSet res;
        res = Controller.getResultSet(query);
        ids = getAllsProductIds(res);
        return ids;
    }

    /**
     *  Fonction qui retourne la liste des 5 ids des produits les plus commandés par rapport à un autre produit à partir du résulset.
     * @param res : Le résulset
     * @return : la liste des ids
     */
    private List<String> getAllsProductIds(ResultSet res) {
        List<String> idsFilm = new ArrayList<>();
        try {
            while (res.next()) {
                idsFilm.add(res.getString("produit_id"));
            }
            res.close();
        } catch (SQLException e) {
            e.printStackTrace();
            ;
        }
        return idsFilm;
    }

    /**
     * Fonction qui va renvoyé la requête permettant de trouver les 5 produits du type donné les plus commandes
     * avec  le produit dont l'id est passé en paramètre
     * @param idFood : L'id du produit
     * @param typeRecherche : le type des produits recherché
     * @param typeDonne : le type de l'id du produit passé
     * @return : la requête sql.
     */
    private String getQuery(String idFood, DBProductType typeRecherche, DBProductType typeDonne) {
        String query;
        String subQuery;


        subQuery = "SELECT commande_id";
        subQuery += " FROM produitCommande";
        subQuery += " WHERE produit_id = " + "'" + idFood + "'";
        subQuery += " AND type_produit = " + "'" + typeDonne.toString() + "'";
        System.out.println(subQuery);

        query = "SELECT produit_id, sum(nb_commande) as nbs FROM produitCommande";
        if (typeRecherche == DBProductType.All) {
            query += " WHERE type_produit <> " + "'" + typeDonne.toString() + "'";
        } else {
            query += " WHERE type_produit = " + "'" + typeRecherche.toString() + "'";
        }
        query += " AND commande_id IN  ( " + subQuery + " ) ";
        query += " group by produit_id";
        query += " order by nbs desc";
        query += " LIMIT 5";

        System.out.println(query);

        return query;
    }

    /**
     * Fonction qui récupère la note de moyenne d'un produit dans les informations
     * sont passé dans la request
     * @param request
     * @return la note moyenne
     */
	public static double getAverageRating (HttpServletRequest request) {
		double average;
		String idProduit = request.getParameter("produit_id");
		String typeProduit = request.getParameter("type_produit");
		average = averageRating(idProduit, typeProduit);
		return average;
	}


    /**
     * Retourne la note moyenne d'un produit dont l'id et le type sont passé en paramètre en appelant la fonction
     * mysql averageRating
     * @param idProduit
     * @param typeProduit
     * @return : La note moyenne.
     */
	public static double averageRating (String idProduit, String typeProduit) {

        CallableStatement cstmt = null;
        System.out.println("IdProduit : " + idProduit + " Type Produit : " + typeProduit);
        double average = 0;
        try {
            int i = 1;
            cstmt = Connection.conn.prepareCall("{? = call averageRating(?,?)}");
            cstmt.registerOutParameter(i++, Types.DOUBLE);
            cstmt.setString(i++, idProduit);
            cstmt.setString(i, typeProduit);
            cstmt.execute();
            average = cstmt.getDouble(1);
            cstmt.close();
            Connection.commit();
        } catch (SQLException e) {
            e.printStackTrace();

        }
        return average;

    }

    /**
     * Fonction qui va récupéré la review d'un produit pour une commande donnée
     * @param request
     * @return Un review DTO
     */
	public ReviewDTO getReview (HttpServletRequest request) {
		ReviewDTO reviewDTO = null;
		try {
			ResultSet res;
			int idCommande = Integer.parseInt(request.getParameter("commande_id"));
			String idProduit = request.getParameter("produit_id");
			String typeProduit = request.getParameter("type_produit");
			String query = getQueryReview(idCommande, idProduit, typeProduit);
			res = Controller.getResultSet(query);
			res.first();
			reviewDTO = getReviewDTO(res);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return reviewDTO;
	}

    /**
     * Fonction qui transforme le résultat du ResultSet en un reviewDTO
     * @param res
     * @return
     */
	private ReviewDTO getReviewDTO (ResultSet res) {
		ReviewDTO reviewDTO = null;
		Double note;
		String review;

		try {
			note = res.getDouble("note");
			review = res.getString("review");
			reviewDTO = new ReviewDTO(note, review);
			System.out.println(reviewDTO);

		} catch (SQLException e) {
			e.printStackTrace();

		}
		return reviewDTO;
	}

    /**
     * Fonction qui va retourner la string de la requête sql pour obtenir les informations d'une review d'un produit
     * @param idCommande
     * @param idProduit
     * @param typeProduit
     * @return
     */
	private String getQueryReview (int idCommande, String idProduit, String typeProduit) {
		String query;
		query = "SELECT note, review FROM produitCommande";
		query += " WHERE type_produit = " + "'" + typeProduit + "'";
		query += " AND commande_id  = " + idCommande;
		query += " AND produit_id  = " + "'" + idProduit + "'";
		System.out.println(query);
		return query;
	}

    /**
     * Fonction qui permet d'ajouter la review passé en paramètre dans la request dans la bdd
     * @param request
     * @return : Vrai si ça a réussi, faux sinon.
     */
	public boolean addReview (HttpServletRequest request) {
		int idCommande = Integer.parseInt(request.getParameter("commande_id"));
		String idProduit = request.getParameter("produit_id");
		String typeProduit = request.getParameter("type_produit");
		double note = Double.parseDouble(request.getParameter("note"));
		String review = request.getParameter("review");

		String query = "UPDATE produitCommande SET ";
		query += " note = " + note + " , ";
		query += " review = " + "'" + review + "'";
		query += " WHERE produit_id = " + "'" + idProduit + "'";
		query += " AND commande_id = " + idCommande;
		query += " AND type_produit = " + "'" + typeProduit + "'";
		System.out.println(query);

		try {
			Connection.conn.createStatement().executeUpdate(query);
			Connection.commit();
			return true;
		} catch (SQLException e) {
			e.printStackTrace();
			return false;
		}
	}

    /**
     * Fonction qui va delete la review passé dans la request
     * @param request
     * @return : Vrai si ça a réussi, faux sinon.
     */
	public boolean deleteReview (HttpServletRequest request) {
		int idCommande = Integer.parseInt(request.getParameter("commande_id"));
		String idProduit = request.getParameter("produit_id");
		String typeProduit = request.getParameter("type_produit");
		try {
			Connection.conn.createStatement().executeUpdate(
					"DELETE FROM produitCommande WHERE produit_id = " + idProduit + " AND type_produit = " +
							typeProduit + " AND commande_id = " + idCommande);
			Connection.commit();
			return true;
		} catch (SQLException e) {
			e.printStackTrace();
			return false;
		}
	}

    /**
     * Fonction qui va renvoyé toutes les review d'un produit plus le client qui a fait la review, un client peut
     * faire plusieurs review sur un même produit.
     * @param request
     * @return Une liste d'UserReviewDTO
     */
	public List<UserReviewDTO> getAllReviewOfProduct (HttpServletRequest request) {
		List<UserReviewDTO> userReviewDTOS;
		ResultSet res;
		String idProduit = request.getParameter("produit_id");
		String typeProduit = request.getParameter("type_produit");
		String query = getUserReviewQuery(idProduit, typeProduit);
		res = Controller.getResultSet(query);
		userReviewDTOS = getUserReviewDTOArray(res);
		return userReviewDTOS;
	}

    /**
     * Fonction qui transforme le résultat d'un ResulSet en une liste d'UserReviewDTO
     * @param res
     * @return : La liste d'UserReviewDTO
     */
	private List<UserReviewDTO> getUserReviewDTOArray (ResultSet res) {
		List<UserReviewDTO> userReviewDTOS = new ArrayList<>();
		try {
			while (res.next()) {
				System.out.println("ici");
				UserReviewDTO userReviewDTO = getUserReviewDTO(res);
				boolean added = false;
				for (UserReviewDTO userReview : userReviewDTOS) {
					if (userReview.getClient().getClientId() == userReviewDTO.getClient().getClientId()) {
						userReview.getReviews().add(userReviewDTO.getReviews().get(0));
						added = true;
					}
				}

				if (!added) {
					userReviewDTOS.add(userReviewDTO);
				}

			}
		} catch (SQLException e) {
			e.printStackTrace();
		}

		return userReviewDTOS;
	}

    /**
     *  Fonction qui transforme le résultat du Resulset en un UserReviewDTO
     * @param res
     * @return : UserReviewDTO.
     */
	private UserReviewDTO getUserReviewDTO (ResultSet res) {
		UserReviewDTO userReviewDTO;
		Client client = new ClientController().serialize(res);
		List<ReviewDTO> reviewDTOS = getReviewDTOArray(res);
		userReviewDTO = new UserReviewDTO(client, reviewDTOS);
		return userReviewDTO;
	}

    /**
     * Fonction qui renvoie la string de la requête  pour obtenir toutes les infomations utiles pour faire un
     * UserReviewDTO.
     * @param idProduit
     * @param typeProduit
     * @return Sreinf
     */
	private String getUserReviewQuery (String idProduit, String typeProduit) {
		String query;
		query = "SELECT * FROM produitCommande";
		query += " NATURAL JOIN commande ";
		query += " NATURAL JOIN client ";
		query += " WHERE type_produit = " + "'" + typeProduit + "'";
		query += " AND produit_id  = " + "'" + idProduit + "'";
		query += " AND note is NOT NULL ";
		System.out.println(query);
		return query;
	}

    /**
     * Comme un client peut donner plusieurs fois un avis sur le même produit, on  récupère tous ses avis et on les
     * renvoies
     * @param res
     * @return
     */
	private List<ReviewDTO> getReviewDTOArray (ResultSet res) {
		List<ReviewDTO> reviewDTOS = new ArrayList<>();
		reviewDTOS.add(getReviewDTO(res));
		return reviewDTOS;

	}
}

