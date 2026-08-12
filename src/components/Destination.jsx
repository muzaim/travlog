import IkanImg from "../assets/img/use/ikan.svg";
import GunungImg from "../assets/img/use/gunung.svg";
import PantaiImg from "../assets/img/use/pantai.svg";

const destinations = [
	{
		image: IkanImg,
		price: "From $550",
		title: "Paradise Beach Escape",
		location: "Bantayan Island",
		rating: "4.8",
		copy: "Soft sand, warm light, and a relaxed route that keeps the mood effortless.",
	},
	{
		image: GunungImg,
		price: "From $820",
		title: "Mountain Air Retreat",
		location: "Highland Getaway",
		rating: "4.9",
		copy: "A cool-climate stay with scenic mornings, café stops, and easy exploration.",
	},
	{
		image: PantaiImg,
		price: "From $320",
		title: "Ubud & Coast Weekend",
		location: "Bali, Indonesia",
		rating: "4.7",
		copy: "A balanced mix of nature, local food, and calm corners for slow travelers.",
	},
];

const Destination = () => {
	return (
		<section id="destinations" className="section-shell py-20">
			<div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
				<div>
					<p className="section-label">Top Destination</p>
					<h2 className="section-title mt-4">
						Beautiful places with a softer, more stylish pace.
					</h2>
				</div>
				<p className="max-w-md text-base leading-8 text-slate-600">
					These routes are built for people who want scenic moments,
					good stays, and enough breathing room to actually enjoy the
					trip.
				</p>
			</div>

			<div className="mt-12 grid gap-6 lg:grid-cols-3">
				{destinations.map((destination) => (
					<article
						key={destination.title}
						className="overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-[0_24px_80px_-35px_rgba(15,23,42,0.32)]"
					>
						<div className="overflow-hidden bg-amber-50">
							<img
								src={destination.image}
								alt={destination.title}
								className="h-72 w-full object-cover transition duration-500 hover:scale-105"
							/>
						</div>
						<div className="p-7">
							<div className="flex items-start justify-between gap-4">
								<div>
									<p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-400">
										{destination.price}
									</p>
									<h3 className="mt-3 font-circular text-2xl text-slate-900">
										{destination.title}
									</h3>
								</div>
								<span className="rounded-full bg-amber-100 px-3 py-2 text-sm font-semibold text-amber-700">
									{destination.rating}★
								</span>
							</div>
							<p className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
								{destination.location}
							</p>
							<p className="mt-4 text-sm leading-7 text-slate-600">
								{destination.copy}
							</p>
						</div>
					</article>
				))}
			</div>
		</section>
	);
};

export default Destination;
