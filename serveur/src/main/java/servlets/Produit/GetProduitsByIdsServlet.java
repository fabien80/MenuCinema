package servlets.Produit;

import controllers.ProduitController;
import dto.NourrituresMenusDTO;
import models.Produit;
import org.xml.sax.SAXException;
import services.JsonConverter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.parsers.ParserConfigurationException;
import java.io.IOException;
import java.util.ArrayList;

public class GetProduitsByIdsServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet (HttpServletRequest request, HttpServletResponse response) throws ServletException,
	                                                                                       IOException {
		try {
			ProduitController controller = new ProduitController();
			response.setContentType("application/json");
			NourrituresMenusDTO produits = controller.getAllProductsById(request);
			String produitsJson = JsonConverter.convertObjectToJson(produits);
			System.out.println(produitsJson);
			response.setStatus(HttpServletResponse.SC_OK);
			response.getWriter().println(produitsJson);
		} catch (ParserConfigurationException e) {
			e.printStackTrace();
		} catch (SAXException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
