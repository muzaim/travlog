import React from "react";

import FeatureImg from "../assets/img/use/features.svg";
import LocationIcon from "../assets/img/icons/location.svg";
import ScheduleIcon from "../assets/img/icons/schedule.svg";
import TicketIcon from "../assets/img/icons/ticket.svg";

const Features = () => {
	return (
		<div className="py-20 px-4 grid grid-cols-12 container mx-auto">
			<div className="col-span-12 mx-auto lg:col-span-6 lg:order-2">
				<img src={FeatureImg} alt="" />
			</div>
			<div className="col-span-12 mt-5 lg:col-span-6 lg:order-1 lg:my-auto lg:px-4">
				<div className="text-center lg:text-start">
					<h1 className="uppercase text-[#F85E9F] font-circular text-xl">
						key features
					</h1>
					<h3 className="text-3xl font-bold font-circular my-4">
						We offer best services
					</h3>
					<p className="text-base font-inter text-gray-400 px-10 lg:px-0">
						Contrary to popular belief, Lorem Ipsum is not simply
						random text. It has roots in a piece of classical Latin
						literature from 45 BC.
					</p>
				</div>
				<div className="col-span-12 grid justify-items-center lg:justify-start">
					<div className="col-span-12 py-10 px-4 lg:px-0 rounded-xl flex flex-col md:flex-row md:gap-5">
						<img src={TicketIcon} alt="" className="w-24" />
						<div className="">
							<h1 className="text-xl my-3">
								We offer best location
							</h1>
							<p className="text-base text-gray-400 font-inter">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Assumenda, neque.
							</p>
						</div>
					</div>
					<div className="col-span-12 py-10 px-4 lg:px-0 rounded-xl flex flex-col md:flex-row md:gap-5 border shadow-lg">
						<img src={ScheduleIcon} alt="" className="w-24" />
						<div className="">
							<h1 className="text-xl my-3">
								We offer best location
							</h1>
							<p className="text-base text-gray-400 font-inter">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Assumenda, neque.
							</p>
						</div>
					</div>
					<div className="col-span-12 py-10 px-4 lg:px-0 rounded-xl flex flex-col md:flex-row md:gap-5">
						<img src={LocationIcon} alt="" className="w-24" />
						<div className="">
							<h1 className="text-xl my-3">
								We offer best location
							</h1>
							<p className="text-base text-gray-400 font-inter">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Assumenda, neque.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
