import Image from "next/image"
import Head from "next/head";
import "./capstone.css";
import "./styles.css";

export default function Login() {
    return (
    <div>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" /> 
                <title>Stock Sim | Login</title>
                <link rel="stylesheet" type="text/css" href="capstone.css" />
                <script type="text/javascript" src="capstone.js" defer></script>
            </Head>


	<header>
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
		
	</header>
	<h3>Login</h3>

	<form id="loginform">
		<label for="username">Username:</label><br />
		<input type="text" id="username" name="username" /><br />
		<label for="pwd">Password:</label><br />
		<input type="password" id="pwd" name="pwd" /><br /><br />
		<input class="btn" type="submit" value="Submit" /><br /><br />
		<a id="accbtn" href="signup.html"> No Account? Make One Here! </a>
	</form> 
	{/* <!-- this needs to have JavaScript code to verify login information with the database, and then to redirect to likely profile.html --> */}
    </div>
        );
}