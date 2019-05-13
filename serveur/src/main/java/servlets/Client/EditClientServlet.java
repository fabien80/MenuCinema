package servlets.Client;

import controllers.ClientController;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class EditClientServlet extends HttpServlet
{
    @Override
    /**
     * Servlet qui va faire le lien entre le front et le back pour l'édition d'un client
     * @param request : Le servlet de la requête envoyé par le front
     * @param response : Le servlet qui va permettre au back de répondre.
     * @throws ServletException
     * @throws IOException
     */
    protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
        boolean res;
        ClientController controller = new ClientController();
        response.setContentType("text/plain");
        res = controller.update(request);
        if (res)
        {
            response.setStatus(HttpServletResponse.SC_OK);
        } else {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
        }
        response.getWriter().println(res);
    }
}
