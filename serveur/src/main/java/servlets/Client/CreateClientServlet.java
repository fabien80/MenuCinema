package servlets.Client;

        import controllers.ClientController;

        import javax.servlet.ServletException;
        import javax.servlet.http.HttpServlet;
        import javax.servlet.http.HttpServletRequest;
        import javax.servlet.http.HttpServletResponse;
        import java.io.IOException;

public class CreateClientServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * Servlet qui va faire le lien entre le front et le back pour la création d'un client
	 * @param request : Le servlet de la requête envoyé par le front
	 * @param response : Le servlet qui va permettre au back de répondre.
	 * @throws ServletException
	 * @throws IOException
	 */
	@Override
	protected void doPost (HttpServletRequest request, HttpServletResponse response) throws ServletException,
	                                                                                        IOException {
		boolean res;
		ClientController controller = new ClientController();
		response.setContentType("text/plain");
		res = controller.create(request);
		if (res) {
			response.setStatus(HttpServletResponse.SC_OK);
		} else {
			response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
		}
		response.getWriter().println(res);
	}
}
