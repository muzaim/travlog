const Subscribe = () => {
	return (
		<section className="section-shell py-20">
			<div className="overflow-hidden rounded-[2.5rem] bg-slate-900 px-6 py-12 text-white sm:px-10 lg:px-14 lg:py-16">
				<div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
					<div>
						<p className="text-sm uppercase tracking-[0.35em] text-amber-300">
							Subscribe to our newsletter
						</p>
						<h2 className="mt-4 font-circular text-3xl leading-tight sm:text-4xl lg:text-5xl">
							Plan your next escape with updates that stay useful
							and inspiring.
						</h2>
						<p className="mt-5 max-w-xl text-base leading-8 text-white/70">
							Get destination ideas, seasonal route suggestions, and
							clean travel inspiration without noisy spam.
						</p>
					</div>

					<form className="rounded-[2rem] bg-white p-4 sm:p-5">
						<div className="flex flex-col gap-3 sm:flex-row">
							<input
								type="email"
								placeholder="Your email address"
								className="w-full rounded-full border border-slate-200 px-5 py-4 text-slate-700 outline-none transition focus:border-rose-300"
							/>
							<button className="rounded-full bg-rose-500 px-7 py-4 font-semibold text-white transition hover:bg-rose-400">
								Subscribe
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Subscribe;
