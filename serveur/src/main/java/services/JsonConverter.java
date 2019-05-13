package services;

import com.google.gson.Gson;

public class JsonConverter
{
    public static final Gson gson = new Gson();

    /**
     * Convertit tout type d'objet en String JSON correspondante
     * @param object un objet quelconque
     * @return la string json correspondante
     */
    public static String convertObjectToJson(Object object)
    {
        return gson.toJson(object);
    }
}
