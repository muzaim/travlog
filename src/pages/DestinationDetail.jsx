import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, MapPin, Clock, Ticket, Check, ShieldAlert, CalendarDays, Compass, HelpCircle, ArrowLeft, ArrowRight, X } from "lucide-react";
import { destinations } from "../data/destinations";

const DestinationDetail = () => {
	const { id } = useParams();
	const destination = destinations.find((d) => d.id === id);

	// Lightbox gallery states
	const [activeImgIndex, setActiveImgIndex] = useState(null);
	const [faqOpenIndex, setFaqOpenIndex] = useState(null);

	// Reset scroll when loading detail page
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [id]);

	if (!destination) {
		return (
			<div className="section-shell py-20 text-center max-w-xl mx-auto space-y-6">
				<div className="w-20 h-20 rounded-full bg-rose-50 flex items-center justify-center text-4xl mx-auto">
					🗺️
				</div>
				<h2 className="font-circular text-3xl text-slate-900">Destination Not Found</h2>
				<p className="text-slate-500 text-sm leading-6">
					Sorry, the route or travel destination you are looking for is not in the Savana database. Perhaps the link is broken or the route was removed.
				</p>
				<Link
					to="/destinations"
					className="inline-flex items-center gap-2 rounded-full bg-rose-500 px-6 py-3 font-semibold text-white shadow-sm hover:bg-rose-400 transition text-xs"
				>
					<ArrowLeft className="h-4 w-4" />
					Back to Destinations
				</Link>
			</div>
		);
	}

	// Related destinations
	const relatedDestinations = destinations.filter(
		(d) => destination.similarIds.includes(d.id) && d.id !== destination.id
	);

	const allImages = [destination.image, ...destination.gallery];

	const handlePrevImage = () => {
		setActiveImgIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
	};

	const handleNextImage = () => {
		setActiveImgIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
	};

	return (
		<div className="space-y-10 pb-16">
			{/* HERO HEADER */}
			<section className="relative w-full h-[60vh] overflow-hidden bg-slate-950">
				<img
					src={destination.image}
					alt={destination.title}
					className="w-full h-full object-cover opacity-60"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
				<div className="absolute bottom-0 left-0 w-full">
					<div className="section-shell pb-10 space-y-4">
						{/* Breadcrumbs */}
						<div className="flex items-center gap-2 text-xs font-semibold text-white/60">
							<Link to="/" className="hover:text-white transition">Home</Link>
							<span>/</span>
							<Link to="/destinations" className="hover:text-white transition">Destinations</Link>
							<span>/</span>
							<span className="text-white">{destination.title}</span>
						</div>
						<div className="inline-block rounded-full bg-rose-500 px-3.5 py-1 text-xs font-semibold text-white uppercase tracking-wider">
							{destination.category}
						</div>
						<h1 className="font-circular text-3xl md:text-5xl lg:text-6xl text-white leading-tight max-w-4xl">
							{destination.title}
						</h1>
						<div className="flex flex-wrap items-center gap-4 text-xs font-medium text-white/80">
							<span className="flex items-center gap-1.5">
								<MapPin className="h-4 w-4 text-rose-400" />
								{destination.location}
							</span>
							<span className="flex items-center gap-1.5">
								<Star className="h-4 w-4 fill-amber-400 text-amber-400" />
								{destination.rating} Rating
							</span>
							<span className="flex items-center gap-1.5">
								<Clock className="h-4 w-4 text-emerald-400" />
								Recommended Visit Duration: {destination.duration}
							</span>
						</div>
					</div>
				</div>
			</section>

			{/* CONTENT & SIDEBAR */}
			<section className="section-shell">
				<div className="grid gap-10 lg:grid-cols-[1.9fr_1.1fr] items-start">
					{/* Left Column: Description & Gallery & Reviews */}
					<div className="space-y-10">
						{/* Description */}
						<div className="space-y-4">
							<h2 className="font-circular text-2xl text-slate-900 border-b border-slate-100 pb-3">
								About Destination
							</h2>
							<p className="text-slate-600 text-sm leading-8 whitespace-pre-line">
								{destination.description}
							</p>
						</div>

						{/* Photo Gallery */}
						<div className="space-y-4">
							<h2 className="font-circular text-2xl text-slate-900 border-b border-slate-100 pb-3">
								Photo Gallery
							</h2>
							<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
								{allImages.map((img, idx) => (
									<div
										key={idx}
										onClick={() => setActiveImgIndex(idx)}
										className="h-28 sm:h-32 rounded-2xl overflow-hidden bg-slate-100 cursor-pointer group relative shadow-sm border border-slate-100/60"
									>
										<img
											src={img}
											alt={`Gallery ${idx}`}
											className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
										/>
										<div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-xs font-bold">
											Zoom
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Activities & Facilities */}
						<div className="grid gap-6 sm:grid-cols-2">
							<div className="glass-panel p-6 space-y-4 shadow-sm">
								<h3 className="font-circular text-lg text-slate-900 flex items-center gap-2">
									<Compass className="h-5 w-5 text-rose-500" />
									Travel Activities
								</h3>
								<ul className="space-y-2">
									{destination.activities.map((activity, idx) => (
										<li key={idx} className="flex items-center gap-2.5 text-xs text-slate-600 font-medium">
											<span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
											{activity}
										</li>
									))}
								</ul>
							</div>

							<div className="glass-panel p-6 space-y-4 shadow-sm">
								<h3 className="font-circular text-lg text-slate-900 flex items-center gap-2">
									<Check className="h-5 w-5 text-emerald-500" />
									Area Facilities
								</h3>
								<ul className="space-y-2">
									{destination.amenities.map((amenity, idx) => (
										<li key={idx} className="flex items-center gap-2.5 text-xs text-slate-600 font-medium">
											<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
											{amenity}
										</li>
									))}
								</ul>
							</div>
						</div>

						{/* Travel Tips & Best Time */}
						<div className="soft-card p-6 md:p-8 space-y-6">
							<h3 className="font-circular text-xl text-slate-900 flex items-center gap-2.5 border-b border-slate-100 pb-3">
								<ShieldAlert className="h-5.5 w-5.5 text-amber-500" />
								Travel Tips & Information
							</h3>
							
							<div className="space-y-4">
								<div className="flex gap-4">
									<CalendarDays className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
									<div>
										<h4 className="font-circular text-sm text-slate-900">Best Time to Visit</h4>
										<p className="text-xs text-slate-500 mt-1">{destination.bestTime}</p>
									</div>
								</div>
								
								<div className="space-y-3 pt-2">
									<h4 className="font-circular text-sm text-slate-900">Important Tips:</h4>
									<ul className="space-y-2.5">
										{destination.tips.map((tip, idx) => (
											<li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 leading-5">
												<span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
												{tip}
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>

						{/* FAQs */}
						<div className="space-y-4">
							<h2 className="font-circular text-2xl text-slate-900 border-b border-slate-100 pb-3">
								Frequently Asked Questions (FAQ)
							</h2>
							<div className="space-y-3">
								{destination.faqs.map((faq, idx) => (
									<div key={idx} className="soft-card overflow-hidden">
										<button
											onClick={() => setFaqOpenIndex(faqOpenIndex === idx ? null : idx)}
											className="w-full text-left p-5 flex items-center justify-between font-circular text-sm text-slate-900 hover:bg-slate-50 transition"
										>
											<span className="flex items-center gap-2.5">
												<HelpCircle className="h-4.5 w-4.5 text-rose-500" />
												{faq.q}
											</span>
											<span className="text-slate-400 font-bold">
												{faqOpenIndex === idx ? "−" : "+"}
											</span>
										</button>
										{faqOpenIndex === idx && (
											<div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-6 bg-slate-50 border-t border-slate-100/50">
												{faq.a}
											</div>
										)}
									</div>
								))}
							</div>
						</div>

						{/* Reviews */}
						<div className="space-y-6">
							<h2 className="font-circular text-2xl text-slate-900 border-b border-slate-100 pb-3">
								Visitor Reviews
							</h2>
							<div className="grid gap-4 md:grid-cols-[1fr_2fr]">
								{/* Rating Stats Card */}
								<div className="soft-card p-6 flex flex-col justify-center items-center text-center space-y-3">
									<p className="font-circular text-5xl text-slate-900">{destination.rating}</p>
									<div className="flex items-center gap-1">
										{[1, 2, 3, 4, 5].map((i) => (
											<Star
												key={i}
												className={`h-4.5 w-4.5 ${
													i <= Math.floor(destination.rating)
														? "fill-amber-400 text-amber-400"
														: "text-slate-200"
												}`}
											/>
										))}
									</div>
									<p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
										Based on {destination.reviewsCount} Reviews
									</p>
								</div>

								{/* Reviews List */}
								<div className="space-y-4">
									{destination.reviews.map((rev, idx) => (
										<div key={idx} className="glass-panel p-5 space-y-3 shadow-xs">
											<div className="flex justify-between items-start">
												<div>
													<p className="font-circular text-sm text-slate-900">{rev.name}</p>
													<p className="text-[10px] text-slate-400 mt-0.5">{rev.date}</p>
												</div>
												<div className="flex items-center gap-0.5 bg-amber-50 rounded-full px-2 py-1">
													<Star className="h-3 w-3 fill-amber-400 text-amber-400" />
													<span className="text-[10px] font-bold text-amber-700">{rev.rating}</span>
												</div>
											</div>
											<p className="text-xs text-slate-600 leading-6 italic">
												“{rev.text}”
											</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* Right Column: Sticky Stats & Map */}
					<aside className="space-y-6 lg:sticky lg:top-24">
						{/* Price and Schedule Sticky Card */}
						<div className="soft-card p-6 md:p-8 space-y-6 shadow-md border-amber-100/50 bg-gradient-to-br from-white to-amber-50/10">
							<div className="flex items-center justify-between border-b border-slate-100 pb-4">
								<div>
									<p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Ticket Price (HTM)</p>
									<p className="font-circular text-2xl text-slate-900 mt-1">
										{destination.price === 0 ? "Free" : destination.priceLabel}
									</p>
								</div>
								<div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center">
									<Ticket className="h-5 w-5 text-rose-500" />
								</div>
							</div>

							<div className="space-y-4">
								<div className="flex items-start gap-4">
									<Clock className="h-5 w-5 text-slate-400 mt-0.5 shrink-0" />
									<div>
										<p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Opening Hours</p>
										<p className="text-xs font-semibold text-slate-800 mt-1">{destination.openingHours}</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<MapPin className="h-5 w-5 text-slate-400 mt-0.5 shrink-0" />
									<div>
										<p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Route Location</p>
										<p className="text-xs font-semibold text-slate-800 mt-1">{destination.location}</p>
									</div>
								</div>
							</div>

							<button
								onClick={() => alert("Information: Tickets can be purchased directly at the official ticket desks at the entry gate.")}
								className="w-full rounded-full bg-rose-500 py-3.5 text-xs font-bold text-white shadow-[0_15px_40px_-15px_rgba(244,63,94,0.4)] hover:bg-rose-400 transition"
							>
								Ticket Desk Info
							</button>
						</div>

						{/* Map Container */}
						<div className="soft-card p-5 space-y-4 shadow-sm">
							<h3 className="font-circular text-sm text-slate-900 flex items-center gap-2">
								<MapPin className="h-4 w-4 text-rose-500" />
								Location Map
							</h3>
							<div className="h-60 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
								<iframe
									src={destination.gmapsUrl}
									width="100%"
									height="100%"
									style={{ border: 0 }}
									allowFullScreen=""
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
									title="Destination Map"
								></iframe>
							</div>
						</div>
					</aside>
				</div>
			</section>

			{/* RELATED DESTINATIONS */}
			{relatedDestinations.length > 0 && (
				<section className="section-shell pt-10 border-t border-slate-100">
					<div className="space-y-6">
						<h2 className="font-circular text-2xl text-slate-900">
							Similar Destinations You Might Like
						</h2>
						
						<div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
							{relatedDestinations.map((related) => (
								<Link
									key={related.id}
									to={`/destinations/${related.id}`}
									className="soft-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col group"
								>
									<div className="h-44 overflow-hidden bg-slate-100 relative">
										<img
											src={related.image}
											alt={related.title}
											className="w-full h-full object-cover transition group-hover:scale-105"
										/>
										<span className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur rounded-full px-2.5 py-1 text-[10px] font-semibold text-white">
											{related.category}
										</span>
									</div>
									<div className="p-5 flex-grow flex flex-col justify-between">
										<div>
											<h4 className="font-circular text-base text-slate-900 group-hover:text-rose-500 transition leading-snug line-clamp-1">
												{related.title}
											</h4>
											<p className="mt-2 text-[10px] text-slate-400 font-semibold uppercase tracking-wider flex items-center gap-1">
												<MapPin className="h-3 w-3 text-rose-400" />
												{related.location}
											</p>
										</div>
										<div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
											<span className="font-bold text-slate-800">{related.price === 0 ? "Free" : related.priceLabel}</span>
											<span className="text-amber-600 font-semibold flex items-center gap-0.5">
												{related.rating}★
											</span>
										</div>
									</div>
								</Link>
							))}
						</div>
					</div>
				</section>
			)}

			{/* GALLERY LIGHTBOX MODAL */}
			{activeImgIndex !== null && (
				<div className="fixed inset-0 z-50 bg-slate-950/95 flex flex-col justify-center items-center p-4">
					<button
						onClick={() => setActiveImgIndex(null)}
						className="absolute top-6 right-6 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition"
					>
						<X className="h-6 w-6" />
					</button>

					<div className="relative max-w-5xl w-full h-[70vh] flex items-center justify-center">
						<button
							onClick={handlePrevImage}
							className="absolute left-2 sm:-left-12 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition"
						>
							<ArrowLeft className="h-6 w-6" />
						</button>

						<img
							src={allImages[activeImgIndex]}
							alt="Gallery Zoom"
							className="max-h-full max-w-full object-contain rounded-2xl"
						/>

						<button
							onClick={handleNextImage}
							className="absolute right-2 sm:-right-12 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition"
						>
							<ArrowRight className="h-6 w-6" />
						</button>
					</div>

					<div className="mt-6 text-white/60 text-xs font-semibold uppercase tracking-widest">
						Photo {activeImgIndex + 1} of {allImages.length}
					</div>
				</div>
			)}
		</div>
	);
};

export default DestinationDetail;
