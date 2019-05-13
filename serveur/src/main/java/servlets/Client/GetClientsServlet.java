package servlets.Client;

import controllers.ClientController;
import models.Client;
import services.JsonConverter;

import javax.inject.Inject;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;

public class GetClientsServlet extends HttpServlet
{
    private static final long serialVersionUID = 1L;


    /**
     * Servlet qui va faire le lien entre le front et le back pour récupéré un client dont l'id est passé en paramètre
     * @param request
     * @param response
     * @throws ServletException
     * @throws IOException
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
        ClientController controller = new ClientController();
        response.setContentType("application/json");
        ArrayList<Client> clients = (ArrayList<Client>) controller.get("client");
        String res = JsonConverter.convertObjectToJson(clients);
        response.setStatus(HttpServletResponse.SC_OK);
        response.getWriter().println(res);
    }
}
