import { Link } from "react-router-dom";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { articles } from "../data/articles";

const Articles = () => {
	const featuredArticle = articles[0];
	const normalArticles = articles.slice(1);

	return (
		<div className="section-shell py-8 md:py-12 space-y-12">
			{/* PAGE HEADER */}
			<div className="max-w-2xl">
				<p className="section-label">Savana Journal</p>
				<h1 className="section-title mt-4">Stories, Inspirations & Our Travel Guides</h1>
				<p className="mt-4 text-slate-600 text-sm leading-7">
					Find practical camping tips, hidden trending destinations, and in-depth travel journals directly from our adventurous contributors.
				</p>
			</div>

			{/* FEATURED ARTICLE BANNER */}
			{featuredArticle && (
				<article className="overflow-hidden rounded-[2.5rem] border border-white/60 bg-white shadow-[0_24px_80px_-40px_rgba(15,23,42,0.2)] grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
					<div className="h-72 sm:h-96 lg:h-full overflow-hidden bg-slate-100">
						<img
							src={featuredArticle.cover}
							alt={featuredArticle.title}
							className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
						/>
					</div>

					<div className="p-7 sm:p-10 flex flex-col justify-between space-y-6">
						<div className="space-y-4">
							<div className="flex items-center gap-3">
								<span className="rounded-full bg-rose-50 px-3.5 py-1.5 text-xs font-bold text-rose-500 uppercase tracking-wider">
									Featured Story
								</span>
								<span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
									<Clock className="h-3.5 w-3.5" />
									{featuredArticle.readTime}
								</span>
							</div>

							<h2 className="font-circular text-2xl sm:text-3xl lg:text-4xl text-slate-900 leading-snug hover:text-rose-500 transition">
								<Link to={`/articles/${featuredArticle.id}`}>
									{featuredArticle.title}
								</Link>
							</h2>

							<p className="text-slate-500 text-xs sm:text-sm leading-7">
								{featuredArticle.summary}
							</p>
						</div>

						<div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4 justify-between sm:items-center">
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center font-circular text-sm font-bold text-slate-700 shadow-sm">
									{featuredArticle.author.split(" ").map(w => w[0]).join("")}
								</div>
								<div>
									<p className="text-xs font-bold text-slate-800">{featuredArticle.author}</p>
									<p className="text-[10px] text-slate-400 mt-0.5 flex items-center gap-1">
										<Calendar className="h-3 w-3" />
										{featuredArticle.date}
									</p>
								</div>
							</div>

							<Link
								to={`/articles/${featuredArticle.id}`}
								className="rounded-full bg-rose-500 px-6 py-3 font-semibold text-white shadow-sm hover:bg-rose-400 transition text-xs flex items-center justify-center gap-1.5 self-start sm:self-auto"
							>
								Read More
								<ArrowRight className="h-3.5 w-3.5" />
							</Link>
						</div>
					</div>
				</article>
			)}

			{/* ARTICLES LIST GRID */}
			<div className="space-y-6">
				<h2 className="font-circular text-2xl text-slate-900 border-b border-slate-100 pb-3">
					All Travel Journals
				</h2>
				
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{normalArticles.map((article) => (
						<article
							key={article.id}
							className="soft-card overflow-hidden hover:shadow-lg transition duration-300 flex flex-col h-full"
						>
							<div className="h-52 overflow-hidden bg-slate-100">
								<img
									src={article.cover}
									alt={article.title}
									className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
								/>
							</div>

							<div className="p-6 flex flex-col flex-grow justify-between">
								<div className="space-y-3">
									<div className="flex items-center gap-2 text-[10px] text-rose-500 font-bold uppercase tracking-wider">
										<span>{article.tags[0]}</span>
										<span className="w-1 h-1 rounded-full bg-slate-300" />
										<span className="text-slate-400 lowercase">{article.readTime}</span>
									</div>

									<h3 className="font-circular text-lg text-slate-900 leading-snug hover:text-rose-500 transition line-clamp-2">
										<Link to={`/articles/${article.id}`}>
											{article.title}
										</Link>
									</h3>

									<p className="text-xs leading-6 text-slate-500 line-clamp-3">
										{article.summary}
									</p>
								</div>

								<div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
									<div className="flex items-center gap-2">
										<div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center font-circular text-xs font-bold text-slate-600 border border-amber-100">
											{article.author.split(" ").map(w => w[0]).join("")}
										</div>
										<div>
											<p className="text-[10px] font-bold text-slate-700">{article.author}</p>
											<p className="text-[9px] text-slate-400">{article.date}</p>
										</div>
									</div>

									<Link
										to={`/articles/${article.id}`}
										className="text-xs font-bold text-rose-500 hover:text-rose-400 flex items-center gap-0.5"
									>
										Read
										<ArrowRight className="h-3.5 w-3.5" />
									</Link>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>

			{/* NEWSLETTER SUBSCRIBE */}
			<section className="py-6">
				<div className="overflow-hidden rounded-[2.5rem] bg-slate-900 px-6 py-12 text-white sm:px-10 lg:px-14 lg:py-16 shadow-xl relative">
					<div className="absolute right-0 top-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
					
					<div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end relative z-10">
						<div>
							<p className="text-xs uppercase tracking-[0.35em] text-amber-300 font-circular">
								Get Travel Information
							</p>
							<h2 className="mt-4 font-circular text-3xl leading-tight sm:text-4xl lg:text-5xl">
								Plan your next escape with updates that stay useful and inspiring.
							</h2>
							<p className="mt-5 max-w-xl text-sm leading-7 text-white/70">
								Get destination ideas, seasonal route suggestions, and clean travel inspiration without noisy spam.
							</p>
						</div>

						<form onSubmit={(e) => { e.preventDefault(); alert("Thank you for subscribing to Savana newsletter!"); }} className="rounded-[2rem] bg-white p-3 sm:p-4 shadow-lg">
							<div className="flex flex-col gap-2.5 sm:flex-row">
								<input
									type="email"
									required
									placeholder="Your email address"
									className="w-full rounded-full border border-slate-100 bg-slate-50 px-5 py-3.5 text-slate-700 outline-none transition focus:border-rose-300 text-sm"
								/>
								<button type="submit" className="rounded-full bg-rose-500 px-7 py-3.5 font-semibold text-white transition hover:bg-rose-400 shrink-0 text-sm shadow-md hover:shadow-lg">
									Subscribe
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Articles;
