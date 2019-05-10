import javax.servlet.http.HttpServlet;

import services.Connection;
import servlets.BlockingServlet;
import servlets.Client.*;
import servlets.ClientAuthentificationServlet;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.ServerConnector;
import org.eclipse.jetty.server.Connector;
import org.eclipse.jetty.servlet.ServletHandler;
import org.eclipse.jetty.util.thread.QueuedThreadPool;
import servlets.Commande.CreateCommandeServlet;
import servlets.Commande.GetCommandeServlet;
import servlets.Commande.GetCommandesServlet;
import servlets.Commande.GetOrderHistoryServlet;
import servlets.GetParametersServlet;
import servlets.Produit.GetProductByOtherProductServlet;
import servlets.Produit.GetProduitServlet;
import servlets.Produit.GetProduitsByIdsServlet;
import servlets.Produit.SearchProduitServlet;


public class PizzaServer extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private Server server;

    void start() throws Exception {
        int maxThreads = 100;
        int minThreads = 10;
        int idleTimeout = 120;

        QueuedThreadPool threadPool = new QueuedThreadPool(maxThreads, minThreads, idleTimeout);

        server = new Server(threadPool);
        ServerConnector connector = new ServerConnector(server);
        connector.setPort(8090);
        server.setConnectors(new Connector[]{connector});

        ServletHandler servletHandler = new ServletHandler();
        server.setHandler(servletHandler);

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
        server.start();
    }

    void stop() throws Exception {
        System.out.println("Server stop");
        server.stop();
    }

    public static void main(String[] args) throws Exception {
        PizzaServer server = new PizzaServer();

        server.start();
    }

}
