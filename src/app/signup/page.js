import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";
import './capstone.css';
import './styles.css';

export default function SignUp() {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <title>Stock Sim | Sign-Up</title>
                <link rel="stylesheet" type="text/css" href="capstone.css" />
                <script type="text/javascript" src="capstone.js" defer></script>
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
                <h3>Sign-Up</h3>
                <form id="loginform">
                    <label htmlFor="email">Enter Your E-Mail Address</label><br />
                    <input type="text" id="email" name="email" /><br />
                    <label htmlFor="username">Create A Username (Must Be Unique):</label><br />
                    <input type="text" id="username" name="username" /><br />
                    <label htmlFor="pwd">Create A Password:</label><br />
                    <input type="password" id="pwd" name="pwd" /><br />
                    <label htmlFor="repwd">Re-Enter Password:</label><br />
                    <input type="password" id="repwd" name="repwd" /><br /><br />
                    <input className="btn" type="submit" value="Submit" />
                </form>

                {/* <!-- this needs to have JavaScript code to verify login information with the database, and then to redirect to likely profile.html --> */}
            </div>
        </>
    );
}