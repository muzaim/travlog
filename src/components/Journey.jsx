import React from "react";

const plans = [
	{
		day: "Day 1",
		title: "Sunrise arrival and easy city warm-up",
		copy: "Check in, take a slow brunch, and start with a scenic walk so the trip feels relaxed from the first hour.",
	},
	{
		day: "Day 2",
		title: "Nature route with hidden local stops",
		copy: "Waterfalls, a short hill trek, and small food spots curated for people who want views without rushing.",
	},
	{
		day: "Day 3",
		title: "Flexible free day with curated options",
		copy: "Choose beach time, café hopping, or culture tours while we keep transport and timing easy to manage.",
	},
];

const Journey = () => {
	return (
		<section id="journey" className="section-shell py-20">
			<div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
				<div>
					<p className="section-label">Easy Journey</p>
					<h2 className="section-title mt-4">
						A simple travel flow that still feels special.
					</h2>
					<p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
						We design trips for people who want beauty, comfort,
						and a little spontaneity without dealing with messy
						planning. Everything is arranged to feel smooth from
						departure to the final sunset.
					</p>

					<div className="mt-8 grid gap-4 sm:grid-cols-3">
						<div className="soft-card p-5">
							<p className="text-3xl font-circular text-amber-500">
								24/7
							</p>
							<p className="mt-2 text-sm text-slate-600">
								Travel assistance during your trip
							</p>
						</div>
						<div className="soft-card p-5">
							<p className="text-3xl font-circular text-rose-500">
								60+
							</p>
							<p className="mt-2 text-sm text-slate-600">
								Curated routes across island and city escapes
							</p>
						</div>
						<div className="soft-card p-5">
							<p className="text-3xl font-circular text-indigo-500">
								4.9
							</p>
							<p className="mt-2 text-sm text-slate-600">
								Average rating from returning travelers
							</p>
						</div>
					</div>
				</div>

				<div className="glass-panel p-6 sm:p-8">
					<div className="flex items-center justify-between">
						<div>
							<p className="font-circular text-2xl text-slate-900">
								Weekend Escape Plan
							</p>
							<p className="mt-2 text-sm text-slate-500">
								Designed for travelers who want a full trip
								without feeling overbooked.
							</p>
						</div>
						<span className="rounded-full bg-amber-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
							Popular
						</span>
					</div>

					<div className="mt-8 space-y-4">
						{plans.map((plan) => (
							<div
								key={plan.day}
								className="rounded-[1.5rem] border border-slate-100 bg-white p-5"
							>
								<p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-400">
									{plan.day}
								</p>
								<h3 className="mt-3 font-circular text-xl text-slate-900">
									{plan.title}
								</h3>
								<p className="mt-3 text-sm leading-7 text-slate-600">
									{plan.copy}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Journey;
