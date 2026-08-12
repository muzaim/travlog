const testimonials = [
	{
		name: "Nadia Prameswari",
		role: "Solo Traveler",
		quote: "Tampilannya simpel, itinerary-nya jelas, dan trip-nya berasa tenang. Cocok banget buat yang mau liburan tanpa ribet ngatur detail kecil.",
	},
	{
		name: "Raka Mahendra",
		role: "Weekend Explorer",
		quote: "Aku suka karena semuanya terasa rapi dan tidak berlebihan. Destinasinya cantik, waktunya pas, dan tetap ada ruang buat spontan jalan sendiri.",
	},
	{
		name: "Salsa Azzahra",
		role: "Couple Getaway",
		quote: "Bagian terbaiknya itu pengalaman terasa hangat dan personal. Dari tempat nginap sampai spot sunset, semuanya kepilih dengan taste yang bagus.",
	},
];

const Testimonials = () => {
	return (
		<section id="stories" className="section-shell py-20">
			<div className="text-center">
				<p className="section-label">Traveler Stories</p>
				<h2 className="section-title mt-4">
					People come for the view and return for the feeling.
				</h2>
				<p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
					Simple planning does not mean a flat experience. These
					trips are built to feel calm, stylish, and memorable from
					start to finish.
				</p>
			</div>

			<div className="mt-12 grid gap-6 lg:grid-cols-3">
				{testimonials.map((item, index) => (
					<article
						key={item.name}
						className={`soft-card p-7 ${
							index === 1 ? "lg:-translate-y-4" : ""
						}`}
					>
						<div className="flex items-center justify-between">
							<span className="text-4xl leading-none text-amber-400">
								“
							</span>
							<span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
								{item.role}
							</span>
						</div>
						<p className="mt-5 text-base leading-8 text-slate-600">
							{item.quote}
						</p>
						<div className="mt-8">
							<p className="font-circular text-xl text-slate-900">
								{item.name}
							</p>
						</div>
					</article>
				))}
			</div>
		</section>
	);
};

export default Testimonials;
