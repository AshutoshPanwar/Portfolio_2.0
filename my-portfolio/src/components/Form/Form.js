import React from "react";
import { Twitter, Linkedin, Github } from "lucide-react";
import "./Form.css";

const Temp = () => {
	return (
		<div className="contact-section">
			<div className="contact-container">
				{/* Left Column */}
				<div className="left-column">
					<h1>
						Send me a <span className="highlight">message</span> and
						let's create something{" "}
						<span className="highlight">amazing</span> together.
					</h1>
					<p>Connect with me</p>
					<div className="social-media-logos">
						<a
							href="https://www.linkedin.com/in/ashutoshpanwar1100/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Linkedin size={40} color="#ffffff" />
						</a>
						<a
							href="https://x.com/Ashu_Panwar1100"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Twitter size={40} color="#ffffff" />
						</a>

						<a
							href="https://github.com/AshutoshPanwar"
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
								placeholder="Leave a message here."
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
		</div>
	);
};

export default Temp;
