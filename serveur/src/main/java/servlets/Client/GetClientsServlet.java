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

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
        ClientController controller = new ClientController();
        response.setContentType("application/json");
        StringBuilder res = new StringBuilder("{\n");
        ArrayList<Client> clients = (ArrayList<Client>) controller.get("client");
        clients.forEach((client -> res.append(JsonConverter.convertObjectToJson(client) + ",\n")));
        res.append("}");
        response.setStatus(HttpServletResponse.SC_OK);
        response.getWriter().println(res.toString());
    }
}
