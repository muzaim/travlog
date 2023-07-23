import React from "react";

import DestinationImg from "../assets/img/icons/destination.svg";
import WeatherImg from "../assets/img/icons/weather.svg";
import BookingImg from "../assets/img/icons/booking.svg";

const Services = () => {
	return (
		<div className="container mx-auto my-10 px-4 lg:px-0">
			<div className="grid grid-cols-12">
				<div className="col-span-12 xl:col-span-4 my-auto">
					<div className="text-center lg:text-center flex flex-col gap-3 xl:text-start">
						<p className="text-[#F85E9F] font-circular text-2xl lg:text-4xl">
							Services
						</p>
						<h1 className="font-circular text-4xl pr-4">
							Our top value categories for you
						</h1>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-12  xl:col-span-8 mt-5">
					<div className="flex flex-col lg:flex-row items-center gap-5">
						<div className="w-[20rem] py-16 px-20 text-center rounded-lg shadow-lg">
							<img
								src={DestinationImg}
								alt=""
								className="mx-auto"
							/>
							<div>
								<h1 className="font-circular text-2xl my-5">
									Best Tour Guide
								</h1>
								<p className="font-inter text-gray-400">
									What looked like a small patch of purple
									grass, above five feet.
								</p>
							</div>
						</div>
						<div className="w-[20rem] py-16 px-20 text-center rounded-lg shadow-lg">
							<img src={WeatherImg} alt="" className="mx-auto" />
							<div>
								<h1 className="font-circular text-2xl my-5">
									Best Tour Guide
								</h1>
								<p className="font-inter text-gray-400">
									What looked like a small patch of purple
									grass, above five feet.
								</p>
							</div>
						</div>
						<div className="w-[20rem] py-16 px-20 text-center rounded-lg shadow-lg">
							<img src={BookingImg} alt="" className="mx-auto" />
							<div>
								<h1 className="font-circular text-2xl my-5">
									Best Tour Guide
								</h1>
								<p className="font-inter text-gray-400">
									What looked like a small patch of purple
									grass, above five feet.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
