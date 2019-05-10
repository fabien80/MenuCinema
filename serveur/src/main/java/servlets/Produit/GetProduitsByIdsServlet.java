package servlets.Produit;

import controllers.ProduitController;
import models.Produit;
import org.xml.sax.SAXException;
import services.JsonConverter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.parsers.ParserConfigurationException;
import java.io.IOException;
import java.util.ArrayList;

public class GetProduitsByIdsServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            ProduitController controller = new ProduitController();
            response.setContentType("application/json");
            StringBuilder res = new StringBuilder("{\n");
            ArrayList<Produit> produits = (ArrayList<Produit>) controller.getAllProductsById(request);
            produits.forEach((produit -> res.append(JsonConverter.convertObjectToJson(produit) + ",\n")));
            res.append("}");
            response.setStatus(HttpServletResponse.SC_OK);
            response.getWriter().println(res.toString());
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
