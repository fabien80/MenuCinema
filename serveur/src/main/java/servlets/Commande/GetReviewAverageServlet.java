package servlets.Commande;

import controllers.CommandeController;
import controllers.ProduitController;
import services.JsonConverter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class GetReviewAverageServlet extends HttpServlet {
	private static final long servialVersionUID = 1L;

	@Override
	protected void doGet (HttpServletRequest request, HttpServletResponse response) throws ServletException,
	                                                                                       IOException {
		CommandeController controller = new CommandeController();
		response.setContentType("application/json");
		Double res = ProduitController.getReviewAverage(request);
		response.setStatus(HttpServletResponse.SC_OK);
		response.getWriter().println(JsonConverter.convertObjectToJson(res));
	}


}
