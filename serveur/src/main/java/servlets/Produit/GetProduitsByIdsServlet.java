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
            StringBuilder resMenu = new StringBuilder("");
            StringBuilder resProduct = new StringBuilder("");
            ArrayList<Produit> produits = (ArrayList<Produit>) controller.getAllProductsById(request);


            for(int i =0; i< produits.size() ; ++i){
                if (produits.get(i).getMenu() != null){

                    if (!resMenu.toString().equals("")){// not first time
                        resMenu.append(",");
                    }
                    resMenu.append( JsonConverter.convertObjectToJson(produits.get(i).getMenu()) );
                }
                if (produits.get(i).getProduct() != null){
                    if (!resProduct.toString().equals("")){// not first time
                        resProduct.append(",");
                    }
                    resProduct.append( JsonConverter.convertObjectToJson(produits.get(i).getProduct()) );
                }
            }


            String res = "{\n" +
                    "\"product\":[\n" + resProduct +"],\n" +
                    "\"menu\":[\n" + resMenu + "]" +
                    "}";
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
