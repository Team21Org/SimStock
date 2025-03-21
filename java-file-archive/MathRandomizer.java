import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.HashSet;
import java.util.Random;
import java.util.Set;

public class MathRandomizer {

    private static final String URL = "jdbc:sqlserver://simstock.database.windows.net:1433;databaseName=SimStockDB;encrypt=true;trustServerCertificate=false;";
    private static final String USER = "Team21@simstock";
    private static final String PASSWORD = "MikeJosieSam21";

    public class Randomizer {
        private Random random;
        private double currentPrice;

        public Randomizer(double startingValue) {
            random = new Random();
            currentPrice = startingValue;
        }

        public double getRandomDouble(double min, double max) {
            return min + (max - min) * random.nextDouble();
        }

        public double getCurrentPrice() {
            return currentPrice;
        }
    }

    private static double getCurrentPriceFromDatabase(String stockTicker) {
        double currentPrice = 0.0;

        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery("SELECT currentPrice FROM SimStock.Stock WHERE stockTicker = '" + stockTicker + "'")) {

            if (rs.next()) {
                currentPrice = rs.getDouble("currentPrice");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return currentPrice;
    }

    private static Set<String> getStockTickersFromDatabase() {
        Set<String> stockTickers = new HashSet<>();

        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery("SELECT stockTicker FROM SimStock.Stock")) {

            while (rs.next()) {
                stockTickers.add(rs.getString("stockTicker"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return stockTickers;
    }

    private static double getHigh(String stockTicker) {
        double priceHigh = 0.0;

        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery("SELECT priceHigh FROM SimStock.Stock WHERE stockTicker = '" + stockTicker + "'")) {

            if (rs.next()) {
                priceHigh = rs.getDouble("priceHigh");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return priceHigh;
    }

    private static double getLow(String stockTicker) {
        double priceLow = 0.0;

        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery("SELECT priceLow FROM SimStock.Stock WHERE stockTicker = '" + stockTicker + "'")) {

            if (rs.next()) {
                priceLow = rs.getDouble("priceLow");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return priceLow;
    }

    private static void setCurrentPriceInDatabase(String stockTicker, double newValue) {

        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             Statement stmt = conn.createStatement()) {

            String updateQuery = "UPDATE SimStock.Stock SET currentPrice = " + newValue + " WHERE stockTicker = '" + stockTicker + "'";
            stmt.executeUpdate(updateQuery);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private static void setPriceLowInDatabase(String stockTicker, double priceLow) {

        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             Statement stmt = conn.createStatement()) {

            String updateQuery = "UPDATE SimStock.Stock SET priceLow = " + priceLow + " WHERE stockTicker = '" + stockTicker + "'";
            stmt.executeUpdate(updateQuery);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private static void setPriceHighInDatabase(String stockTicker, double priceHigh) {

        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             Statement stmt = conn.createStatement()) {

            String updateQuery = "UPDATE SimStock.Stock SET priceHigh = " + priceHigh + " WHERE stockTicker = '" + stockTicker + "'";
            stmt.executeUpdate(updateQuery);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        double min = 0.00;
        double max = 5.00;

        // Fetch stock tickers from database
        Set<String> stockTickers = getStockTickersFromDatabase(); 

        // Pull the stock tickers from the hashset and the starting value
        for (String stockTicker : stockTickers) {
            double startingValue = getCurrentPriceFromDatabase(stockTicker);
            
            System.out.printf("Fetched starting value for %s from database: %.2f%n", stockTicker, startingValue);

            // Randomize the amount changed, and add or subtract it from the starting value
            Randomizer randomizer = new MathRandomizer().new Randomizer(startingValue);
            double randomValue = randomizer.getRandomDouble(min, max);
            System.out.printf("Random value between %.2f and %.2f: %.2f%n", min, max, randomValue);
            System.out.printf("Starting value was: %.2f%n", randomizer.getCurrentPrice());

            boolean add = randomizer.random.nextBoolean();
            double newValue = add ? randomValue + startingValue : startingValue - randomValue;
            System.out.printf("New value for %s is: %.2f%n", stockTicker, newValue);
            
            // Update the database and the hashmap
            setCurrentPriceInDatabase(stockTicker, newValue);
            if (newValue < getLow(stockTicker)) {
                setPriceLowInDatabase(stockTicker, newValue);
            } 
            else if (newValue > getHigh(stockTicker)) {
                setPriceHighInDatabase(stockTicker, newValue);
            }
        }
    }
}
