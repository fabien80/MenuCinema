package controllers;

import services.Connection;

import javax.servlet.http.HttpServletRequest;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public abstract class Controller<T>
{
    /**
     * Passe d'un resulSet à un classe T
     *
     * @param result : Un resultSet d'un n-uplet de la table lié au controller de type T
     * @return Un classe T à partir du resultSet
     */
    protected abstract T serialize(ResultSet result);

    /**
     * Permet de creer une requete sous la forme "INSERT Into" a partir du corps d'une requete HTTP
     *
     * @param request La requete http recue
     * @return Une requete SQL Insert
     */
    protected abstract String getCreateString(HttpServletRequest request);

    /**
     * @param request
     * @return
     */
    public boolean create(HttpServletRequest request)
    {
        return Connection.create(getCreateString(request));
    }

    /**
     * Permet de recuperer toutes les lignes d'une table
     *
     * @param tableName le nom de la table voulue
     * @return Une liste des elements creer a partir de la table
     */
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

    /**
     * Permet de recuperer les lignes d'une table a partir d'une requete SQL bien precise
     *
     * @param query la requete SQL
     * @return la liste des elements T correspondants
     */
    public List<T> getList(String query)
    {
        List<T> list = new ArrayList<>();
        try
        {
            ResultSet result =
                    Connection.conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY)
                            .executeQuery(query);
            while (result.next())
            {
                list.add(serialize(result));
            }
            result.close();
        } catch (SQLException e)
        {
            e.printStackTrace();
        }
        return list;
    }

    /**
     * Permet de recuperer un element en fonction de son ID
     *
     * @param tableName le nom de la table de l'element voulu
     * @param request   la requete qui contient l'id de l'element
     * @return T l'objet correspondant a l'element voulu
     */
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

    /**
     * Permet de creer une requete de type "UPDATE table" a partir d'une requete HTTP
     *
     * @param request la requete HTTP concernant les nouvelle information
     * @return la requete sql
     */
    protected abstract String getUpdateString(HttpServletRequest request);

    /**
     * Execute la requete SQL creer avec getUpdateString
     *
     * @param request La requete http passee dans getUpdateString
     * @return un booleen a vrai si l'update s'est bien passe, faux si il s'est mal passe
     */
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

    /**
     * Permet de supprimer un element dans la table a partir de son id
     *
     * @param tableName le nom de la table ou il faut supprimer l'element
     * @param request   la requete contenant l'id de l'element a supprimer
     * @return un booleen a vrai si l'operation s'est bien passee
     */
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

    /**
     * Permet de transformer une requete HTTP en objet T
     *
     * @param request une requete HTTP contenant les informations de l'objet au format url-encoded
     * @return un objet T
     */
    protected abstract T requestBodyToClass(HttpServletRequest request);

    /**
     *
     * @param query : une requête sql
     * @return le résulset obtenu après l'éxécution de la requête passé en paramètre
     */
    public static ResultSet getResultSet(String query)
    {
        {
            ResultSet result = null;
            try
            {
                result = Connection.conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY)
                        .executeQuery(query);


            } catch (SQLException e)
            {
                e.printStackTrace();
            }
            return result;
        }

    }
}
