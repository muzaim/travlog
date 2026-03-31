import React from "react";

import FeatureImg from "../assets/img/use/features.svg";
import LocationIcon from "../assets/img/icons/location.svg";
import ScheduleIcon from "../assets/img/icons/schedule.svg";
import TicketIcon from "../assets/img/icons/ticket.svg";

const features = [
	{
		icon: TicketIcon,
		title: "Smart route selection",
		copy: "Each route is shaped around scenic value, comfort, and the amount of time people realistically want to spend outside.",
	},
	{
		icon: ScheduleIcon,
		title: "Balanced trip schedules",
		copy: "We avoid packing the day too tightly, so you still have space for rest, detours, and slower moments.",
	},
	{
		icon: LocationIcon,
		title: "Locations with atmosphere",
		copy: "The places we recommend are chosen not just for popularity, but for how they feel when you are actually there.",
	},
];

const Features = () => {
	return (
		<section className="section-shell py-20">
			<div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
				<div className="order-2 lg:order-1">
					<p className="section-label">Key Features</p>
					<h2 className="section-title mt-4">
						Every detail is made to keep the experience light and
						memorable.
					</h2>
					<p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
						A good trip is not only about where you go. It is also
						about pacing, comfort, and choosing details that make the
						journey feel thoughtful from start to finish.
					</p>

					<div className="mt-8 space-y-4">
						{features.map((feature, index) => (
							<div
								key={feature.title}
								className={`rounded-[1.75rem] border p-5 sm:p-6 ${
									index === 1
										? "border-slate-900 bg-slate-900 text-white shadow-[0_24px_80px_-35px_rgba(15,23,42,0.7)]"
										: "border-white/60 bg-white"
								}`}
							>
								<div className="flex gap-4">
									<img
										src={feature.icon}
										alt=""
										className="h-16 w-16 shrink-0"
									/>
									<div>
										<h3 className="font-circular text-2xl">
											{feature.title}
										</h3>
										<p
											className={`mt-3 text-sm leading-7 ${
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

				<div className="order-1 lg:order-2">
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
	);
};

export default Features;
