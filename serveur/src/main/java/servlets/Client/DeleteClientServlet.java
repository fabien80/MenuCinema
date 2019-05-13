package servlets.Client;

import controllers.ClientController;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class DeleteClientServlet extends HttpServlet
{
    private static final long serialVersionUID = 1L;


    /**
     * Servlet qui va faire le lien entre le front et le back pour la suppression d'un client
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    @Override
    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
        boolean res;
        ClientController controller = new ClientController();
        response.setContentType("text/plain");
        res = controller.delete("client", request);
        if (res)
        {
            response.setStatus(HttpServletResponse.SC_OK);
        } else {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
        }
        response.getWriter().println(res);
    }
}
