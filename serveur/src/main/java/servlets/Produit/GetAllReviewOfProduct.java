package servlets.Produit;

import controllers.ProduitController;
import dto.ReviewDTO;
import dto.UserReviewDTO;
import services.JsonConverter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

public class GetAllReviewOfProduct extends HttpServlet {

	@Override
	protected void doGet (HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		ProduitController controller = new ProduitController();
		resp.setContentType("application/json");
		List<UserReviewDTO> userReviewDTOS = controller.getAllReviewOfProduct(req);
		resp.setStatus(HttpServletResponse.SC_OK);
		resp.getWriter().println(JsonConverter.convertObjectToJson(userReviewDTOS));
	}
}
