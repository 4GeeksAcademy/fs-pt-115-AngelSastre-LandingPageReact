import React from "react";
import { Navbar } from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx"

//create your first component
const Home = () => {
	return (
		<React.Fragment>
			<Navbar />
			<main className="container">
				<Jumbotron />
			</main>
		</React.Fragment>
	);
};

export default Home;