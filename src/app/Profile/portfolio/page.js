import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";
import './capstone.css';
import './styles.css';

export default function Portfolio() {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <title>Stock Sim | Portfolio</title>
                <link rel="stylesheet" type="text/css" href="capstone.css" />
            </Head>

            <body>
                <div>
                    <Link href="/"> <Image className="banner" src="/LOGOv1.png" alt="Logo" width={160} height={110} /> </Link>
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
                </div>
                <h3>Portfolio</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Stock Name</th>
                            <th>Ticker Number</th>
                            <th>Quantity Owned</th>
                            <th>Purchase Price</th>
                            <th>Purchase Date</th>
                            <th>Daily High</th>
                            <th>Daily Low</th>
                            <th>Opening Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- The table needs to be populated from the database, such as with JavaScript --> */}
                    </tbody>
                </table>
                <p>Account Balance</p>
                {/* <!-- Pull user account balance --> */}
            </body>
        </>
    );
}