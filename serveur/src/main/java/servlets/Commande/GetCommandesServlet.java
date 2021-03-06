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

public class GetCommandesServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    /**
     * Servlet qui va faire le lien entre le front et le back pour récupérer l'ensemble des commandes.
     * @param request Le servlet de la requête envoyé par le front
     * @param response Le servlet qui va permettre au back de répondre.
     * @throws ServletException
     * @throws IOException
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
        CommandeController controller = new CommandeController();
        response.setContentType("application/json");
        StringBuilder res = new StringBuilder("{\n");
        ArrayList<Commande> commandes = (ArrayList<Commande>) controller.get("commande");
        commandes.forEach((commande -> res.append(JsonConverter.convertObjectToJson(commandes) + ",\n")));
        res.append("}");
        response.setStatus(HttpServletResponse.SC_OK);
        response.getWriter().println(res.toString());
    }
}
