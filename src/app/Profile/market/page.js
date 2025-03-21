import Head from 'next/head';
import Image from 'next/image';
import './capstone.css';
import './styles.css';

export default function ViewMarket() {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <title>Stock Sim | Market</title>
                <link rel="stylesheet" type="text/css" href="capstone.css" />
            </Head>

            <body>
                <Header>
                    <a href="index.html"> <img class="banner" src="LOGOv1.png" /> </a>
                    <h1>Stock Trading System Simulator</h1>
                    <h2>By Team 21</h2>
                    <h2>Sam Kline, Michael Lacey, Josien Lajoie</h2>
                    <div class="navbar">
                        <a class="login" href="login.html">Log In</a>
                        <a href="viewschedule.html">View Schedule</a>
                        <a href="viewmarket.html">View Market</a>
                        <div class="dropdown">
                            <button class="dropbtn">Account</button>
                            <div class="dropdown-content">
                                <a href="profile.html">Profile</a>
                                <a href="portfolio.html">Portfolio</a>
                                <a href="transhistory.html">Transaction History</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            {/* <!-- check if user is administrator to reveal Hidden attributes --> */}
                            <button hidden class="dropbtn">Edit</button>
                            <div class="dropdown-content">
                                <a href="editmarket.html">Edit Market</a>
                                <a href="editschedule.html">Edit Schedule</a>
                            </div>
                        </div>
                    </div>
                </Header>
                <h3>Market</h3>
                {/* <!-- check if Market is open before displaying. Pull current time from the disclosed time within the database--> */}
                <table hidden>
                    <thead>
                        <tr>
                            <th>Stock Name</th>
                            <th>Ticker Number</th>
                            <th>Volume</th>
                            <th>Sale Price</th>
                            <th>Daily High</th>
                            <th>Daily Low</th>
                            <th>Opening Price</th>
                            <th>#placeholder</th>
                            {/* <!-- <th><input type="submit" value="Buy"></th> --> */}
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- The table needs to be populated from the database, such as with JavaScript --> */}
                    </tbody>
                </table>
                <p> Market is closed until (insert time here). </p>
            </body>
        </>
    );
}