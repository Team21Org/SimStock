import Head from 'next/head';
import Image from 'next/image';

export default function TransactionHistory() {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <title>Stock Sim | Transaction History</title>
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
                <h3>Transaction History</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Transaction Type</th>
                            <th>Amount</th>
                            <th>Ticker Number</th>
                            <th>Quantity</th>
                            <th>Transaction Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- The table needs to be populated from the database, such as with JavaScript --> */}
                    </tbody>
                </table>
                <p>Balance as of {/* <!-- script for pulling the date --> */}</p>
                <div>
                    <a class="btn" href="balance.html">Access Balance</a>
                </div>
            </body>
        </>
    );
}