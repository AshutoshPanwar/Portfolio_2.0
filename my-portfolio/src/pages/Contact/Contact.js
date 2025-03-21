import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Code, Briefcase } from "lucide-react";

const Contact = () => {
	return (
		<motion.section
			id="contact"
			className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-8 py-12"
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
		>
			<div className="max-w-4xl w-full text-center">
				{/* Heading */}
				<motion.h2
					className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text mb-8"
					whileHover={{ scale: 1.05 }}
				>
					Let's Connect!
				</motion.h2>

				{/* Highlight Section */}
				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5, duration: 1 }}
				>
					{/* Highlight 1 */}
					<div className="bg-black/80 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg">
						<Code className="w-12 h-12 text-purple-400 mb-4 mx-auto" />
						<h3 className="text-2xl font-semibold mb-2">
							Technical Expertise
						</h3>
						<p className="text-gray-300">
							Proficient in Python, Machine Learning, and Data
							Science. I build scalable and efficient solutions.
						</p>
					</div>

					{/* Highlight 2 */}
					<div className="bg-black/80 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg">
						<Briefcase className="w-12 h-12 text-teal-400 mb-4 mx-auto" />
						<h3 className="text-2xl font-semibold mb-2">
							Professional Experience
						</h3>
						<p className="text-gray-300">
							Experienced in financial analytics, algorithmic
							trading, and AI-driven decision-making.
						</p>
					</div>
				</motion.div>

				{/* Contact Form */}
				<motion.form
					className="bg-black/80 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1, duration: 1 }}
				>
					<h3 className="text-3xl font-semibold mb-6">
						Send Me a Message
					</h3>
					<div className="space-y-6">
						<input
							type="text"
							placeholder="Your Name"
							className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
						/>
						<input
							type="email"
							placeholder="Your Email"
							className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
						/>
						<textarea
							placeholder="Your Message"
							rows="5"
							className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
						></textarea>
						<button
							type="submit"
							className="w-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity"
						>
							Send Message
						</button>
					</div>
				</motion.form>

				{/* Social Media Links */}
				<motion.div
					className="flex justify-center space-x-8 mt-12"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.5, duration: 1 }}
				>
					<a
						href="mailto:your.email@example.com"
						className="text-gray-400 hover:text-purple-400 transition-colors"
					>
						<Mail className="w-8 h-8" />
					</a>
					<a
						href="https://linkedin.com/in/yourprofile"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-400 hover:text-blue-400 transition-colors"
					>
						<Linkedin className="w-8 h-8" />
					</a>
					<a
						href="https://github.com/yourusername"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-400 hover:text-white transition-colors"
					>
						<Github className="w-8 h-8" />
					</a>
				</motion.div>
			</div>
		</motion.section>
	);
};

export default Contact;
