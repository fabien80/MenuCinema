package services;

import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;

public class Connection
{
    static final String CONN_URL_REMOTE = "jdbc:mysql://l3miageprojetfinal.ci4ctohe4wul.eu-west-3.rds.amazonaws" +
            ".com:3306/projetfinal";
    static final String CONN_URL_LOCAL = "jdbc:mysql://localhost/projetfinal?serverTimezone=UTC";
    static final String CONN_URL = "jdbc:mysql://localhost:3306/projetfinal?serverTimezone=UTC";

    public static java.sql.Connection conn;

    public static void init()
    {
        try
        {

            // Enregistrement du driver Oracle
            System.out.print("Loading Oracle driver... ");
            DriverManager.registerDriver(new com.mysql.jdbc.Driver());
            System.out.println("loaded");

            // Etablissement de la connection
            Properties.init();
            System.out.print("Connecting to the database... ");
            conn = DriverManager.getConnection(CONN_URL_LOCAL, Properties.user, Properties.password);
            System.out.println("connected");

            conn.setAutoCommit(false);
        } catch (SQLException e)
        {
            System.err.println("failed");
            System.out.println("Affichage de la pile d'erreur");
            e.printStackTrace(System.err);
            System.out.println("Affichage du message d'erreur");
            System.out.println(e.getMessage());
            System.out.println("Affichage du code d'erreur");
            System.out.println(e.getErrorCode());

        } catch (Exception e)
        {
            e.printStackTrace();
        }
    }

    /**
     * En fonction du nom de la table passé en paramètre, calcul le nombre de n-uplets
     *
     * @param tableName Le nom de la table
     * @return le nombre de n-uplets
     */
    public static int getNbRows(String tableName)
    {
        int nb = 0;
        try
        {
            ResultSet resultSet =
                    Connection.conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY)
                            .executeQuery("SELECT count(*) as nbRows FROM " + tableName);
            if (resultSet.first())
            {
                nb = Integer.parseInt(resultSet.getString("nbRows"));
            }
            resultSet.close();
        } catch (Exception e)
        {
            e.printStackTrace();
        }
        return nb;
    }

    /**
     * Commit des changements
     */
    public static void commit()
    {
        try
        {
            conn.commit();
        } catch (SQLException e)
        {
            e.printStackTrace();
        }

    }

    /**
     * Ferme la connection
     */
    public static void closeConn()
    {
        try
        {
            conn.close();
        } catch (SQLException e)
        {
            e.printStackTrace();
        }
    }

    /**
     * Méthode de création dans la BD
     *
     * @param createString : requete CREATE
     * @return Un bolean qui indique si tout c'est bien passé
     */
    public static boolean create(String createString)
    {
        try
        {
            Connection.conn.createStatement().executeUpdate(createString);
            Connection.conn.commit();
            return true;
        } catch (SQLException e)
        {
            e.printStackTrace();
            return false;
        }
    }

    /**
     * Méthode de mise à jour
     *
     * @param updateString : requete UPDATE
     * @return Un bolean qui indique si tout c'est bien passé
     */
    public static boolean update(String updateString) throws Exception
    {
        try
        {
            System.out.println(updateString);
            Connection.conn.createStatement().executeUpdate(updateString);
            Connection.commit();
            return true;
        } catch (SQLException e)
        {
            System.out.println(e.getMessage());
            throw e;
        }
    }
}
