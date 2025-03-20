// components/Navbar.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<nav className="navbar">
			{/* Your name on the left */}
			<NavLink to="/" className="logo">
				Ashutosh Panwar
			</NavLink>

			{/* Hamburger button for mobile */}
			<button className="hamburger" onClick={toggleMobileMenu}>
				☰
			</button>

			{/* Navigation links */}
			<ul className={`nav-list ${isMobileMenuOpen ? "active" : ""}`}>
				<li className="nav-item">
					<NavLink
						to="/"
						className="nav-link"
						end
						onClick={toggleMobileMenu}
					>
						Home
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink
						to="/projects"
						className="nav-link"
						onClick={toggleMobileMenu}
					>
						Projects
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink
						to="/skills"
						className="nav-link"
						onClick={toggleMobileMenu}
					>
						Skills
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink
						to="/about"
						className="nav-link"
						onClick={toggleMobileMenu}
					>
						About
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink
						to="/contact"
						className="nav-link"
						onClick={toggleMobileMenu}
					>
						Contact
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
