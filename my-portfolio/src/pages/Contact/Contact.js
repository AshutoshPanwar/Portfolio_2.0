import React from "react";
import { motion } from "framer-motion";
import { Mail, Twitter, Linkedin, Github } from "lucide-react";
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
					{/* No cards here anymore */}
				</motion.div>

				{/* Contact Form */}
				{/* <motion.form
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
				</motion.form> */}
				{/* Contact Form */}
				<div className="contact-container">
					{/* Left Column */}
					<div className="left-column">
						<h1>
							Send me a <span className="highlight">message</span>{" "}
							and let's create something{" "}
							<span className="highlight">amazing</span> together.
						</h1>
						<p>Connect with me</p>
						<div className="social-media-logos">
							<a
								href="https://twitter.com/yourprofile"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Twitter size={40} color="#ffffff" />
							</a>
							<a
								href="https://linkedin.com/in/yourprofile"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Linkedin size={40} color="#ffffff" />
							</a>
							<a
								href="https://github.com/yourprofile"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Github size={40} color="#ffffff" />
							</a>
						</div>
					</div>

					{/* Right Column */}
					<div className="right-column">
						<form className="contact-form">
							<div className="form-group">
								<label htmlFor="name">Your Name</label>
								<input
									type="text"
									id="name"
									name="name"
									placeholder="Enter your name"
									required
								/>
							</div>
							<div className="form-group">
								<label htmlFor="email">Your Email</label>
								<input
									type="email"
									id="email"
									name="email"
									placeholder="Enter your email"
									required
								/>
							</div>
							<div className="form-group">
								<label htmlFor="message">Your Message</label>
								<textarea
									id="message"
									name="message"
									placeholder="Type your message here"
									rows="5"
									required
								/>
							</div>
							<button type="submit" className="submit-button">
								Send Message
							</button>
						</form>
					</div>
				</div>

				{/* Social Media Links */}
				{/* <motion.div
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
				</motion.div> */}
			</div>
		</motion.section>
	);
};

export default Contact;
