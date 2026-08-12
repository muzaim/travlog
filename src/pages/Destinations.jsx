import { useState, useEffect, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Search, SlidersHorizontal, ArrowUpDown, Star, MapPin, RefreshCw, Layers } from "lucide-react";
import { destinations } from "../data/destinations";

const Destinations = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [isLoading, setIsLoading] = useState(true);

	// Retrieve initial filters from URL params
	const searchUrl = searchParams.get("search") || "";
	const categoryUrl = searchParams.get("category") || "";

	// States for filters (synced with URL or managed locally)
	const [searchQuery, setSearchQuery] = useState(searchUrl);
	const [selectedCategory, setSelectedCategory] = useState(categoryUrl);
	const [selectedProvince, setSelectedProvince] = useState("All");
	const [selectedBudget, setSelectedBudget] = useState("All");
	const [selectedRating, setSelectedRating] = useState("All");
	const [sortBy, setSortBy] = useState("rating-desc");

	// Reset page loading states to simulate realistic API calls
	useEffect(() => {
		setIsLoading(true);
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 600);
		return () => clearTimeout(timer);
	}, [selectedCategory, selectedProvince, selectedBudget, selectedRating, sortBy]);

	// Sync search input from query param changes
	useEffect(() => {
		setSearchQuery(searchUrl);
	}, [searchUrl]);

	useEffect(() => {
		setSelectedCategory(categoryUrl);
	}, [categoryUrl]);

	// Categories & Provinces Lists
	const categories = ["All", "Beach", "Mountain", "Culture", "Nature", "Culinary"];
	
	const provinces = useMemo(() => {
		const uniqueProvinces = Array.from(new Set(destinations.map((d) => d.province)));
		return ["All", ...uniqueProvinces.sort()];
	}, []);

	// Filter & Sort Logic
	const filteredDestinations = useMemo(() => {
		let result = [...destinations];

		// 1. Search Query
		if (searchQuery.trim()) {
			const query = searchQuery.toLowerCase().trim();
			result = result.filter(
				(d) =>
					d.title.toLowerCase().includes(query) ||
					d.location.toLowerCase().includes(query) ||
					d.province.toLowerCase().includes(query) ||
					d.copy.toLowerCase().includes(query)
			);
		}

		// 2. Category
		if (selectedCategory && selectedCategory !== "All") {
			result = result.filter((d) => d.category === selectedCategory);
		}

		// 3. Province
		if (selectedProvince && selectedProvince !== "All") {
			result = result.filter((d) => d.province === selectedProvince);
		}

		// 4. Budget Range
		if (selectedBudget && selectedBudget !== "All") {
			result = result.filter((d) => {
				if (selectedBudget === "Free") return d.price === 0;
				if (selectedBudget === "under-50k") return d.price > 0 && d.price <= 50000;
				if (selectedBudget === "50k-200k") return d.price > 50000 && d.price <= 200000;
				if (selectedBudget === "above-200k") return d.price > 200000;
				return true;
			});
		}

		// 5. Rating
		if (selectedRating && selectedRating !== "All") {
			const minRating = parseFloat(selectedRating);
			result = result.filter((d) => d.rating >= minRating);
		}

		// 6. Sorting
		result.sort((a, b) => {
			if (sortBy === "price-asc") return a.price - b.price;
			if (sortBy === "price-desc") return b.price - a.price;
			if (sortBy === "rating-desc") return b.rating - a.rating;
			if (sortBy === "title-asc") return a.title.localeCompare(b.title);
			return 0;
		});

		return result;
	}, [searchQuery, selectedCategory, selectedProvince, selectedBudget, selectedRating, sortBy]);

	const handleSearchChange = (e) => {
		const val = e.target.value;
		setSearchQuery(val);
		
		// Update URL params
		const newParams = new URLSearchParams(searchParams);
		if (val) {
			newParams.set("search", val);
		} else {
			newParams.delete("search");
		}
		setSearchParams(newParams);
	};

	const handleCategorySelect = (cat) => {
		setSelectedCategory(cat);
		
		// Update URL params
		const newParams = new URLSearchParams(searchParams);
		if (cat && cat !== "All") {
			newParams.set("category", cat);
		} else {
			newParams.delete("category");
		}
		setSearchParams(newParams);
	};

	const handleResetFilters = () => {
		setSearchQuery("");
		setSelectedCategory("All");
		setSelectedProvince("All");
		setSelectedBudget("All");
		setSelectedRating("All");
		setSortBy("rating-desc");
		setSearchParams({});
	};

	return (
		<div className="section-shell py-8 md:py-12 space-y-8">
			{/* PAGE HEADER */}
			<div className="max-w-2xl">
				<p className="section-label">Explore Indonesia</p>
				<h1 className="section-title mt-4">Select the Best Destination For Your Vacation</h1>
				<p className="mt-4 text-slate-600 text-sm leading-7">
					Discover the natural wonders and rich cultural heritage across the Indonesian archipelago. Use the filters below to plan a trip that matches your wishes and budget.
				</p>
			</div>

			{/* SEARCH & FILTERS CONTROLS */}
			<div className="glass-panel p-5 md:p-6 space-y-6 shadow-sm">
				{/* Top Row: Search & Sort */}
				<div className="grid gap-4 md:grid-cols-[1.5fr_1fr_0.8fr] items-center">
					{/* Search Input */}
					<div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 w-full">
						<Search className="h-5 w-5 text-slate-400 shrink-0" />
						<input
							type="text"
							placeholder="Search destination, area, or province..."
							className="bg-transparent text-slate-700 outline-none w-full text-sm font-medium"
							value={searchQuery}
							onChange={handleSearchChange}
						/>
					</div>

					{/* Sorting Dropdown */}
					<div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 w-full">
						<ArrowUpDown className="h-4 w-4 text-slate-400 shrink-0" />
						<select
							className="bg-transparent text-slate-700 outline-none w-full text-xs font-semibold"
							value={sortBy}
							onChange={(e) => setSortBy(e.target.value)}
						>
							<option value="rating-desc">Highest Rating</option>
							<option value="price-asc">Price: Low to High</option>
							<option value="price-desc">Price: High to Low</option>
							<option value="title-asc">Name (A - Z)</option>
						</select>
					</div>

					{/* Reset Button */}
					<button
						onClick={handleResetFilters}
						className="rounded-full border border-slate-200 bg-slate-50 py-3 text-xs font-bold text-slate-600 hover:bg-slate-100 transition flex items-center justify-center gap-2"
					>
						<RefreshCw className="h-3.5 w-3.5" />
						Reset Filters
					</button>
				</div>

				{/* Middle Row: Filters Grid */}
				<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 pt-2 border-t border-slate-100/60">
					{/* Province Filter */}
					<div className="space-y-2">
						<label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
							<MapPin className="h-3.5 w-3.5 text-rose-400" />
							Province
						</label>
						<select
							className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs text-slate-700 outline-none focus:border-rose-300"
							value={selectedProvince}
							onChange={(e) => setSelectedProvince(e.target.value)}
						>
							{provinces.map((prov) => (
								<option key={prov} value={prov}>
									{prov === "All" ? "All Provinces" : prov}
								</option>
							))}
						</select>
					</div>

					{/* Budget Filter */}
					<div className="space-y-2">
						<label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
							<Layers className="h-3.5 w-3.5 text-rose-400" />
							Entrance Fee (HTM)
						</label>
						<select
							className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs text-slate-700 outline-none focus:border-rose-300"
							value={selectedBudget}
							onChange={(e) => setSelectedBudget(e.target.value)}
						>
							<option value="All">All Budgets</option>
							<option value="Free">Free</option>
							<option value="under-50k">Under Rp 50,000</option>
							<option value="50k-200k">Rp 50,000 - Rp 200,000</option>
							<option value="above-200k">Above Rp 200,000</option>
						</select>
					</div>

					{/* Rating Filter */}
					<div className="space-y-2">
						<label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
							<Star className="h-3.5 w-3.5 text-amber-400" />
							Minimum Rating
						</label>
						<select
							className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs text-slate-700 outline-none focus:border-rose-300"
							value={selectedRating}
							onChange={(e) => setSelectedRating(e.target.value)}
						>
							<option value="All">All Ratings</option>
							<option value="4.7">4.7★ and up</option>
							<option value="4.8">4.8★ and up</option>
							<option value="4.9">4.9★ and up</option>
						</select>
					</div>

					{/* Category Filter */}
					<div className="space-y-2">
						<label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
							<SlidersHorizontal className="h-3.5 w-3.5 text-rose-400" />
							Travel Categories
						</label>
						<select
							className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs text-slate-700 outline-none focus:border-rose-300"
							value={selectedCategory}
							onChange={(e) => handleCategorySelect(e.target.value)}
						>
							{categories.map((c) => (
								<option key={c} value={c}>
									{c === "All" ? "All Categories" : c}
								</option>
							))}
						</select>
					</div>
				</div>

				{/* Bottom Category Badges (Horizontal Scrollable) */}
				<div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100/60">
					<span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mr-2">Quick Category:</span>
					{categories.map((cat) => (
						<button
							key={cat}
							onClick={() => handleCategorySelect(cat)}
							className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
								(selectedCategory === cat || (!selectedCategory && cat === "All"))
									? "bg-slate-900 text-white shadow-sm"
									: "bg-white border border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-700"
							}`}
						>
							{cat}
						</button>
					))}
				</div>
			</div>

			{/* RESULTS SUMMARY */}
			<div className="flex items-center justify-between text-sm text-slate-500">
				<p>Showing <span className="font-bold text-slate-800">{filteredDestinations.length}</span> beautiful destinations</p>
			</div>

			{/* DESTINATIONS GRID */}
			{isLoading ? (
				/* SKELETON LOADER GRID */
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{[1, 2, 3, 4, 5, 6].map((i) => (
						<div key={i} className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-5 space-y-4 animate-pulse">
							<div className="h-60 rounded-[1.5rem] bg-slate-200" />
							<div className="space-y-3">
								<div className="h-4 bg-slate-200 rounded w-1/4" />
								<div className="h-6 bg-slate-200 rounded w-3/4" />
								<div className="h-4 bg-slate-200 rounded w-1/2" />
								<div className="h-16 bg-slate-200 rounded w-full" />
							</div>
							<div className="flex justify-between items-center pt-4 border-t border-slate-100">
								<div className="h-8 bg-slate-200 rounded w-1/3" />
								<div className="h-10 bg-slate-200 rounded-full w-1/3" />
							</div>
						</div>
					))}
				</div>
			) : filteredDestinations.length > 0 ? (
				/* DYNAMIC CARDS GRID */
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{filteredDestinations.map((destination) => (
						<article
							key={destination.id}
							className="overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-[0_24px_80px_-35px_rgba(15,23,42,0.2)] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col h-full"
						>
							{/* Card Image */}
							<div className="overflow-hidden bg-amber-50 h-64 relative group">
								<img
									src={destination.image}
									alt={destination.title}
									className="h-full w-full object-cover transition duration-75 group-hover:scale-105"
								/>
								<div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full px-3 py-1.5 flex items-center gap-1 shadow-sm">
									<Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400 shrink-0" />
									<span className="text-xs font-bold text-slate-800">{destination.rating}</span>
									<span className="text-[10px] text-slate-400">({destination.reviewsCount})</span>
								</div>
								<div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur rounded-full px-3.5 py-1.5 text-xs font-semibold text-white">
									{destination.category}
								</div>
							</div>

							{/* Card Content */}
							<div className="p-7 flex flex-col flex-grow justify-between">
								<div>
									<h3 className="font-circular text-xl text-slate-900 leading-snug">
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

								{/* Card Footer */}
								<div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
									<div>
										<p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold font-circular">Ticket Price</p>
										<p className="text-base font-bold text-slate-900 mt-1">{destination.price === 0 ? "Free" : destination.priceLabel}</p>
									</div>
									<Link
										to={`/destinations/${destination.id}`}
										className="rounded-full bg-rose-500 px-5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-rose-400 transition flex items-center gap-1.5"
									>
										View Details
									</Link>
								</div>
							</div>
						</article>
					))}
				</div>
			) : (
				/* EMPTY STATE */
				<div className="glass-panel p-16 text-center max-w-xl mx-auto space-y-6 shadow-sm">
					<div className="w-20 h-20 rounded-full bg-amber-50 flex items-center justify-center text-4xl mx-auto">
						🏝️
					</div>
					<h3 className="font-circular text-2xl text-slate-900">Destinations Not Found</h3>
					<p className="text-slate-500 text-sm leading-6 max-w-md mx-auto">
						Sorry, we couldn&apos;t find any travel destinations matching &quot;{searchQuery}&quot; or your selected filters. Try adjusting your keywords or resetting filters.
					</p>
					<button
						onClick={handleResetFilters}
						className="rounded-full bg-rose-500 px-6 py-3 font-semibold text-white shadow-sm hover:bg-rose-400 transition text-xs"
					>
						Reset All Filters
					</button>
				</div>
			)}
		</div>
	);
};

export default Destinations;
