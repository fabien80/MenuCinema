package servlets.Client;

import controllers.ClientController;
import models.Client;
import services.JsonConverter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class GetClientServlet extends HttpServlet
{
    private static final long servialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
        String res;
        ClientController controller = new ClientController();
        response.setContentType("application/json");
        Client client = controller.getElem("client", request);
        res = JsonConverter.convertObjectToJson(client);
        response.setStatus(HttpServletResponse.SC_OK);
        response.getWriter().println(res);
    }
}
