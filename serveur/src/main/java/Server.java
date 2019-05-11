import javax.servlet.MultipartConfigElement;
import javax.servlet.http.HttpServlet;

import handlers.MultipartConfigInjectionHandler;
import org.eclipse.jetty.server.Handler;
import org.eclipse.jetty.server.handler.HandlerCollection;
import org.eclipse.jetty.server.handler.HandlerList;
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
import servlets.Produit.GetProductByOtherProductServlet;
import servlets.Produit.GetProduitServlet;
import servlets.Produit.GetProduitsByIdsServlet;
import servlets.Produit.SearchProduitServlet;

import java.io.File;


public class Server extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static final int maxThreads = 100;
	private static final int minThreads = 10;
	private static final int idleTimeout = 120;
	private static final String fileUploadPath = "/ressources/photo";

	private org.eclipse.jetty.server.Server server;

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

		servletHandler.addServletWithMapping(BlockingServlet.class, "/status");
		servletHandler.addServletWithMapping(ClientAuthentificationServlet.class, "/api/authentification");
		servletHandler.addServletWithMapping(GetClientsServlet.class, "/clients");
		servletHandler.addServletWithMapping(GetClientServlet.class, "/client");
		servletHandler.addServletWithMapping(DeleteClientServlet.class, "/deleteClient");
		servletHandler.addServletWithMapping(CreateClientServlet.class, "/addClient");
		servletHandler.addServletWithMapping(EditClientServlet.class, "/updateClient");
		servletHandler.addServletWithMapping(GetParametersServlet.class, "/parameters");
		servletHandler.addServletWithMapping(CreateCommandeServlet.class, "/addCommande");
		servletHandler.addServletWithMapping(GetCommandeServlet.class, "/commande");
		servletHandler.addServletWithMapping(GetCommandesServlet.class, "/commandes");
		servletHandler.addServletWithMapping(GetOrderHistoryServlet.class, "/orderHistory");
		servletHandler.addServletWithMapping(SearchProduitServlet.class, "/search/product");
		servletHandler.addServletWithMapping(GetProductByOtherProductServlet.class, "/filmsByFood");
		servletHandler.addServletWithMapping(GetProduitServlet.class, "/produit");
		servletHandler.addServletWithMapping(GetProduitsByIdsServlet.class, "/produitsIds");
		servletHandler.addServletWithMapping(PostClientPhoto.class, "/uploadPhoto");
		servletHandler.addServletWithMapping(GetReviewAverageServlet.class, "/reviewAverage");
		server.start();
		// server.join();
	}

	void stop () throws Exception {
		System.out.println("Server stop");
		server.stop();
	}

	public static void main (String[] args) throws Exception {
		Server server = new Server();

		server.start();
	}

}
