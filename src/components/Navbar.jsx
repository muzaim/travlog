import React from "react";

import Logo from "../assets/img/logo/logo.svg";

const navItems = [
	{ label: "Home", href: "#home" },
	{ label: "Services", href: "#services" },
	{ label: "Destinations", href: "#destinations" },
	{ label: "Stories", href: "#stories" },
];

const Navbar = () => {
	return (
		<header className="section-shell pt-6">
			<div className="glass-panel flex items-center justify-between px-5 py-4 sm:px-7">
				<a href="#home" className="flex items-center gap-3">
					<img src={Logo} alt="Savana logo" className="h-10 w-10" />
					<div>
						<p className="font-circular text-xl text-slate-900">
							Savana
						</p>
						<p className="text-xs uppercase tracking-[0.3em] text-slate-400">
							Journey Studio
						</p>
					</div>
				</a>

				<nav className="hidden items-center gap-8 lg:flex">
					{navItems.map((item) => (
						<a
							key={item.label}
							href={item.href}
							className="text-sm font-semibold text-slate-500 hover:text-slate-900"
						>
							{item.label}
						</a>
					))}
				</nav>

				<div className="flex items-center gap-3">
					<button className="hidden rounded-full px-5 py-3 text-sm font-semibold text-slate-600 sm:block">
						Log In
					</button>
					<button className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 sm:px-6">
						Plan a Trip
					</button>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
