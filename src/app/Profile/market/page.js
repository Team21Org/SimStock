import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";
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

            <div>
                <div>
                    <Link href="/"> <Image className="banner" src="/LOGOv1.png" alt="Logo" width={160} height={110} /> </Link>
                    <h1>Stock Trading System Simulator</h1>
                    <h2>By Team 21</h2>
                    <h2>Sam Kline, Michael Lacey, Josien Lajoie</h2>
                    <div className="navbar">
                        <Link className="login" href="/login">Log In</Link>
                        <Link href="./schedule">View Schedule</Link>
                        <Link href="./market">View Market</Link>   
                        <div className="dropdown">
                            <button className="dropbtn">Account</button>
                            <div className="dropdown-content">
                                <Link href="/Profile">Profile</Link>
                                <Link href="/Profile/portfolio">Portfolio</Link>
                                <Link href="/Profile/portfolio/transaction-history">Transaction History</Link>
                            </div>
                        </div>
                        <div className="dropdown">
                            {/* <!-- check if user is administrator to reveal Hidden attributes --> */}
                            <button hidden className="dropbtn">Edit</button>
                            <div className="dropdown-content">
                                <a href="editmarket.html">Edit Market</a>
                                <a href="editschedule.html">Edit Schedule</a>
                            </div>
                        </div>
                    </div>
                </div>
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
            </div>
        </>
    );
}