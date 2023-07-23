import React from "react";

import IkanImg from "../assets/img/use/ikan.svg";
import GunungImg from "../assets/img/use/gunung.svg";
import PantaiImg from "../assets/img/use/pantai.svg";

const Destination = () => {
	return (
		<div className="container mx-auto my-5">
			<div className="grid grid-cols-12 my-5">
				<div className="col-span-12 lg:col-span-4 text-center lg:text-start">
					<h1 className="text-[#F85E9F] font-circular text-lg lg:text-2xl">
						Top Destination
					</h1>
					<p className="text-xl font-circular font-bold lg:text-3xl">
						Explore Top Destination
					</p>
				</div>
				<div className="col-span-12 lg:col-span-8 px-4 my-3 w-full flex justify-between lg:justify-end lg:gap-5">
					<button className="px-5 py-4 rounded-full border">
						{"<-"}
					</button>
					<button className="px-5 py-4 rounded-full bg-purple-500 text-white">
						{"->"}
					</button>
				</div>
			</div>
			<div className="grid grid-cols-12 px-4 gap-5 justify-items-center">
				<div className="col-span-12 lg:col-span-4 w-[20rem] shadow-lg rounded-xl">
					<img src={IkanImg} alt="" className="overflow-hidden" />
					<div className="py-3 px-8">
						<h3 className="text-lg text-[#F85E9F] font-circular">
							$550.16
						</h3>
						<h1 className="text-xl font-circular mt-1">
							Paradise Beach, Bantayan Island
						</h1>
						<p className="text-lg text-gray-400 font-inter my-3 font-thin">
							Rome, Italy
						</p>
						<span className="text-lg text-orange-400 font-bold">
							4.8⭐
						</span>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-4 w-[20rem] shadow-lg rounded-xl">
					<img src={GunungImg} alt="" className="overflow-hidden" />
					<div className="py-3 px-8">
						<h3 className="text-lg text-[#F85E9F] font-circular">
							$829.56
						</h3>
						<h1 className="text-xl font-circular mt-1">
							Penang Malaysia, Bantul Island
						</h1>
						<p className="text-lg text-gray-400 font-inter my-3 font-thin">
							Yogyakarta, Italy
						</p>
						<span className="text-lg text-orange-400 font-bold">
							4.9⭐
						</span>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-4 w-[20rem] shadow-lg rounded-xl">
					<img src={PantaiImg} alt="" className="overflow-hidden" />
					<div className="py-3 px-8">
						<h3 className="text-lg text-[#F85E9F] font-circular">
							$320.39
						</h3>
						<h1 className="text-xl font-circular mt-1">
							Ubud, Indonesia
						</h1>
						<p className="text-lg text-gray-400 font-inter my-3 font-thin">
							Bali, Italy
						</p>
						<span className="text-lg text-orange-400 font-bold">
							4.7⭐
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Destination;
