import React from "react";

import TravelImg from "../assets/img/use/travel.svg";

const Point = () => {
	return (
		<div className="grid grid-cols-12 my-16 ">
			<div className="col-span-12 lg:col-span-6">
				<img src={TravelImg} alt="" />
			</div>
			<div className="col-span-12 lg:col-span-4 my-auto">
				<div className="px-4 text-center">
					<div>
						<h3 className="text-[#F85E9F] text-xl uppercase font-bold font-circular">
							Travel Point
						</h3>
						<h1 className="text-2xl my-3">
							We helping you find your dream location
						</h1>
						<p className="text-gray-400 text-lg px-20 font-inter">
							Contrary to popular belief, Lorem Ipsum is not
							simply random text. It has roots in a piece of
							classical Latin literature from 45 BC.
						</p>
					</div>
				</div>
				<div className="px-4 grid grid-cols-12 mt-5 gap-3 md:gap-6">
					<div className="col-span-12 md:col-span-6 py-10 border rounded-xl text-center">
						<h1 className="text-orange-400 font-circular font-bold text-4xl">
							500+
						</h1>
						<p className="font-inter text-lg">Holiday Package</p>
					</div>
					<div className="col-span-12 md:col-span-6 py-10 border rounded-xl text-center">
						<h1 className="text-orange-400 font-circular font-bold text-4xl">
							100+
						</h1>
						<p className="font-inter text-lg">Luxury Hotel</p>
					</div>
					<div className="col-span-12 md:col-span-6 py-10 border rounded-xl text-center">
						<h1 className="text-orange-400 font-circular font-bold text-4xl">
							7+
						</h1>
						<p className="font-inter text-lg">Premium Airlines</p>
					</div>
					<div className="col-span-12 md:col-span-6 py-10 border rounded-xl text-center">
						<h1 className="text-orange-400 font-circular font-bold text-4xl">
							2,000+
						</h1>
						<p className="font-inter text-lg">Happy Customer</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Point;
