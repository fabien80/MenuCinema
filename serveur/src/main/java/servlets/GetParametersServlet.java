package servlets;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;

public class GetParametersServlet extends HttpServlet
{
    private static final long serialVersionUID = 1L;

    public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException
    {
        String parNames;
        PrintWriter out = res.getWriter();
        res.setContentType("text/plain");
        Enumeration paramNames = req.getParameterNames();
        while (paramNames.hasMoreElements())
        {
            parNames = (String) paramNames.nextElement();
        }

    }

    public void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException
    {
        doGet(req, res);
    }
}
