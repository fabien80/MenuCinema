package servlets.Produit;

import controllers.ProduitController;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class DeleteReviewServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
        boolean res;
        ProduitController controller = new ProduitController();
        response.setContentType("text/plain");
        res = controller.deleteReview(request);
        if (res)
        {
            response.setStatus(HttpServletResponse.SC_OK);
        } else {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
        }
        response.getWriter().println(res);
    }
}
