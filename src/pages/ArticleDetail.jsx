import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Clock, Calendar, ArrowLeft, ArrowRight, Share2, BookOpen } from "lucide-react";
import { articles } from "../data/articles";

const ArticleDetail = () => {
	const { id } = useParams();
	const article = articles.find((a) => a.id === id);

	// Reset scroll when loading detail page
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [id]);

	if (!article) {
		return (
			<div className="section-shell py-20 text-center max-w-xl mx-auto space-y-6">
				<div className="w-20 h-20 rounded-full bg-rose-50 flex items-center justify-center text-4xl mx-auto">
					📝
				</div>
				<h2 className="font-circular text-3xl text-slate-900">Article Not Found</h2>
				<p className="text-slate-500 text-sm leading-6">
					Sorry, the travel journal article you are looking for is not in the Savana database. Perhaps the link has been removed or moved.
				</p>
				<Link
					to="/articles"
					className="inline-flex items-center gap-2 rounded-full bg-rose-500 px-6 py-3 font-semibold text-white shadow-sm hover:bg-rose-400 transition text-xs"
				>
					<ArrowLeft className="h-4 w-4" />
					Back to Articles
				</Link>
			</div>
		);
	}

	// Related articles
	const relatedArticles = articles.filter(
		(a) => article.relatedIds.includes(a.id) && a.id !== article.id
	);

	return (
		<div className="space-y-10 pb-16">
			{/* ARTICLE HEADER CONTAINER */}
			<section className="relative w-full h-[50vh] overflow-hidden bg-slate-950">
				<img
					src={article.cover}
					alt={article.title}
					className="w-full h-full object-cover opacity-50"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
				<div className="absolute bottom-0 left-0 w-full">
					<div className="section-shell pb-10 space-y-4">
						{/* Breadcrumbs */}
						<div className="flex items-center gap-2 text-xs font-semibold text-white/60">
							<Link to="/" className="hover:text-white transition">Home</Link>
							<span>/</span>
							<Link to="/articles" className="hover:text-white transition">Journal</Link>
							<span>/</span>
							<span className="text-white">Detail</span>
						</div>
						
						<div className="flex flex-wrap gap-2">
							{article.tags.map((tag) => (
								<span key={tag} className="rounded-full bg-rose-500 px-3.5 py-1 text-xs font-semibold text-white uppercase tracking-wider">
									{tag}
								</span>
							))}
						</div>

						<h1 className="font-circular text-3xl md:text-5xl lg:text-6xl text-white leading-tight max-w-4xl">
							{article.title}
						</h1>

						<div className="flex flex-wrap items-center gap-6 text-xs font-medium text-white/80">
							<span className="flex items-center gap-1.5">
								<div className="w-6 h-6 rounded-full bg-amber-200 flex items-center justify-center font-circular font-bold text-slate-800 text-[10px]">
									{article.author.split(" ").map(w => w[0]).join("")}
								</div>
								By {article.author}
							</span>
							<span className="flex items-center gap-1.5">
								<Calendar className="h-4 w-4 text-rose-400" />
								{article.date}
							</span>
							<span className="flex items-center gap-1.5">
								<Clock className="h-4 w-4 text-emerald-400" />
								{article.readTime}
							</span>
						</div>
					</div>
				</div>
			</section>

			{/* ARTICLE CONTENT */}
			<section className="section-shell">
				<div className="grid gap-10 lg:grid-cols-[2fr_1fr] items-start">
					{/* Main Body */}
					<div className="glass-panel p-6 sm:p-10 md:p-12 shadow-sm space-y-8 bg-white">
						{/* Back Button */}
						<Link
							to="/articles"
							className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-slate-900 transition"
						>
							<ArrowLeft className="h-4 w-4" />
							Back to All Articles
						</Link>

						{/* Article Text */}
						<div
							className="prose prose-slate max-w-none prose-sm sm:prose-base leading-8 text-slate-600 space-y-6"
							dangerouslySetInnerHTML={{ __html: article.content }}
						/>

						{/* Footer Actions */}
						<div className="pt-8 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
							<div className="flex items-center gap-2">
								<span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Share Article:</span>
								<button
									onClick={() => {
										navigator.clipboard.writeText(window.location.href);
										alert("Article link successfully copied to clipboard!");
									}}
									className="rounded-full bg-slate-50 border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition flex items-center gap-1.5"
								>
									<Share2 className="h-3.5 w-3.5" />
									Copy Link
								</button>
							</div>

							<Link
								to="/articles"
								className="text-xs font-bold text-rose-500 hover:text-rose-400 flex items-center gap-0.5"
							>
								View Other Journals
								<ArrowRight className="h-4 w-4" />
							</Link>
						</div>
					</div>

					{/* Sidebar: Author Profile & Related Articles */}
					<aside className="space-y-6 lg:sticky lg:top-24">
						{/* Author Card */}
						<div className="soft-card p-6 text-center space-y-4">
							<div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center font-circular text-2xl font-bold text-slate-700 mx-auto shadow-sm">
								{article.author.split(" ").map(w => w[0]).join("")}
							</div>
							<div>
								<p className="font-circular text-lg text-slate-900">{article.author}</p>
								<p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-1">Savana Journal Contributor</p>
							</div>
							<p className="text-xs text-slate-500 leading-5">
								Outdoor adventure and local culture enthusiast. Has explored dozens of mountains and beaches in Indonesia to share stories and best travel tips with readers.
							</p>
						</div>

						{/* Related Articles Panel */}
						{relatedArticles.length > 0 && (
							<div className="soft-card p-6 space-y-4">
								<h3 className="font-circular text-base text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
									<BookOpen className="h-4.5 w-4.5 text-rose-500" />
									Related Articles
								</h3>

								<div className="space-y-4">
									{relatedArticles.map((related) => (
										<Link
											key={related.id}
											to={`/articles/${related.id}`}
											className="flex gap-4 group"
										>
											<div className="w-20 h-16 rounded-xl overflow-hidden bg-slate-100 shrink-0">
												<img
													src={related.cover}
													alt={related.title}
													className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
												/>
											</div>
											<div className="space-y-1">
												<h4 className="font-circular text-xs text-slate-800 leading-snug group-hover:text-rose-500 transition line-clamp-2">
													{related.title}
												</h4>
												<p className="text-[10px] text-slate-400">{related.date}</p>
											</div>
										</Link>
									))}
								</div>
							</div>
						)}
					</aside>
				</div>
			</section>
		</div>
	);
};

export default ArticleDetail;
