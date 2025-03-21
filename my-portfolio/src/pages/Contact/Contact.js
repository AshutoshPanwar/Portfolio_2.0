import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Code, Briefcase } from "lucide-react";
import "./Contact.css"; // Assuming you have a Contact.css file for styling

const Contact = () => {
	return (
		<motion.section
			id="contact"
			className="about-section" // Reusing the about-section class for consistent background
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
		>
			<div className="about-content">
				{/* Heading */}
				<div className="about-heading-container">
					<motion.h1
						className="about-heading"
						whileHover={{ scale: 1.05 }}
					>
						Let's Connect!
					</motion.h1>
				</div>

				{/* Highlight Section */}
				<motion.div
					className="about-services"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5, duration: 1 }}
				>
					{/* Highlight 1 */}
					<div className="service-card">
						<Code className="w-12 h-12 text-purple-400 mb-4 mx-auto" />
						<h3>Technical Expertise</h3>
						<p>
							Proficient in Python, Machine Learning, and Data
							Science. I build scalable and efficient solutions.
						</p>
					</div>

					{/* Highlight 2 */}
					<div className="service-card">
						<Briefcase className="w-12 h-12 text-teal-400 mb-4 mx-auto" />
						<h3>Professional Experience</h3>
						<p>
							Experienced in financial analytics, algorithmic
							trading, and AI-driven decision-making.
						</p>
					</div>
				</motion.div>

				{/* Contact Form */}
				<motion.form
					className="contact-form"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1, duration: 1 }}
				>
					<h3>Send Me a Message</h3>
					<div className="form-fields">
						<input
							type="text"
							placeholder="Your Name"
							className="form-input"
						/>
						<input
							type="email"
							placeholder="Your Email"
							className="form-input"
						/>
						<textarea
							placeholder="Your Message"
							rows="5"
							className="form-textarea"
						></textarea>
						<button type="submit" className="form-button">
							Send Message
						</button>
					</div>
				</motion.form>

				{/* Social Media Links */}
				<motion.div
					className="social-links"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.5, duration: 1 }}
				>
					<a
						href="mailto:your.email@example.com"
						className="social-link"
					>
						<Mail className="social-icon" />
					</a>
					<a
						href="https://linkedin.com/in/yourprofile"
						target="_blank"
						rel="noopener noreferrer"
						className="social-link"
					>
						<Linkedin className="social-icon" />
					</a>
					<a
						href="https://github.com/yourusername"
						target="_blank"
						rel="noopener noreferrer"
						className="social-link"
					>
						<Github className="social-icon" />
					</a>
				</motion.div>
			</div>
		</motion.section>
	);
};

export default Contact;
