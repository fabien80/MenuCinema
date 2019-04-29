package services;

import java.io.File;
import java.io.FileInputStream;

public class Properties
{
    private static final String path = getPath();
    public static String user;
    public static String password;

    public Properties()
    {
        try
        {
            init();
        } catch (Exception e)
        {
            e.printStackTrace();
        }
    }

    public static String getPath()
    {
        String path = "";
        String os = System.getProperty("os.name").toLowerCase();
        if (os.contains("win"))
        {
            path = System.getProperty("user.dir") + "\\.properties";
        } else
        {
            path = System.getProperty("user.dir") + "/.properties";
        }

        return path;
    }

    private static boolean fileExist(String path)
    {
        File file = new File(path);
        return file.exists();
    }

    public static void init() throws Exception
    {
        if (!fileExist(path))
        {
            throw new Exception(
                    "Le fichier .properties n'existe pas, créer le à la racine : " + System.getProperty("user.dir"));
        }
        java.util.Properties prop = new java.util.Properties();
        FileInputStream stream = new FileInputStream(path);

        prop.load(stream);
        user = prop.getProperty("user");
        password = prop.getProperty("password");
    }
}
