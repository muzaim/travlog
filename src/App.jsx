import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Destination from "./components/Destination";
import Point from "./components/Point";
import Features from "./components/Features";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<Services />
			<Destination />
			<Point />
			<Features />
			<Subscribe />
			<Footer />
		</>
	);
}

export default App;
