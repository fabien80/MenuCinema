package servlets.Produit;

import controllers.ProduitController;
import models.Produit;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.parsers.ParserConfigurationException;
import java.io.IOException;

import org.xml.sax.SAXException;
import services.JsonConverter;

public class GetProduitServlet extends HttpServlet {
    private static final long servialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            String res;
            ProduitController controller = new ProduitController();
            response.setContentType("application/json");
            Produit client = controller.getElem(request);
            res = JsonConverter.convertObjectToJson(client);
            response.setStatus(HttpServletResponse.SC_OK);
            response.getWriter().println(res);
        } catch (
                ParserConfigurationException e) {
            e.printStackTrace();
        } catch (
                SAXException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
