package servlets.Produit;

import controllers.CommandeController;
import controllers.ProduitController;
import models.Commande;
import models.Produit;
import services.JsonConverter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;

public class GetProductByOtherProductServlet extends HttpServlet {
	private static final long servialVersionUID = 1L;

	@Override
	protected void doGet (HttpServletRequest request, HttpServletResponse response) throws ServletException,
	                                                                                       IOException {
		ProduitController controller = new ProduitController();
		response.setContentType("application/json");
		ArrayList<String> ids = (ArrayList<String>) controller.getProductIdByOtherProduct(request);
		response.setStatus(HttpServletResponse.SC_OK);
		response.getWriter().println(JsonConverter.convertObjectToJson(ids));
	}
}
