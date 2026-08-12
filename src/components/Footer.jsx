import { Link } from "react-router-dom";
import Logo from "../assets/img/logo/logo.svg";
import TwitterIcons from "../assets/img/icons/twitter.svg";
import InstagramIcons from "../assets/img/icons/ig.svg";
import FacebookIcons from "../assets/img/icons/fb.svg";

const Footer = () => {
	return (
		<footer className="mt-8 w-full overflow-hidden bg-slate-950 text-white">
			<div className="section-shell py-14">
				<div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
					<div>
						<div className="flex items-center gap-3">
							<img
								src={Logo}
								alt="Savana logo"
								className="h-10 w-10"
							/>
							<div>
								<p className="font-circular text-2xl text-white leading-none">
									Savana
								</p>
								<p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mt-1">
									Journey Studio
								</p>
							</div>
						</div>
						<p className="mt-5 max-w-xl text-xs sm:text-sm leading-8 text-slate-300">
							Travel for people who want something beautiful,
							simple, and intentional. We create routes that feel
							easy to book, easy to follow, and worth remembering.
						</p>
						<div className="mt-6 flex gap-3">
							<a
								href="https://twitter.com"
								target="_blank"
								rel="noreferrer"
								className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-rose-300/40 hover:bg-rose-400/10"
							>
								<img src={TwitterIcons} alt="Twitter" className="h-5 w-5" />
							</a>
							<a
								href="https://instagram.com"
								target="_blank"
								rel="noreferrer"
								className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-rose-300/40 hover:bg-rose-400/10"
							>
								<img
									src={InstagramIcons}
									alt="Instagram"
									className="h-5 w-5"
								/>
							</a>
							<a
								href="https://facebook.com"
								target="_blank"
								rel="noreferrer"
								className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-rose-300/40 hover:bg-rose-400/10"
							>
								<img src={FacebookIcons} alt="Facebook" className="h-5 w-5" />
							</a>
						</div>
					</div>

					<div className="grid gap-8 sm:grid-cols-3">
						<div>
							<h3 className="font-circular text-base text-white">
								Company
							</h3>
							<div className="mt-4 space-y-3 text-xs leading-6 text-slate-400 flex flex-col">
								<Link to="/about" className="hover:text-rose-400 transition">About us</Link>
								<Link to="/destinations" className="hover:text-rose-400 transition">Our packages</Link>
								<Link to="/articles" className="hover:text-rose-400 transition">Travel journal</Link>
							</div>
						</div>
						<div>
							<h3 className="font-circular text-base text-white">
								Support
							</h3>
							<div className="mt-4 space-y-3 text-xs leading-6 text-slate-400 flex flex-col">
								<Link to="/contact" className="hover:text-rose-400 transition">FAQ</Link>
								<Link to="/contact" className="hover:text-rose-400 transition">Partner with us</Link>
								<Link to="/contact" className="hover:text-rose-400 transition">Booking help</Link>
							</div>
						</div>
						<div>
							<h3 className="font-circular text-base text-white">
								Contact
							</h3>
							<div className="mt-4 space-y-3 text-xs leading-6 text-slate-400">
								<p>+62 812-3456-7890</p>
								<p>hello@savana.travel</p>
								<p>Yogyakarta, Indonesia</p>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
					<p>© 2026 Savana. Crafted for calmer journeys.</p>
					<p>Designed for modern travelers who like simple things done well.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
