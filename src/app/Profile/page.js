import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";
import './capstone.css';
import './styles.css';

export default function Profile() {
    return (
            <>
            <Head>
                <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                            <title>Stock Sim | Profile</title>
                            <link rel="stylesheet" type="text/css" href="capstone.css"/>
                            </Head>

                            <div>
                                <div>
                                    <Link href="/"> <Image className="banner" src="/LOGOv1.png" alt="Logo" width={160} height={110} /> </Link>
                                    <h1>Stock Trading System Simulator</h1>
                                    <h2>By Team 21</h2>
                                    <h2>Sam Kline, Michael Lacey, Josien Lajoie</h2>
                                    <div className="navbar">
                                        <Link className="login" href="/login">Log In</Link>
                                        <Link href="/viewschedule">View Schedule</Link>
                                        <Link href="Profile/market">View Market</Link>    

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
                                <h3>Profile</h3>
                                <p>Name: </p>
                                <p>Username: </p>
                                <p>E-Mail Address:</p>
                                <p>Account Number: </p>
                                <p>Account Balance: </p>
                                {/* <!--javascript to pull user information from the database. Organize into table, maybe --> */}
                            </div>
                        </>
                        );
}