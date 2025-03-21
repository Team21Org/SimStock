import Image from "src/app/LOGOv1.png";
import Head from "next/head";
import
export default function Home() {
  return (
	  <><Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Stock Sim | Home Page</title>
    </Head>
    <body>
        <body>
          <a href="index.html"> <img class="banner" src="LOGOv1.png" /></a>
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
              {/*!-- check if user is administrator to reveal Hidden attributes --*/}
              <button hidden class="dropbtn">Edit</button>
              <div class="dropdown-content">
                <a href="editmarket.html">Edit Market</a>
                <a href="editschedule.html">Edit Schedule</a>
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
          <a href="signup.html"> <h4 id="h4alt2"> Sign Up For Free!</h4></a>
          <img id="homeimg3" src="stockicon.png" />
          <a href="viewmarket.html"> <h4 id="h4alt2"> View Our Current Market</h4></a>
        </body>
	</body>
		</>
  );
}
