import Head from 'next/head';
import Image from 'next/image';
import './capstone.css';
import './styles.css';

export default function accountbalance() {
    return (
            <>
                <Head>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                    <title>Stock Sim | Balance</title>
                    <link rel="stylesheet" type="text/css" href="capstone.css" />
                    <script src="capstone.js"></script>
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
                            {/* <!-- check if user is administrator to reveal Hidden attributes -->			 */}
                                <button hidden class="dropbtn">Edit</button>
                                <div class="dropdown-content">
                                    <a href="editmarket.html">Edit Market</a>
                                    <a href="editschedule.html">Edit Schedule</a>
                                </div>
                            </div> 	
                        </div>	
                    </Header>
                    <h3>Balance</h3>
                    <p>What would you like to do?</p>
                    <form>
                        <input type="radio" id="withdraw" name="balance" value="withdraw"/>
                        <label for="withdraw">Withdraw</label><br />
                        <input type="radio" id="deposit" name="balance" value="deposit" />
                        <label for="deposit">Deposit</label><br />
                    </form>
                    <p>Amount: </p>
                        <form>
                            <input type="text" id="amount" name="amount" />
                            {/* <!-- verify that input is a double --> */}
                        </form> 
                    <br />
                    <input class="btn" type="submit" value="Submit" />
                    {/* <!-- JavaScript to add input balance to the account. Maybe a popup displaying success or something --> */}
                </body>
        </>
    );
}