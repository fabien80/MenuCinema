package servlets.Produit;

import controllers.ClientController;
import controllers.ProduitController;
import models.Client;
import org.xml.sax.SAXException;
import services.JsonConverter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.parsers.ParserConfigurationException;
import java.io.IOException;

public class SearchProduitServlet extends HttpServlet {

	@Override
	protected void doGet (HttpServletRequest request, HttpServletResponse response)  {

		try {
			String res;
			ProduitController controller = new ProduitController();
			response.setContentType("application/json");
			res = controller.search(request);
			response.setStatus(HttpServletResponse.SC_OK);
			response.getWriter().println(res);
		} catch (ParserConfigurationException e) {
			e.printStackTrace();
		} catch (SAXException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
