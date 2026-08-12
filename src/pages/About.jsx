import { Compass, Eye, Target, Award, Heart } from "lucide-react";
import TravelImg from "../assets/img/use/travel.svg";

const About = () => {
	return (
		<div className="section-shell py-8 md:py-12 space-y-16">
			{/* HERO SECTION */}
			<section className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
				<div className="space-y-6">
					<p className="section-label">About Us</p>
					<h1 className="section-title mt-4">Connecting You with the Beauty of the Archipelago</h1>
					<p className="text-base leading-8 text-slate-600">
						Savana was founded by a group of local explorers who believe that a good journey is not about how fast we arrive, but the beauty of the rhythm of steps and the meaning of the story along the way.
					</p>
					<p className="text-base leading-8 text-slate-600">
						We summarize hidden natural beauty, characteristic destinations, and the uniqueness of Indonesian culture in guides that are clean, honest, and easy to understand to provide the best holiday experience for you.
					</p>
				</div>

				<div className="glass-panel overflow-hidden p-4 sm:p-6">
					<img
						src={TravelImg}
						alt="About Savana illustration"
						className="mx-auto w-full max-w-2xl"
					/>
				</div>
			</section>

			{/* VISION & MISSION */}
			<section className="grid gap-8 md:grid-cols-2">
				{/* Vision Card */}
				<div className="soft-card p-8 space-y-4 border border-rose-100 bg-gradient-to-br from-white to-rose-50/5 shadow-sm">
					<div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center">
						<Eye className="h-6 w-6 text-rose-500" />
					</div>
					<h2 className="font-circular text-2xl text-slate-900">Our Vision</h2>
					<p className="text-xs sm:text-sm leading-7 text-slate-600">
						To be the leading digital travel guide in Indonesia that inspires travelers to explore the archipelago wisely, appreciate local cultural wisdom, and preserve the surrounding nature for future generations.
					</p>
				</div>

				{/* Mission Card */}
				<div className="soft-card p-8 space-y-4 border border-amber-100 bg-gradient-to-br from-white to-amber-50/5 shadow-sm">
					<div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center">
						<Target className="h-6 w-6 text-amber-500" />
					</div>
					<h2 className="font-circular text-2xl text-slate-900">Our Mission</h2>
					<ul className="space-y-3 text-xs sm:text-sm text-slate-600 leading-6 list-none">
						<li className="flex items-start gap-2">
							<span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
							Curate travel routes periodically with accurate details, opening hours, estimated costs, and integrated maps.
						</li>
						<li className="flex items-start gap-2">
							<span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
							Promote homestays, local MSMEs, local guides, and porters to drive micro-economies in travel areas.
						</li>
						<li className="flex items-start gap-2">
							<span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
							Educate travelers about the importance of preserving ecosystems and the concept of zero-waste travel during travel.
						</li>
					</ul>
				</div>
			</section>

			{/* VALUES SECTION */}
			<section className="space-y-8">
				<div className="text-center max-w-2xl mx-auto">
					<p className="section-label">Core Values</p>
					<h2 className="section-title mt-4">Principles We Always Hold Dear</h2>
				</div>

				<div className="grid gap-6 sm:grid-cols-3">
					{[
						{ icon: Compass, title: "Data Honesty", copy: "We present reviews, ticket prices, and tips as they are based on direct observations in the field without exaggeration." },
						{ icon: Award, title: "Aesthetic Curations", copy: "Each accommodation, sunset spot, and eatery is carefully selected to meet calming aesthetic tastes." },
						{ icon: Heart, title: "Community Support", copy: "We believe sustainable tourism is one that embraces and empowers indigenous people and local communities." }
					].map((val, idx) => (
						<div key={idx} className="soft-card p-6 space-y-4 hover:shadow-md transition">
							<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
								<val.icon className="h-5 w-5 text-rose-500" />
							</div>
							<h3 className="font-circular text-lg text-slate-900">{val.title}</h3>
							<p className="text-xs leading-6 text-slate-500">{val.copy}</p>
						</div>
					))}
				</div>
			</section>

			{/* THE STORY */}
			<section className="glass-panel p-6 sm:p-10 md:p-12 space-y-6 shadow-sm">
				<h2 className="font-circular text-2xl text-slate-900 border-b border-slate-100 pb-3">
					The Story Behind Savana
				</h2>
				<div className="space-y-4 text-xs sm:text-sm leading-8 text-slate-600">
					<p>
						Savana started in 2024 from the anxiety of several hikers and photographers who saw the trend of tourism becoming too rushed. Many people visit a place just to take a one-minute photo and then leave, without having time to greet local residents or feel the silence of the mountain wind.
					</p>
					<p>
						We named this platform &quot;Savana&quot;—inspired by the vast savannah in Nusa Tenggara which feels spacious, quiet, and simple. This is where we started compiling small travel journals, recording beautiful small homestays owned by locals, summarizing slow walking paths, and publishing them.
					</p>
					<p>
						Today, Savana has grown into a reference point for thousands of modern travelers who long for journeys with a slower, more conscious tempo, filled with meaningful memories.
					</p>
				</div>
			</section>
		</div>
	);
};

export default About;
