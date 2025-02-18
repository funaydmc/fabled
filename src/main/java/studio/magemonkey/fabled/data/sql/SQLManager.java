package studio.magemonkey.fabled.data.sql;

import lombok.Getter;
import studio.magemonkey.fabled.Fabled;
import studio.magemonkey.fabled.data.sql.tables.FabledPlayersSQL;

import java.io.File;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class SQLManager {

    @Getter
    private static volatile Connection connection;

    private static FabledPlayersSQL fabledPlayersSQL;

    private static String host;
    private static int    port;
    private static String database;
    private static String user;
    private static String password;

    public static void reconnect() {
        connection = getMySQLConnection(host, port, database, user, password);
        if (connection == null) {
            Fabled.inst().getLogger().severe("Failed to connect to database.");
        }
    }

    public static void reload() {
        host = Fabled.getSettings().getSqlHost();
        port = Integer.parseInt(Fabled.getSettings().getSqlPort());
        database = Fabled.getSettings().getSqlDatabase();
        user = Fabled.getSettings().getSqlUser();
        password = Fabled.getSettings().getSqlPass();

        Fabled.inst().getLogger().info("Initializing SQLManager with type: MySQL");

        reconnect();

        if (connection != null)
            Fabled.inst().getLogger().info("Connection established to database: " + database);

        fabledPlayersSQL = new FabledPlayersSQL();
    }

    // SQLite connection in case we want to implement it in future
    private static Connection getSQLiteConnection() {
        File databaseFile = new File(Fabled.inst().getDataFolder(), "database.db");
        databaseFile.getParentFile().mkdirs(); // Ensure the parent directories exist
        try {
            String     url  = "jdbc:sqlite:" + databaseFile.getAbsolutePath();
            Connection conn = DriverManager.getConnection(url);

            Fabled.inst().getLogger().info("SQLite connection created at: " + databaseFile.getAbsolutePath());
            return conn;
        } catch (SQLException e) {
            Fabled.inst().getLogger().severe("Error creating SQLite connection: " + e.getMessage());
        }
        return null;
    }

    private static Connection getMySQLConnection(String host, int port, String database, String user, String password) {
        try {
            String     url  = "jdbc:mysql://" + host + ":" + port + "/" + database;
            Connection conn = DriverManager.getConnection(url, user, password);
            return conn;
        } catch (SQLException e) {
            Fabled.inst().getLogger().severe("Error creating MySQL connection: " + e.getMessage());
        }
        return null;
    }

    public static Connection connection() throws SQLException {
        if (connection == null || connection.isClosed()) {
            reconnect();
        }
        if (connection != null) {
            return connection;
        } else {
            Fabled.inst().getLogger().severe("Connection is still null after initialization attempt.");
        }
        return null;
    }

    public static void runMigrations() {
        if (fabledPlayersSQL != null)
            fabledPlayersSQL.migrateTable();
    }

    public static FabledPlayersSQL players() {
        return fabledPlayersSQL;
    }
}
