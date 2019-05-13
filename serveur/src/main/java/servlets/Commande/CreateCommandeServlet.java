package servlets.Commande;


import controllers.CommandeController;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class CreateCommandeServlet extends HttpServlet {


    /**
     * Servlet qui va faire le lien entre le front et le back pour la création d'une commande
     * @param request Le servlet de la requête envoyé par le front
     * @param response Le servlet qui va permettre au back de répondre.
     * @throws ServletException
     * @throws IOException
     */
    private static final long serialVersionUID = 1L;
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
        boolean res;
        CommandeController controller = new CommandeController();
        response.setContentType("text/plain");
        res = controller.create(request);
        if (res)
        {
            response.setStatus(HttpServletResponse.SC_OK);
        } else {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
        }
        response.getWriter().println(res);
    }


}
