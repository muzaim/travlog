import React from "react";

import DestinationImg from "../assets/img/icons/destination.svg";
import WeatherImg from "../assets/img/icons/weather.svg";
import BookingImg from "../assets/img/icons/booking.svg";

const services = [
	{
		icon: DestinationImg,
		title: "Curated destinations",
		copy: "Scenic places that feel fresh, photogenic, and still comfortable for a laid-back holiday rhythm.",
	},
	{
		icon: WeatherImg,
		title: "Season-aware planning",
		copy: "We match routes with weather windows so your beach day, city walk, and sunset stop land at the right time.",
	},
	{
		icon: BookingImg,
		title: "Smooth booking flow",
		copy: "Transport, stay, and experience details are grouped in one neat plan so the trip stays easy to follow.",
	},
];

const Services = () => {
	return (
		<section id="services" className="section-shell py-20">
			<div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
				<div>
					<p className="section-label">Services</p>
					<h2 className="section-title mt-4">
						Simple tools for a trip that looks good and feels easy.
					</h2>
					<p className="mt-5 max-w-md text-base leading-8 text-slate-600">
						The goal is not to make travel complicated. We only keep
						the parts that help you move smoothly and enjoy more of
						the destination.
					</p>
				</div>

				<div className="grid gap-5 md:grid-cols-3">
					{services.map((service, index) => (
						<article
							key={service.title}
							className={`soft-card p-7 ${
								index === 1 ? "bg-slate-900 text-white" : ""
							}`}
						>
							<img
								src={service.icon}
								alt=""
								className="h-20 w-20"
							/>
							<h3
								className={`mt-8 font-circular text-2xl ${
									index === 1 ? "text-white" : "text-slate-900"
								}`}
							>
								{service.title}
							</h3>
							<p
								className={`mt-4 text-sm leading-7 ${
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
	);
};

export default Services;
