import React from "react";

const Subscribe = () => {
	return (
		<div className=" py-20 ">
			<div className="container mx-auto">
				<h1 className="font-circular text-pink-500 text-lg uppercase tracking-widest font-thin text-center lg:text-2xl">
					Subscribe to our newsletter
				</h1>
				<p className="text-center text-3xl font-bold w-9/12 block mx-auto  leading-tight my-3 lg:text-5xl lg:w-1/2 lg:leading-relaxed">
					Prepare yourself and let's explore the beauty of the world
				</p>
				<div className="flex flex-col lg:flex-row gap-3 justify-center px-4 mt-5 lg:px-20">
					<input
						type="text"
						placeholder="Your email"
						className="py-4 px-4 border rounded-xl w-full"
					/>
					<button className="py-4 px-10  bg-purple-600 rounded-lg text-white font-semibold w-40 mx-auto">
						Subscribe
					</button>
				</div>
			</div>
		</div>
	);
};

export default Subscribe;
