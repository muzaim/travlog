import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/img/logo/logo.svg";

const navItems = [
	{ label: "Home", to: "/" },
	{ label: "Destinations", to: "/destinations" },
	{ label: "Journal", to: "/articles" },
	{ label: "Gallery", to: "/gallery" },
	{ label: "About", to: "/about" },
	{ label: "Contact", to: "/contact" },
];

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	// Watch scroll to adjust styling of the navbar
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
			isScrolled 
				? "bg-white/85 backdrop-blur-md border-b border-slate-100/80 shadow-[0_4px_30px_rgba(15,23,42,0.02)] py-4" 
				: "bg-transparent py-6"
		}`}>
			<div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
				{/* Logo */}
				<Link to="/" className="flex items-center gap-3 shrink-0 group">
					<div className="relative overflow-hidden rounded-full p-1 bg-amber-50 group-hover:scale-105 transition-transform duration-300">
						<img src={Logo} alt="Savana logo" className="h-7 w-7" />
					</div>
					<div>
						<p className="font-circular text-base font-extrabold text-slate-900 tracking-tight leading-none">
							Savana
						</p>
						<p className="text-[8px] uppercase tracking-[0.35em] text-slate-400 mt-1 font-bold">
							Journey Studio
						</p>
					</div>
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden items-center gap-8 lg:flex">
					{navItems.map((item) => (
						<NavLink
							key={item.label}
							to={item.to}
							className={({ isActive }) =>
								`text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
									isActive 
										? "text-rose-500 font-bold" 
										: "text-slate-500 hover:text-slate-900"
								}`
							}
						>
							{item.label}
						</NavLink>
					))}
				</nav>

				{/* CTA Actions */}
				<div className="hidden lg:flex items-center gap-6">
					<button
						onClick={() => alert("Information: Login feature is a static demonstration for the portfolio.")}
						className="text-xs uppercase tracking-widest font-bold text-slate-500 hover:text-slate-900 transition-colors duration-300"
					>
						Log In
					</button>
					<Link
						to="/destinations"
						className="rounded-full bg-slate-950 px-6 py-3 text-xs uppercase tracking-widest font-bold text-white shadow-sm transition-all duration-300 hover:bg-rose-500 hover:shadow-[0_10px_20px_-10px_rgba(244,63,94,0.3)] hover:-translate-y-0.5 active:translate-y-0"
					>
						Plan a Trip
					</Link>
				</div>

				{/* Hamburger Button for Mobile */}
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="lg:hidden rounded-full p-2 text-slate-600 hover:bg-slate-100/60 focus:outline-none transition-colors"
				>
					{isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
				</button>
			</div>

			{/* Mobile Dropdown Menu */}
			{isOpen && (
				<div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-b border-slate-100 p-6 space-y-4 shadow-xl z-50 animate-fadeIn lg:hidden">
					<nav className="flex flex-col gap-2">
						{navItems.map((item) => (
							<NavLink
								key={item.label}
								to={item.to}
								onClick={() => setIsOpen(false)}
								className={({ isActive }) =>
									`text-xs uppercase tracking-widest font-semibold py-2.5 px-4 rounded-xl transition-all duration-300 ${
										isActive 
											? "bg-rose-50 text-rose-600 font-bold" 
											: "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
									}`
								}
							>
								{item.label}
							</NavLink>
						))}
					</nav>

					<div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
						<button
							onClick={() => {
								setIsOpen(false);
								alert("Information: Login feature is a static demonstration for the portfolio.");
							}}
							className="w-full rounded-full py-3 text-xs uppercase tracking-widest font-bold text-slate-600 hover:bg-slate-50 transition border border-slate-200"
						>
							Log In
						</button>
						<Link
							to="/destinations"
							onClick={() => setIsOpen(false)}
							className="w-full text-center rounded-full bg-slate-950 py-3 text-xs uppercase tracking-widest font-bold text-white transition hover:bg-rose-500 block"
						>
							Plan a Trip
						</Link>
					</div>
				</div>
			)}
		</header>
	);
};

export default Navbar;
