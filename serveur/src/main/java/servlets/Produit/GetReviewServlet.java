package servlets.Produit;

import controllers.ProduitController;
import dto.ReviewDTO;
import models.Commande;
import services.JsonConverter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;

public class GetReviewServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
        ProduitController controller = new ProduitController();
        response.setContentType("application/json");
        ReviewDTO reviewDTO = controller.getReview(request);
        response.setStatus(HttpServletResponse.SC_OK);
        response.getWriter().println(JsonConverter.convertObjectToJson(reviewDTO));
    }
}
