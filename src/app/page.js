import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import "./capstone.css";
import "./styles.css";

export default function Index() {
  return (
	  <><Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Stock Sim | Home Page</title>
    </Head>
    <div>
        <div>
          <Link href="/"> <Image className="banner" src="/LOGOv1.png" alt="Logo" width={150} height={0} /> </Link>
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
              {/*!-- check if user is administrator to reveal Hidden attributes --*/}
              <button hidden className="dropbtn">Edit</button>
              <div className="dropdown-content">
              {/* <Link href="/editmarket">Edit Market</Link> */}
              {/* <Link href="/editschedule">Edit Schedule</Link> */}
              </div>
            </div>
          </div>

        

        <h3>Home</h3>
        <h4>Welcome To Sim Stock! Where Sim-ple Investments Score Big</h4>
        <img id="homeimg" src="homepage.jpeg" />
          <p id="hometxt">
            Sim Stock is your one-stop shop for all of your investment needs, offering a intutive and ideal platform for managing your porfolio whenever needed and interacting
            with the market during active hours. With our solution, you will be able to track all of your transactions on the market, review your stock holdings, and deposit and cashout
            your balance all under one platform! Whether you are a new or experienced trader, Sim Stock holds all of the tools that will ensure your financial success and build confidence
            to navigate the market efficiently with its user-friendly interface.

          </p>

          <h4 id="h4alt1">Ready To Start? </h4>
          <img id="homeimg2" src="profileicon.png" />
          <Link href="/signup"> <h4 id="h4alt2"> Sign Up For Free!</h4></Link>
          <img id="homeimg3" src="stockicon.png" />
          <Link href="/Profile/market"> <h4 id="h4alt2"> View Our Current Market</h4></Link>
        </div>
	</div>
		</>
  );
}
