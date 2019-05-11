package servlets.Client;


import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
import java.io.File;
import java.io.IOException;

public class PostClientPhoto extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/***** This Method Is Called By The Servlet Container To Process A 'POST' Request *****/
	public void doPost (HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		handleRequest(request, response);
	}

	public void handleRequest (HttpServletRequest request, HttpServletResponse response) throws ServletException,
	                                                                                            IOException {

		/***** Get The Absolute Path Of The Web Application *****/
		String uid = request.getParameter("uid");
		String path = "photo";
		if (uid == null) {
			response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
			return;
		}


		for (Part part : request.getParts()) {
			System.out.println();
			part.write(uid);
			System.out.println("oui");
		}
		path += "/" + uid;
		response.setHeader("path", path);
	}

}
