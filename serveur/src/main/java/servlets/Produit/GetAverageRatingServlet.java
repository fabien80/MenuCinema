package servlets.Produit;

import controllers.CommandeController;
import controllers.ProduitController;
import services.JsonConverter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class GetAverageRatingServlet extends HttpServlet {
	private static final long servialVersionUID = 1L;

	/**
	 * Servlet qui va faire le lien entre le front et le back pour la note moyenne d'un produit.
	 * @param request Le servlet de la requête envoyé par le front
	 * @param response Le servlet qui va permettre au back de répondre.
	 * @throws ServletException
	 * @throws IOException
	 */
	@Override
	protected void doGet (HttpServletRequest request, HttpServletResponse response) throws ServletException,
	                                                                                       IOException {
		CommandeController controller = new CommandeController();
		response.setContentType("application/json");
		Double res = ProduitController.getAverageRating(request);
		response.setStatus(HttpServletResponse.SC_OK);
		response.getWriter().println(JsonConverter.convertObjectToJson(res));
	}


}
