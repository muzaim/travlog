import { useState } from "react";
import { Mail, Phone, MapPin, Send, HelpCircle, CheckCircle, MessageSquare } from "lucide-react";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: ""
	});
	const [submitted, setSubmitted] = useState(false);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Simulate API call
		setSubmitted(true);
		setTimeout(() => {
			setFormData({ name: "", email: "", subject: "", message: "" });
		}, 1000);
	};

	const faqs = [
		{
			q: "Does Savana provide travel agency services or open trips?",
			a: "No, Savana is an independent platform curating travel information, routes, journals, and accommodation suggestions. We help you plan trips independently; we are not a paid travel agency."
		},
		{
			q: "How do I become a contributor for Savana Journal?",
			a: "We are always open to interesting travel stories! Please contact us via email at hello@savana.travel with your draft and supporting photo portfolio."
		},
		{
			q: "Is the ticket price information on this website always accurate?",
			a: "We update ticket rates periodically. However, entrance fees (HTM) are subject to change depending on local management policies. We recommend carrying backup cash."
		}
	];

	return (
		<div className="section-shell py-8 md:py-12 space-y-16">
			{/* PAGE HEADER */}
			<div className="max-w-2xl">
				<p className="section-label">Contact Us</p>
				<h1 className="section-title mt-4">Let&apos;s Chat About Your Vacation Plans</h1>
				<p className="mt-4 text-slate-600 text-sm leading-7">
					Have questions, partnership proposals, or want to contribute to the travel journal? Send a message through the form below or contact our official channels.
				</p>
			</div>

			<section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
				{/* Contact Form */}
				<div className="glass-panel p-6 sm:p-10 shadow-sm space-y-6">
					<h2 className="font-circular text-xl text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
						<MessageSquare className="h-5 w-5 text-rose-500" />
						Send Message
					</h2>

					{submitted ? (
						<div className="py-10 text-center space-y-4 animate-fadeIn">
							<div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto text-3xl">
								<CheckCircle className="h-10 w-10" />
							</div>
							<h3 className="font-circular text-2xl text-slate-900">Message Sent Successfully!</h3>
							<p className="text-slate-500 text-xs sm:text-sm leading-6 max-w-md mx-auto">
								Thank you for contacting us. The Savana contributor team will review your message and reply via email within a maximum of 2x24 hours.
							</p>
							<button
								onClick={() => setSubmitted(false)}
								className="rounded-full bg-slate-950 px-5 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition"
							>
								Send New Message
							</button>
						</div>
					) : (
						<form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
							<div className="grid gap-4 sm:grid-cols-2">
								<div className="space-y-2">
									<label className="font-bold text-slate-600">Full Name</label>
									<input
										type="text"
										name="name"
										required
										placeholder="e.g. John Doe"
										className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-rose-300 focus:bg-white transition"
										value={formData.name}
										onChange={handleInputChange}
									/>
								</div>
								<div className="space-y-2">
									<label className="font-bold text-slate-600">Email Address</label>
									<input
										type="email"
										name="email"
										required
										placeholder="e.g. johndoe@email.com"
										className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-rose-300 focus:bg-white transition"
										value={formData.email}
										onChange={handleInputChange}
									/>
								</div>
							</div>

							<div className="space-y-2">
								<label className="font-bold text-slate-600">Subject</label>
								<input
									type="text"
									name="subject"
									required
									placeholder="e.g. Camping Rute Question in Dieng"
									className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-rose-300 focus:bg-white transition"
									value={formData.subject}
									onChange={handleInputChange}
								/>
							</div>

							<div className="space-y-2">
								<label className="font-bold text-slate-600">Your Message</label>
								<textarea
									name="message"
									required
									rows="5"
									placeholder="Write your full message here..."
									className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-rose-300 focus:bg-white transition resize-none leading-6"
									value={formData.message}
									onChange={handleInputChange}
								/>
							</div>

							<button
								type="submit"
								className="rounded-full bg-rose-500 px-6 py-3.5 font-bold text-white shadow-[0_15px_40px_-15px_rgba(244,63,94,0.4)] hover:bg-rose-400 transition flex items-center justify-center gap-2 text-xs"
							>
								<Send className="h-4.5 w-4.5" />
								Send Message
							</button>
						</form>
					)}
				</div>

				{/* Contact Info & Maps */}
				<aside className="space-y-6">
					{/* Contacts List */}
					<div className="soft-card p-6 space-y-6">
						<h3 className="font-circular text-lg text-slate-900 border-b border-slate-100 pb-3">
							Contact Information
						</h3>

						<div className="space-y-4">
							<div className="flex items-start gap-4">
								<MapPin className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
								<div>
									<p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Office Studio</p>
									<p className="text-xs text-slate-700 leading-5 mt-1 font-semibold">
										Jl. Kaliurang KM 5.5, Depok, Sleman, D.I. Yogyakarta, Indonesia
									</p>
								</div>
							</div>

							<div className="flex items-start gap-4">
								<Mail className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
								<div>
									<p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Official Email</p>
									<p className="text-xs text-slate-700 font-semibold mt-1">hello@savana.travel</p>
								</div>
							</div>

							<div className="flex items-start gap-4">
								<Phone className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
								<div>
									<p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Phone Number</p>
									<p className="text-xs text-slate-700 font-semibold mt-1">+62 812-3456-7890</p>
								</div>
							</div>
						</div>
					</div>

					{/* Map */}
					<div className="soft-card p-5 space-y-3">
						<h4 className="font-circular text-sm text-slate-950">Yogyakarta Location</h4>
						<div className="h-52 rounded-2xl overflow-hidden bg-slate-100 border border-slate-100">
							<iframe
								src="https://maps.google.com/maps?q=Yogyakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								title="Savana Office Map"
							></iframe>
						</div>
					</div>
				</aside>
			</section>

			{/* MINI FAQ SECTION */}
			<section className="space-y-6">
				<h2 className="font-circular text-2xl text-slate-900 border-b border-slate-100 pb-3 text-center">
					Contact FAQs
				</h2>
				<div className="grid gap-6 md:grid-cols-3">
					{faqs.map((faq, idx) => (
						<div key={idx} className="soft-card p-6 space-y-3">
							<h3 className="font-circular text-sm text-slate-900 flex items-start gap-2 leading-5">
								<HelpCircle className="h-4.5 w-4.5 text-rose-500 shrink-0 mt-0.5" />
								{faq.q}
							</h3>
							<p className="text-xs text-slate-500 leading-6">{faq.a}</p>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default Contact;
