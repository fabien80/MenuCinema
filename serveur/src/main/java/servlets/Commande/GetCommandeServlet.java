package servlets.Commande;

import controllers.CommandeController;
import models.Commande;
import services.JsonConverter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class GetCommandeServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String res;
        CommandeController controller = new CommandeController();
        response.setContentType("application/json");
        Commande cmd = controller.getElem("commande", request);
        res = JsonConverter.convertObjectToJson(cmd);
        response.setStatus(HttpServletResponse.SC_OK);
        response.getWriter().println(res);
    }

}