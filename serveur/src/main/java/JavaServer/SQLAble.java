package JavaServer;

import l3m.DataBaseAble;

public class SQLAble implements DataBaseAble
{
    @Override
    public void connectToDatabase()
    {
        Connection.init();
    }

    @Override
    public void disconnect()
    {
        Connection.closeConn();
    }

}
