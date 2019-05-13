import javax.servlet.MultipartConfigElement;
import javax.servlet.http.HttpServlet;

import handlers.MultipartConfigInjectionHandler;
import org.eclipse.jetty.server.handler.HandlerCollection;
import org.eclipse.jetty.server.handler.ResourceHandler;
import org.eclipse.jetty.servlet.ServletContextHandler;
import services.Connection;
import servlets.BlockingServlet;
import servlets.Client.*;
import servlets.ClientAuthentificationServlet;
import org.eclipse.jetty.server.ServerConnector;
import org.eclipse.jetty.server.Connector;
import org.eclipse.jetty.servlet.ServletHandler;
import org.eclipse.jetty.util.thread.QueuedThreadPool;
import servlets.Commande.*;
import servlets.GetParametersServlet;
import servlets.Produit.*;

import java.io.File;


public class Server extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static final int maxThreads = 100;
	private static final int minThreads = 10;
	private static final int idleTimeout = 120;
	private static final String fileUploadPath = "/ressources/photo";
	private static final String apiDefaultPath = "/api";

	private org.eclipse.jetty.server.Server server;

	/**
	 * Fonction main du serveur.
	 * @throws Exception
	 */
	void start () throws Exception {

		QueuedThreadPool threadPool = new QueuedThreadPool(maxThreads, minThreads, idleTimeout);

		server = new org.eclipse.jetty.server.Server(threadPool);
		ServerConnector connector = new ServerConnector(server);
		connector.setPort(8090);
		connector.setHost("localhost");
		server.setConnectors(new Connector[]{connector});


		ServletHandler servletHandler = new ServletHandler();

		ResourceHandler resourceHandler = new ResourceHandler();
		resourceHandler.setDirectoriesListed(true);
		resourceHandler.setWelcomeFiles(new String[]{"index.html"});

		resourceHandler.setResourceBase("./ressources");

		ServletContextHandler context = new ServletContextHandler(ServletContextHandler.SESSIONS);
		context.setContextPath("/");

		String path = new File(".").getCanonicalPath();
		path += fileUploadPath;
		MultipartConfigInjectionHandler.MULTI_PART_CONFIG = new MultipartConfigElement(path);
		MultipartConfigInjectionHandler multipartConfigInjectionHandler = new MultipartConfigInjectionHandler();

		HandlerCollection handlerCollection = new HandlerCollection();
		handlerCollection.addHandler(multipartConfigInjectionHandler);
		handlerCollection.addHandler(resourceHandler);
		handlerCollection.addHandler(servletHandler);
		handlerCollection.addHandler(context);
		server.setHandler(handlerCollection);

		Connection.init();

		// La liste de tous les endpoints
		servletHandler.addServletWithMapping(BlockingServlet.class, apiDefaultPath + "/status");
		servletHandler.addServletWithMapping(ClientAuthentificationServlet.class, apiDefaultPath + "/authentification");
		servletHandler.addServletWithMapping(GetClientsServlet.class, apiDefaultPath + "/clients");
		servletHandler.addServletWithMapping(GetClientServlet.class, apiDefaultPath + "/client");
		servletHandler.addServletWithMapping(DeleteClientServlet.class, apiDefaultPath + "/deleteClient");
		servletHandler.addServletWithMapping(CreateClientServlet.class, apiDefaultPath + "/addClient");
		servletHandler.addServletWithMapping(EditClientServlet.class, apiDefaultPath + "/updateClient");
		servletHandler.addServletWithMapping(GetParametersServlet.class, apiDefaultPath + "/parameters");
		servletHandler.addServletWithMapping(CreateCommandeServlet.class, apiDefaultPath + "/addCommande");
		servletHandler.addServletWithMapping(GetCommandeServlet.class, apiDefaultPath + "/commande");
		servletHandler.addServletWithMapping(GetCommandesServlet.class, apiDefaultPath + "/commandes");
		servletHandler.addServletWithMapping(GetOrderHistoryServlet.class, apiDefaultPath + "/orderHistory");
		servletHandler.addServletWithMapping(SearchProduitServlet.class, apiDefaultPath + "/search/product");
		servletHandler.addServletWithMapping(GetProductByOtherProductServlet.class, apiDefaultPath + "/recommandation");
		servletHandler.addServletWithMapping(GetProduitServlet.class, apiDefaultPath + "/produit");
		servletHandler.addServletWithMapping(GetProduitsByIdsServlet.class, apiDefaultPath + "/produitsIds");
		servletHandler.addServletWithMapping(PostClientPhoto.class, apiDefaultPath + "/uploadPhoto");
		servletHandler.addServletWithMapping(GetAverageRatingServlet.class, apiDefaultPath + "/averageRating");
		servletHandler.addServletWithMapping(AddReviewServlet.class, apiDefaultPath + "/addReview");
		servletHandler.addServletWithMapping(GetReviewServlet.class, apiDefaultPath + "/review");
		servletHandler.addServletWithMapping(GetAllReviewOfProduct.class, apiDefaultPath + "/reviewsOfProduct");
		server.start();
		// server.join();
	}

	/**
	 * Fonction qui arrête le serveur
	 * @throws Exception
	 */
	void stop () throws Exception {
		System.out.println("Server stop");
		server.stop();
	}

	/**
	 * Fonction main.
	 * @param args
	 * @throws Exception
	 */
	public static void main (String[] args) throws Exception {
		Server server = new Server();

		server.start();
	}

}
