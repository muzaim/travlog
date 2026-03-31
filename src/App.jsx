import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Destination from "./components/Destination";
import Point from "./components/Point";
import Features from "./components/Features";
import Journey from "./components/Journey";
import Testimonials from "./components/Testimonials";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="overflow-x-hidden">
			<Navbar />
			<Hero />
			<Services />
			<Destination />
			<Point />
			<Features />
			<Journey />
			<Testimonials />
			<Subscribe />
			<Footer />
		</div>
	);
}

export default App;
