import { useState } from "react";
import { X, ArrowLeft, ArrowRight, ZoomIn } from "lucide-react";

const galleryImages = [
	{
		url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
		title: "Bali Rice Terraces",
		location: "Ubud, Bali",
	},
	{
		url: "https://images.unsplash.com/photo-1571366343168-631c5bcca7a4?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		title: "Mount Bromo Sunrise",
		location: "Probolinggo, East Java",
	},
	{
		url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
		title: "Raja Ampat Exotic Beach",
		location: "Raja Ampat, West Papua",
	},
	{
		url: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=1200&q=80",
		title: "Borobudur Temple Stupa",
		location: "Magelang, Central Java",
	},
	{
		url: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80",
		title: "Kelingking Beach Cliffs",
		location: "Nusa Penida, Bali",
	},
	{
		url: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
		title: "Wae Rebo Traditional Village",
		location: "Manggarai, East Nusa Tenggara",
	},
	{
		url: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
		title: "Lake Toba Landscape",
		location: "Toba Samosir, North Sumatra",
	},
	{
		url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
		title: "Belitung Traditional Boat",
		location: "Tanjung Pandan, Bangka Belitung",
	},
	{
		url: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
		title: "Mount Rinjani Summit",
		location: "Lombok, West Nusa Tenggara",
	},
	{
		url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
		title: "Borneo Rainforest Orangutan",
		location: "Tanjung Puting, Central Kalimantan",
	},
	{
		url: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=1200&q=80",
		title: "Bunaken Coral Walls",
		location: "Manado, North Sulawesi",
	},
	{
		url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
		title: "Mountain Lakeside Camping",
		location: "Ranu Kumbolo, East Java",
	},
];

const Gallery = () => {
	const [activeImgIndex, setActiveImgIndex] = useState(null);

	const handlePrev = () => {
		setActiveImgIndex((prev) =>
			prev === 0 ? galleryImages.length - 1 : prev - 1
		);
	};

	const handleNext = () => {
		setActiveImgIndex((prev) =>
			prev === galleryImages.length - 1 ? 0 : prev + 1
		);
	};

	return (
		<div className="section-shell py-8 md:py-12 space-y-12">
			{/* PAGE HEADER */}
			<div className="max-w-2xl">
				<p className="section-label">Savana Gallery</p>
				<h1 className="section-title mt-4">
					Documenting the Beauty of Indonesia
				</h1>
				<p className="mt-4 text-slate-600 text-sm leading-7">
					Visual portraits of our stunning destinations from across
					the Indonesian archipelago. Click on an image to see it in
					full high-resolution.
				</p>
			</div>

			{/* MASONRY GRID */}
			<div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{galleryImages.map((img, idx) => (
					<div
						key={idx}
						onClick={() => setActiveImgIndex(idx)}
						className="relative rounded-[1.75rem] overflow-hidden bg-slate-100 border border-white/60 shadow-sm cursor-pointer group h-64 md:h-72"
					>
						<img
							src={img.url}
							alt={img.title}
							className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
						/>

						{/* Overlay on Hover */}
						<div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 p-5 flex flex-col justify-end text-white">
							<ZoomIn className="h-6 w-6 text-rose-400 absolute top-4 right-4 bg-white/25 backdrop-blur rounded-full p-1" />
							<h3 className="font-circular text-lg">
								{img.title}
							</h3>
							<p className="text-[10px] text-white/70 uppercase tracking-widest font-semibold mt-1">
								{img.location}
							</p>
						</div>
					</div>
				))}
			</div>

			{/* FULLSCREEN LIGHTBOX MODAL */}
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
							onClick={handlePrev}
							className="absolute left-2 sm:-left-12 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition"
						>
							<ArrowLeft className="h-6 w-6" />
						</button>

						<img
							src={galleryImages[activeImgIndex].url}
							alt="Gallery Zoomed"
							className="max-h-full max-w-full object-contain rounded-2xl"
						/>

						<button
							onClick={handleNext}
							className="absolute right-2 sm:-right-12 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition"
						>
							<ArrowRight className="h-6 w-6" />
						</button>
					</div>

					<div className="mt-6 text-center space-y-1 text-white">
						<h3 className="font-circular text-xl">
							{galleryImages[activeImgIndex].title}
						</h3>
						<p className="text-white/60 text-xs font-semibold uppercase tracking-wider">
							{galleryImages[activeImgIndex].location}
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default Gallery;
