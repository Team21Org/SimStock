import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.InputMismatchException;
import java.util.Scanner;

public class CreateStock {

    private static final String URL = "jdbc:sqlserver://simstock.database.windows.net:1433;databaseName=SimStockDB;encrypt=true;trustServerCertificate=false;";
    private static final String USER = "Team21@simstock";
    private static final String PASSWORD = "MikeJosieSam21";

    private static boolean isStockTickerExists(String StockTicker) {
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             Statement stmt = conn.createStatement()) {
            String query = "SELECT COUNT(*) AS count FROM SimStock.Stock WHERE stockTicker = '" + StockTicker + "'";
            ResultSet rs = stmt.executeQuery(query);
            if (rs.next() && rs.getInt("count") > 0) {
                return true; 
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false; 
    }

    private static void InsertRow(String StockTicker, String CompanyName, int DailyVolume, double OpenPrice) {
        try (Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
             Statement stmt = conn.createStatement()) {
            stmt.executeUpdate("INSERT INTO SimStock.Stock (stockTicker, companyName, currentPrice, dailyVolume, openPrice, priceHigh, priceLow) VALUES ('" + StockTicker + "', '" + CompanyName + "', " + OpenPrice + ", " + DailyVolume + ", " + OpenPrice + ", " + OpenPrice + ", " + OpenPrice + ")");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String StockTicker;
        do {
            System.out.println("Enter a Stock Ticker: ");
            StockTicker = scanner.nextLine().toUpperCase();
            if (StockTicker.length() > 4) {
                System.out.println("Error: Stock Ticker must be 4 characters or less. Please try again.");
            } else if (isStockTickerExists(StockTicker)) {
                System.out.println("Error: Stock Ticker already exists in the database. Please enter a different one.");
                StockTicker = ""; 
            }
        } while (StockTicker.length() > 4 || StockTicker.isEmpty());

        System.out.println("Enter a Company Name: ");
        String CompanyName = scanner.nextLine();

        int DailyVolume;
        while (true) {
            System.out.println("Enter daily volume of stock to be sold: ");
            try {
                DailyVolume = scanner.nextInt();
                break; 
            } catch (InputMismatchException e) {
                System.out.println("Error: Enter a valid integer for the daily volume.");
                scanner.next(); 
            }
        }

        double OpenPrice;
        while (true) {
            System.out.println("Enter the opening price: ");
            try {
                OpenPrice = scanner.nextDouble();
                break; 
            } catch (InputMismatchException e) {
                System.out.println("Error: Enter a valid decimal for opening price.");
                scanner.next(); 
            }
        }

        InsertRow(StockTicker, CompanyName, DailyVolume, OpenPrice);

        scanner.close();
    }
}