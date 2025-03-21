import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"; // Import icons
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			{/* Email on the left */}
			<div className="footer-email">
				<p>ashutosh.panwar@example.com</p>
			</div>

			{/* Logo in the center */}
			<div className="footer-logo">
				<img src="/images/logo.png" alt="Logo" className="logo-img" />
			</div>

			{/* Social media links on the right */}
			<div className="footer-social">
				<a
					href="https://twitter.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaTwitter className="footer-icon" /> {/* Twitter icon */}
				</a>
				<a
					href="https://linkedin.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaLinkedin className="footer-icon" /> {/* LinkedIn icon */}
				</a>
				<a
					href="https://github.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaGithub className="footer-icon" /> {/* GitHub icon */}
				</a>
			</div>
		</footer>
	);
};

export default Footer;
