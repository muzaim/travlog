import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Search, Compass, Star, MapPin, ArrowRight, Flame } from "lucide-react";
import { destinations } from "../data/destinations";
import { articles } from "../data/articles";

// Re-use SVG Assets or use beautiful mock paths
import HeroImg from "../assets/img/use/hero.svg";
import U1 from "../assets/img/use/u1.svg";
import U2 from "../assets/img/use/u2.svg";
import U3 from "../assets/img/use/u3.svg";
import U4 from "../assets/img/use/u4.svg";
import U5 from "../assets/img/use/u5.svg";

import DestinationImg from "../assets/img/icons/destination.svg";
import WeatherImg from "../assets/img/icons/weather.svg";
import BookingImg from "../assets/img/icons/booking.svg";

import TravelImg from "../assets/img/use/travel.svg";

import FeatureImg from "../assets/img/use/features.svg";
import LocationIcon from "../assets/img/icons/location.svg";
import ScheduleIcon from "../assets/img/icons/schedule.svg";
import TicketIcon from "../assets/img/icons/ticket.svg";

const Home = () => {
	const navigate = useNavigate();
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearchSubmit = (e) => {
		e.preventDefault();
		if (searchQuery.trim()) {
			navigate(`/destinations?search=${encodeURIComponent(searchQuery.trim())}`);
		} else {
			navigate("/destinations");
		}
	};

	// 1. Categories
	const categories = [
		{ name: "Beach", count: 6, icon: "🏖️", color: "bg-blue-50 text-blue-600 border-blue-100" },
		{ name: "Mountain", count: 4, icon: "⛰️", color: "bg-emerald-50 text-emerald-600 border-emerald-100" },
		{ name: "Culture", count: 5, icon: "🕌", color: "bg-amber-50 text-amber-600 border-amber-100" },
		{ name: "Nature", count: 5, icon: "🌿", color: "bg-rose-50 text-rose-600 border-rose-100" },
		{ name: "Culinary", count: 1, icon: "🍲", color: "bg-purple-50 text-purple-600 border-purple-100" }
	];

	// 2. Featured Destinations (rating >= 4.9, pick 3)
	const featured = destinations.filter(d => d.rating >= 4.9).slice(0, 3);

	// 3. Popular Destinations (pick 3)
	const popular = [destinations[0], destinations[4], destinations[7]].filter(Boolean);

	// 4. Recent Articles
	const recentArticles = articles.slice(0, 3);

	// Testimonials
	const testimonials = [
		{
			name: "Nadia Prameswari",
			role: "Solo Traveler",
			quote: "Simple layout, clear itinerary, and the trip feels very calming. Highly recommended for anyone wanting a vacation without organizing small details.",
		},
		{
			name: "Aditya Pratama",
			role: "Weekend Explorer",
			quote: "I love it because everything feels neat and not overdone. The destinations are beautiful, the pacing is just right, and there is still space for detours.",
		},
		{
			name: "Salsa Azzahra",
			role: "Couple Getaway",
			quote: "The best part is how warm and personal the experience feels. From the stays to the sunset spots, everything was selected with very good taste.",
		},
	];

	return (
		<div className="space-y-4">
			{/* HERO SECTION */}
			<section className="section-shell pb-10 pt-10 md:pt-16">
				<div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
					<div className="space-y-8">
						<h1 className="text-5xl leading-[1.05] tracking-tight font-extrabold text-slate-900 md:text-6xl lg:text-7xl">
							Find calm, beautiful trips that still feel full of
							story.
						</h1>
						
						<p className="max-w-xl text-base leading-8 text-slate-600 md:text-lg">
							Savana helps you discover destinations that feel fresh,
							warm, and easy to enjoy. Clean planning, scenic stays,
							and memorable moments without overcomplicating the
							journey.
						</p>

						{/* SEARCH CONTAINER */}
						<form onSubmit={handleSearchSubmit} className="glass-panel p-2.5 max-w-xl flex flex-col sm:flex-row items-center gap-2 shadow-[0_15px_50px_-20px_rgba(15,23,42,0.15)]">
							<div className="flex items-center gap-3 w-full px-4 py-2">
								<Search className="h-5 w-5 text-slate-400 shrink-0" />
								<input
									type="text"
									placeholder="Where do you want to go? (e.g. Bali, Bromo...)"
									className="bg-transparent text-slate-700 outline-none w-full text-sm font-medium"
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
								/>
							</div>
							<button type="submit" className="w-full sm:w-auto shrink-0 rounded-full bg-rose-500 px-6 py-3.5 font-semibold text-white transition duration-300 hover:bg-rose-400 hover:shadow-lg flex items-center justify-center gap-2 text-sm">
								<Compass className="h-4 w-4" />
								Explore
							</button>
						</form>

						<div className="flex flex-col gap-5 sm:flex-row sm:items-center pt-2">
							<div className="flex -space-x-3">
								{["MA", "IR", "LN", "DK"].map((initial) => (
									<div
										key={initial}
										className="flex h-11 w-11 items-center justify-center rounded-full border-4 border-white bg-amber-200 font-circular text-xs font-bold text-slate-700 shadow-sm"
									>
										{initial}
									</div>
								))}
							</div>
							<p className="max-w-sm text-sm leading-7 text-slate-500">
								Trusted by more than <span className="font-bold text-slate-700">2,000+ travelers</span> who love peaceful, scenic, and tasteful holidays.
							</p>
						</div>
					</div>

					<div className="relative">
						<div className="absolute left-4 top-10 h-32 w-32 rounded-full bg-amber-200/50 blur-3xl" />
						<div className="absolute bottom-6 right-0 h-40 w-40 rounded-full bg-rose-200/60 blur-3xl" />
						<div className="glass-panel relative overflow-hidden p-5 sm:p-7">
							<img
								src={HeroImg}
								alt="Travel illustration"
								className="mx-auto w-full max-w-xl transition-all duration-700 hover:rotate-1"
							/>
							<div className="mt-6 grid gap-4 sm:grid-cols-2">
								<div className="rounded-[1.5rem] bg-slate-900 p-5 text-white shadow-md">
									<p className="text-xs uppercase tracking-[0.3em] text-white/60">
										Best Season
									</p>
									<p className="mt-2 font-circular text-xl">
										April to October
									</p>
								</div>
								<div className="rounded-[1.5rem] bg-amber-50 p-5 border border-amber-100 shadow-sm">
									<p className="text-xs uppercase tracking-[0.3em] text-amber-700">
										Most loved route
									</p>
									<p className="mt-2 font-circular text-xl text-slate-900">
										Coast, hill, and cafe
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* BRANDS BANNER */}
				<div className="mt-14 rounded-[2rem] border border-white/60 bg-white/70 px-5 py-6 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.35)] backdrop-blur">
					<p className="text-center text-xs font-semibold uppercase tracking-[0.45em] text-slate-400">
						Official Travel Partners of Savana
					</p>
					<div className="mt-6 flex flex-wrap items-center justify-center gap-8 opacity-75 md:gap-12">
						{[U1, U2, U3, U4, U5].map((brand, index) => (
							<img
								key={index}
								src={brand}
								alt=""
								className="h-7 lg:h-9 object-contain filter grayscale contrast-125 transition hover:grayscale-0"
							/>
						))}
					</div>
				</div>
			</section>

			{/* CATEGORIES SECTION */}
			<section className="section-shell py-16">
				<div className="text-center max-w-2xl mx-auto">
					<p className="section-label">Travel Categories</p>
					<h2 className="section-title mt-4">Explore by Your Travel Interests</h2>
					<p className="mt-4 text-slate-600 text-sm leading-7">
						Choose a travel category that fits your holiday mood, from exotic beaches to mountain climbing adventures.
					</p>
				</div>

				<div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-6">
					{categories.map((cat) => (
						<Link
							key={cat.name}
							to={`/destinations?category=${cat.name}`}
							className="soft-card p-6 flex flex-col items-center justify-center text-center hover:shadow-[0_20px_50px_-20px_rgba(244,63,94,0.15)] hover:-translate-y-1.5 transition-all duration-300 group"
						>
							<div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl bg-amber-50 group-hover:scale-110 transition duration-300">
								{cat.icon}
							</div>
							<h3 className="mt-4 font-circular text-lg text-slate-900 group-hover:text-rose-500 transition duration-300">{cat.name}</h3>
							<p className="mt-1 text-xs text-slate-400 font-medium">{cat.count} Destinations</p>
						</Link>
					))}
				</div>
			</section>

			{/* SERVICES SECTION */}
			<section className="section-shell py-16 bg-gradient-to-b from-transparent to-white/30">
				<div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
					<div>
						<p className="section-label">Services</p>
						<h2 className="section-title mt-4">
							Simple tools for a trip that looks good and feels easy.
						</h2>
						<p className="mt-5 max-w-md text-base leading-8 text-slate-600">
							The goal is not to make travel complicated. We only keep the parts that help you move smoothly and enjoy more of the destination.
						</p>
					</div>

					<div className="grid gap-5 md:grid-cols-3">
						{[
							{ icon: DestinationImg, title: "Curated destinations", copy: "Scenic places that feel fresh, photogenic, and comfortable for a laid-back holiday rhythm." },
							{ icon: WeatherImg, title: "Season-aware planning", copy: "We match routes with weather windows so your beach day, city walk, and sunset stops land at the right time." },
							{ icon: BookingImg, title: "Smooth booking flow", copy: "Transport, stay, and experience details are grouped in one neat plan so the trip stays easy to follow." }
						].map((service, index) => (
							<article
								key={service.title}
								className={`soft-card p-7 transition hover:-translate-y-1 duration-300 ${
									index === 1 ? "bg-slate-900 text-white shadow-lg" : ""
								}`}
							>
								<img
									src={service.icon}
									alt=""
									className="h-16 w-16"
								/>
								<h3
									className={`mt-8 font-circular text-xl ${
										index === 1 ? "text-white" : "text-slate-900"
									}`}
								>
									{service.title}
								</h3>
								<p
									className={`mt-4 text-xs leading-6 ${
										index === 1 ? "text-white/75" : "text-slate-600"
									}`}
								>
									{service.copy}
								</p>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* FEATURED DESTINATIONS */}
			<section className="section-shell py-16">
				<div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
					<div>
						<p className="section-label">Best Choice</p>
						<h2 className="section-title mt-4">
							Savana Featured Routes
						</h2>
					</div>
					<p className="max-w-md text-slate-600 text-sm leading-7">
						Exclusive travel routes designed specifically for those who appreciate peace, visual beauty, and unforgettable adventure.
					</p>
				</div>

				<div className="mt-12 grid gap-8 lg:grid-cols-3">
					{featured.map((destination) => (
						<article
							key={destination.id}
							className="overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-[0_24px_80px_-35px_rgba(15,23,42,0.2)] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col h-full"
						>
							<div className="overflow-hidden bg-amber-50 h-64 relative group">
								<img
									src={destination.image}
									alt={destination.title}
									className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
								/>
								<div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full px-3.5 py-1.5 flex items-center gap-1 shadow-sm">
									<Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400 shrink-0" />
									<span className="text-xs font-bold text-slate-800">{destination.rating}</span>
									<span className="text-[10px] text-slate-400">({destination.reviewsCount})</span>
								</div>
								<div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur rounded-full px-3.5 py-1.5 text-xs font-semibold text-white">
									{destination.category}
								</div>
							</div>
							<div className="p-7 flex flex-col flex-grow justify-between">
								<div>
									<div className="flex items-center gap-1.5 text-rose-500 text-xs font-bold uppercase tracking-widest">
										<Flame className="h-4.5 w-4.5" />
										Featured Route
									</div>
									<h3 className="mt-3 font-circular text-xl text-slate-900 leading-snug">
										{destination.title}
									</h3>
									<div className="mt-3 flex items-center gap-1.5 text-slate-400 text-xs font-semibold uppercase tracking-[0.1em]">
										<MapPin className="h-4 w-4 text-rose-400 shrink-0" />
										{destination.location}
									</div>
									<p className="mt-4 text-xs leading-6 text-slate-600 line-clamp-3">
										{destination.copy}
									</p>
								</div>
								<div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
									<div>
										<p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Ticket Price</p>
										<p className="text-base font-bold text-slate-900 mt-1">{destination.price === 0 ? "Free" : destination.priceLabel}</p>
									</div>
									<Link to={`/destinations/${destination.id}`} className="rounded-full bg-rose-500 px-5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-rose-400 transition flex items-center gap-1.5">
										View Details
										<ArrowRight className="h-3 w-3" />
									</Link>
								</div>
							</div>
						</article>
					))}
				</div>
			</section>

			{/* TRAVEL POINT SECTION */}
			<section className="section-shell py-16">
				<div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
					<div className="glass-panel overflow-hidden p-4 sm:p-6 order-2 lg:order-1">
						<img
							src={TravelImg}
							alt="Traveler illustration"
							className="mx-auto w-full max-w-2xl"
						/>
					</div>

					<div className="space-y-6 order-1 lg:order-2">
						<p className="section-label">Travel Point</p>
						<h2 className="section-title mt-4">
							We help you choose a dream route without losing the sense of ease.
						</h2>
						<p className="text-base leading-8 text-slate-600">
							From short weekend escapes to slower scenic journeys, we shape the trip around comfort, timing, and atmosphere so you can spend less time organizing and more time being there.
						</p>

						<div className="grid gap-4 sm:grid-cols-2 pt-2">
							{[
								{ value: "100+", label: "Curated Route Packages" },
								{ value: "50+", label: "Boutique Homestays" },
								{ value: "15+", label: "Local Porters & Guides" },
								{ value: "2,000+", label: "Happy Travelers" }
							].map((item) => (
								<div key={item.label} className="soft-card p-6 border border-amber-100 hover:shadow-md transition">
									<p className="font-circular text-3xl text-amber-500">
										{item.value}
									</p>
									<p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold">
										{item.label}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* POPULAR DESTINATIONS */}
			<section className="section-shell py-16 bg-gradient-to-t from-transparent to-white/40">
				<div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
					<div>
						<p className="section-label">Trending Now</p>
						<h2 className="section-title mt-4">
							Most Popular Destinations This Month
						</h2>
					</div>
					<Link to="/destinations" className="rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 hover:border-slate-300 hover:text-slate-900 transition text-sm flex items-center gap-2 shrink-0 self-start md:self-end">
						View All Destinations
						<ArrowRight className="h-4 w-4 text-slate-400" />
					</Link>
				</div>

				<div className="mt-12 grid gap-8 lg:grid-cols-3">
					{popular.map((destination) => (
						<article
							key={destination.id}
							className="overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-[0_24px_80px_-35px_rgba(15,23,42,0.2)] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col h-full"
						>
							<div className="overflow-hidden bg-amber-50 h-64 relative group">
								<img
									src={destination.image}
									alt={destination.title}
									className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
								/>
								<div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full px-3.5 py-1.5 flex items-center gap-1 shadow-sm">
									<Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400 shrink-0" />
									<span className="text-xs font-bold text-slate-800">{destination.rating}</span>
									<span className="text-[10px] text-slate-400">({destination.reviewsCount})</span>
								</div>
							</div>
							<div className="p-7 flex flex-col flex-grow justify-between">
								<div>
									<h3 className="font-circular text-xl text-slate-900 leading-snug">
										{destination.title}
									</h3>
									<div className="mt-3 flex items-center gap-1.5 text-slate-400 text-xs font-semibold uppercase tracking-[0.1em]">
										<MapPin className="h-4 w-4 text-rose-400" />
										{destination.location}
									</div>
									<p className="mt-4 text-xs leading-6 text-slate-600 line-clamp-3">
										{destination.copy}
									</p>
								</div>
								<div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
									<div>
										<p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold font-circular">HTM</p>
										<p className="text-base font-bold text-slate-900 mt-1">{destination.price === 0 ? "Free" : destination.priceLabel}</p>
									</div>
									<Link to={`/destinations/${destination.id}`} className="rounded-full bg-rose-500 px-5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-rose-400 transition flex items-center gap-1.5">
										View Details
										<ArrowRight className="h-3 w-3" />
									</Link>
								</div>
							</div>
						</article>
					))}
				</div>
			</section>

			{/* FEATURES SECTION */}
			<section className="section-shell py-16">
				<div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
					<div className="space-y-6">
						<p className="section-label">Key Features</p>
						<h2 className="section-title mt-4">
							Every detail is thoughtfully planned for an easy & memorable journey.
						</h2>
						<p className="text-base leading-8 text-slate-600">
							A good trip is not only about where you go. It is also about pacing, comfort, and choosing details that make the journey feel thoughtful from start to finish.
						</p>

						<div className="space-y-4 pt-2">
							{[
								{ icon: TicketIcon, title: "Smart Route Selection", copy: "Each route is shaped around scenic value, comfort, and the amount of time people realistically want to spend outside." },
								{ icon: ScheduleIcon, title: "Balanced Trip Schedules", copy: "We avoid packing the day too tightly, so you still have space for rest, detours, and slower moments." },
								{ icon: LocationIcon, title: "Locations with Atmosphere", copy: "The places we recommend are chosen not just for popularity, but for how they feel when you are actually there." }
							].map((feature, index) => (
								<div
									key={feature.title}
									className={`rounded-[1.75rem] border p-5 sm:p-6 transition duration-300 ${
										index === 1
											? "border-slate-900 bg-slate-900 text-white shadow-[0_24px_80px_-35px_rgba(15,23,42,0.5)]"
											: "border-white/60 bg-white"
									}`}
								>
									<div className="flex gap-4">
										<img
											src={feature.icon}
											alt=""
											className="h-14 w-14 shrink-0"
										/>
										<div>
											<h3 className="font-circular text-lg font-bold">
												{feature.title}
											</h3>
											<p
												className={`mt-2 text-xs leading-6 ${
													index === 1
														? "text-white/75"
														: "text-slate-600"
												}`}
											>
												{feature.copy}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					<div>
						<div className="glass-panel overflow-hidden p-4 sm:p-6">
							<img
								src={FeatureImg}
								alt="Feature illustration"
								className="mx-auto w-full max-w-2xl"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* ARTICLES SECTION */}
			<section className="section-shell py-16">
				<div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
					<div>
						<p className="section-label">Stories & Tips</p>
						<h2 className="section-title mt-4">
							Recent Travel Notes
						</h2>
					</div>
					<Link to="/articles" className="rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 hover:border-slate-300 hover:text-slate-900 transition text-sm flex items-center gap-2 shrink-0 self-start md:self-end">
						View All Articles
						<ArrowRight className="h-4 w-4 text-slate-400" />
					</Link>
				</div>

				<div className="mt-12 grid gap-6 md:grid-cols-3">
					{recentArticles.map((article) => (
						<article
							key={article.id}
							className="soft-card overflow-hidden hover:shadow-lg transition duration-300 flex flex-col h-full"
						>
							<div className="h-48 overflow-hidden bg-slate-100">
								<img
									src={article.cover}
									alt={article.title}
									className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
								/>
							</div>
							<div className="p-6 flex flex-col flex-grow justify-between">
								<div>
									<div className="flex items-center gap-2 text-xs text-rose-500 font-bold uppercase tracking-wider">
										<span>{article.tags[0]}</span>
										<span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
										<span className="text-slate-400 lowercase">{article.readTime}</span>
									</div>
									<h3 className="mt-3 font-circular text-lg text-slate-900 leading-snug hover:text-rose-500 transition">
										<Link to={`/articles/${article.id}`}>
											{article.title}
										</Link>
									</h3>
									<p className="mt-3 text-xs leading-6 text-slate-500 line-clamp-3">
										{article.summary}
									</p>
								</div>
								<div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
									<span className="text-xs font-semibold text-slate-400">By {article.author}</span>
									<Link to={`/articles/${article.id}`} className="text-xs font-bold text-rose-500 hover:text-rose-400 flex items-center gap-1">
										Read More
										<ArrowRight className="h-3 w-3" />
									</Link>
								</div>
							</div>
						</article>
					))}
				</div>
			</section>

			{/* TESTIMONIALS SECTION */}
			<section className="section-shell py-16">
				<div className="text-center max-w-2xl mx-auto">
					<p className="section-label">Traveler Stories</p>
					<h2 className="section-title mt-4">
						People come for the view and return for the feeling.
					</h2>
					<p className="mt-5 text-base leading-8 text-slate-600">
						Simple planning does not mean a flat experience. These trips are built to feel calm, stylish, and memorable from start to finish.
					</p>
				</div>

				<div className="mt-12 grid gap-6 lg:grid-cols-3">
					{testimonials.map((item, index) => (
						<article
							key={item.name}
							className={`soft-card p-7 transition hover:-translate-y-1 duration-300 ${
								index === 1 ? "lg:-translate-y-4 lg:hover:-translate-y-5" : ""
							}`}
						>
							<div className="flex items-center justify-between">
								<span className="text-4xl leading-none text-amber-400 font-circular">
									“
								</span>
								<span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">
									{item.role}
								</span>
							</div>
							<p className="mt-5 text-sm leading-7 text-slate-600 italic">
								{item.quote}
							</p>
							<div className="mt-8">
								<p className="font-circular text-lg text-slate-900">
									{item.name}
								</p>
							</div>
						</article>
					))}
				</div>
			</section>

			{/* NEWSLETTER SUBSCRIBE */}
			<section className="section-shell py-16">
				<div className="overflow-hidden rounded-[2.5rem] bg-slate-900 px-6 py-12 text-white sm:px-10 lg:px-14 lg:py-16 shadow-xl relative">
					<div className="absolute right-0 top-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
					<div className="absolute left-0 bottom-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
					
					<div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end relative z-10">
						<div>
							<p className="text-xs uppercase tracking-[0.35em] text-amber-300 font-circular">
								Get Travel Information
							</p>
							<h2 className="mt-4 font-circular text-3xl leading-tight sm:text-4xl lg:text-5xl">
								Plan your next escape with updates that stay useful and inspiring.
							</h2>
							<p className="mt-5 max-w-xl text-sm leading-7 text-white/70">
								Get destination ideas, seasonal route suggestions, and clean travel inspiration without noisy spam.
							</p>
						</div>

						<form onSubmit={(e) => { e.preventDefault(); alert("Thank you for subscribing to Savana newsletter!"); }} className="rounded-[2rem] bg-white p-3 sm:p-4 shadow-lg">
							<div className="flex flex-col gap-2.5 sm:flex-row">
								<input
									type="email"
									required
									placeholder="Your email address"
									className="w-full rounded-full border border-slate-100 bg-slate-50 px-5 py-3.5 text-slate-700 outline-none transition focus:border-rose-300 text-sm"
								/>
								<button type="submit" className="rounded-full bg-rose-500 px-7 py-3.5 font-semibold text-white transition hover:bg-rose-400 shrink-0 text-sm shadow-md hover:shadow-lg">
									Subscribe
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
