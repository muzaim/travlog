import HeroImg from "../assets/img/use/hero.svg";
import Tas from "../assets/img/icons/tas.svg";
import Play from "../assets/img/icons/play.svg";
import U1 from "../assets/img/use/u1.svg";
import U2 from "../assets/img/use/u2.svg";
import U3 from "../assets/img/use/u3.svg";
import U4 from "../assets/img/use/u4.svg";
import U5 from "../assets/img/use/u5.svg";

const brands = [U1, U2, U3, U4, U5];

const Hero = () => {
	return (
		<section id="home" className="section-shell pb-10 pt-12 md:pt-16">
			<div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
				<div>
					<div className="inline-flex items-center gap-3 rounded-full border border-rose-100 bg-white px-5 py-3 shadow-sm">
						<span className="font-circular text-sm text-rose-500">
							Explore the world
						</span>
						<img src={Tas} alt="" className="h-5 w-5" />
					</div>

					<h1 className="mt-6 max-w-2xl text-5xl leading-[1.05] text-slate-900 md:text-6xl lg:text-7xl">
						Find calm, beautiful trips that still feel full of
						story.
					</h1>
					<p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
						Savana helps you discover destinations that feel fresh,
						warm, and easy to enjoy. Clean planning, scenic stays,
						and memorable moments without overcomplicating the
						journey.
					</p>

					<div className="mt-8 flex flex-col gap-4 sm:flex-row">
						<button className="rounded-full bg-rose-500 px-8 py-4 font-semibold text-white shadow-[0_20px_50px_-20px_rgba(244,63,94,0.7)] transition hover:bg-rose-400">
							Start Exploring
						</button>
						<button className="flex items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900">
							<img src={Play} alt="" className="h-5 w-5" />
							Watch Journey
						</button>
					</div>

					<div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
						<div className="flex -space-x-3">
							{["MA", "IR", "LN"].map((initial) => (
								<div
									key={initial}
									className="flex h-11 w-11 items-center justify-center rounded-full border-4 border-white bg-amber-200 font-semibold text-slate-700"
								>
									{initial}
								</div>
							))}
						</div>
						<p className="max-w-sm text-sm leading-7 text-slate-500">
							Trusted by travelers who want a cleaner, simpler,
							and more tasteful holiday experience.
						</p>
					</div>
				</div>

				<div className="relative">
					<div className="absolute left-4 top-10 h-32 w-32 rounded-full bg-amber-200/50 blur-3xl" />
					<div className="absolute bottom-6 right-0 h-40 w-40 rounded-full bg-rose-200/60 blur-3xl" />
					<div className="glass-panel relative overflow-hidden p-5 sm:p-7">
						<img
							src={HeroImg}
							alt="Travel illustration"
							className="mx-auto w-full max-w-xl"
						/>
						<div className="mt-6 grid gap-4 sm:grid-cols-2">
							<div className="rounded-[1.5rem] bg-slate-900 p-5 text-white">
								<p className="text-sm uppercase tracking-[0.3em] text-white/60">
									Best season
								</p>
								<p className="mt-3 font-circular text-2xl">
									April to August
								</p>
							</div>
							<div className="rounded-[1.5rem] bg-amber-50 p-5">
								<p className="text-sm uppercase tracking-[0.3em] text-amber-700">
									Most loved route
								</p>
								<p className="mt-3 font-circular text-2xl text-slate-900">
									Coast, hill, and café loop
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-14 rounded-[2rem] border border-white/60 bg-white/70 px-5 py-6 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.35)] backdrop-blur">
				<p className="text-center text-xs font-semibold uppercase tracking-[0.45em] text-slate-400">
					Chosen by modern travel brands
				</p>
				<div className="mt-6 flex flex-wrap items-center justify-center gap-8 opacity-75 md:gap-12">
					{brands.map((brand, index) => (
						<img
							key={index}
							src={brand}
							alt=""
							className="h-7 lg:h-9"
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Hero;
