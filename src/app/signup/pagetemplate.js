import Head from 'next/head';
import Image from 'next/image';
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
                <h3>Sign-Up</h3>
                <form id="loginform">
                    <label for="email">Enter Your E-Mail Address</label><br />
                    <input type="text" id="email" name="email" /><br />
                    <label for="username">Create A Username (Must Be Unique):</label><br />
                    <input type="text" id="username" name="username" /><br />
                    <label for="pwd">Create A Password:</label><br />
                    <input type="password" id="pwd" name="pwd" /><br />
                    <label for="repwd">Re-Enter Password:</label><br />
                    <input type="password" id="repwd" name="repwd" /><br /><br />
                    <input class="btn" type="submit" value="Submit" />
                </form>

                {/* <!-- this needs to have JavaScript code to verify login information with the database, and then to redirect to likely profile.html --> */}
            </body>
        </>
    );
}