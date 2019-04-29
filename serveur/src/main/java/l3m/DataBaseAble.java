package l3m;


public interface DataBaseAble
{
    /**
     * Permet de se connecter a une base de donnees
     */
    public void connectToDatabase();

    /**
     * Permet de se deconnnecter de la base de donnees choisie
     */
    public void disconnect();


}
