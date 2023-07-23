import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Destination from "./components/Destination";
import Point from "./components/Point";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Navbar />
			<Hero />
			<Services />
			<Destination />
			<Point />
			<Features />
			<Testimonial />
		</>
	);
}

export default App;
