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

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
        CommandeController controller = new CommandeController();
        response.setContentType("application/json");
        StringBuilder res = new StringBuilder("[\n");
        ArrayList<Commande> orders = (ArrayList<Commande>) controller.getOrderHistory(request);
        for(int i =0; i< orders.size() ; ++i){
            res.append( JsonConverter.convertObjectToJson(orders.get(i)) );
            if (i+1 < orders.size()){
                res.append(",");
            }
        }
        res.append("]");
        response.setStatus(HttpServletResponse.SC_OK);
        response.getWriter().println(res.toString());

    }
}
