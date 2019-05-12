package servlets.Commande;

import controllers.CommandeController;
import models.Commande;
import services.JsonConverter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;

public class GetOrderHistoryServlet extends HttpServlet {
    private static final long servialVersionUID = 1L;


    /**
     * Servlet qui va faire le lien entre le front et le back pour récupérer l'historique de commandes du client
     * dont l'id passé en paramètre.
     * @param request : Le servlet de la requête envoyé par le front
     * @param response : Le servlet qui va permettre au back de répondre.
     * @throws ServletException
     * @throws IOException
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
        CommandeController controller = new CommandeController();
        response.setContentType("application/json");
        StringBuilder res = new StringBuilder("{\n");
        ArrayList<Commande> orders = (ArrayList<Commande>) controller.getOrderHistory(request);
        orders.forEach((commande -> res.append(JsonConverter.convertObjectToJson(commande) + ",\n")));
        res.append("}");
        response.setStatus(HttpServletResponse.SC_OK);
        response.getWriter().println(res.toString());
    }
}
