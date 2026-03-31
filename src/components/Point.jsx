import React from "react";

import TravelImg from "../assets/img/use/travel.svg";

const stats = [
	{ value: "500+", label: "Holiday packages" },
	{ value: "100+", label: "Boutique stays" },
	{ value: "7+", label: "Airline partners" },
	{ value: "2,000+", label: "Happy travelers" },
];

const Point = () => {
	return (
		<section className="section-shell py-20">
			<div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
				<div className="glass-panel overflow-hidden p-4 sm:p-6">
					<img
						src={TravelImg}
						alt="Traveler illustration"
						className="mx-auto w-full max-w-2xl"
					/>
				</div>

				<div>
					<p className="section-label">Travel Point</p>
					<h2 className="section-title mt-4">
						We help you choose a dream route without losing the
						sense of ease.
					</h2>
					<p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
						From short weekend escapes to slower scenic journeys, we
						shape the trip around comfort, timing, and atmosphere so
						you can spend less time organizing and more time being
						there.
					</p>

					<div className="mt-8 grid gap-4 sm:grid-cols-2">
						{stats.map((item) => (
							<div key={item.label} className="soft-card p-6">
								<p className="font-circular text-4xl text-amber-500">
									{item.value}
								</p>
								<p className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-500">
									{item.label}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Point;
