import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Page imports
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import DestinationDetail from "./pages/DestinationDetail";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
	return (
		<div className="overflow-x-hidden min-h-screen flex flex-col justify-between">
			<ScrollToTop />
			<div>
				<Navbar />
				<main className="animate-fadeIn pt-20 lg:pt-24">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/destinations" element={<Destinations />} />
						<Route path="/destinations/:id" element={<DestinationDetail />} />
						<Route path="/articles" element={<Articles />} />
						<Route path="/articles/:id" element={<ArticleDetail />} />
						<Route path="/gallery" element={<Gallery />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</main>
			</div>
			<Footer />
		</div>
	);
}

export default App;
