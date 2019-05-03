package controllers;

import services.Connection;

import javax.servlet.http.HttpServletRequest;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public abstract class Controller<T>
{
    protected abstract T serialize(ResultSet result);

    protected abstract String getCreateString(HttpServletRequest request);

    public boolean create(HttpServletRequest request)
    {
        return Connection.create(getCreateString(request));
    }

    public List<T> get(String tableName)
    {
        List<T> list = new ArrayList<>();

        try
        {
            ResultSet result =
                    Connection.conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY)
                            .executeQuery("SELECT * FROM " + tableName + ";");
            while (result.next())
            {
                list.add(serialize(result));
            }
        } catch (SQLException e)
        {
            e.printStackTrace();
        }
        return list;
    }

    public T getElem(String tableName, HttpServletRequest request)
    {
        T elem = null;
        String id = request.getParameter("id");

        try
        {
            ResultSet result =
                    Connection.conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY)
                            .executeQuery("SELECT * from " + tableName + " WHERE " + tableName + "_id =" + id);

            if (result.first())
            {
                elem = serialize(result);
            }
            result.close();
        } catch (SQLException e)
        {
            e.printStackTrace();
        }
        return elem;
    }

    protected abstract String getUpdateString(HttpServletRequest request);

    public boolean update(HttpServletRequest request)
    {
        try
        {
            Connection.update(getUpdateString(request));
            return true;
        } catch (Exception e)
        {
            e.printStackTrace();
            return false;
        }
    }

    public boolean delete(String tableName, HttpServletRequest request)
    {
        String id = request.getParameter("id");
        try
        {
            Connection.conn.createStatement().executeUpdate("DELETE FROM " + tableName + " WHERE " + tableName + "_id=" + id);
            Connection.commit();
            return true;
        } catch (SQLException e)
        {
            e.printStackTrace();
            return false;
        }
    }

    protected abstract T requestBodyToClass(HttpServletRequest request);

}
