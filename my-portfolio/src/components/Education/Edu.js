import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import "./Edu.css";

// Variants for animation
const headingVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
	hover: { scale: 1.05, transition: { duration: 0.3 } }, // Hover animation
};

const EducationAwards = () => {
	const [visible, setVisible] = useState(false);

	// Trigger animation when the component mounts
	useEffect(() => {
		setVisible(true);
	}, []);

	return (
		<div className="edu-awards-section">
			{/* Heading */}
			<motion.div
				className="edu-heading-container"
				variants={headingVariants}
				initial="hidden"
				animate={visible ? "visible" : "hidden"}
			>
				{/* Left Column */}
				<div className="edu-left-column">
					<motion.h1
						className="edu-headline"
						whileHover={{ scale: 1.05 }}
					>
						<span className="edu-gradient-text">Education</span> &
						Recognitions
					</motion.h1>
				</div>

				{/* Right Column */}
				<div className="edu-right-column">
					<p className="edu-description">
						From{" "}
						<span className="focus-text">
							academic achievements
						</span>{" "}
						to{" "}
						<span className="focus-text">
							professional recognition
						</span>
						, every milestone is a testament to dedication and
						growth.
					</p>
				</div>
			</motion.div>

			{/* Cards Section */}
			<div className="edu-cards-container">
				{/* Degree Card */}
				<motion.div
					className="edu-card graduation"
					variants={cardVariants}
					initial="hidden"
					animate={visible ? "visible" : "hidden"}
					whileHover="hover" // Add hover animation
				>
					<FaGraduationCap className="edu-card-icon" />
					<h3 className="edu-card-title">
						B.Tech in Computer Science
					</h3>
					<p className="edu-card-subtitle">
						Seth Jai Parkash Mukand Lal Institute Of Technology
					</p>
					<p className="edu-card-subtitle">[2020-2024]</p>
				</motion.div>

				{/* LeetCode Card */}
				<motion.div
					className="edu-card leetcode"
					variants={cardVariants}
					initial="hidden"
					animate={visible ? "visible" : "hidden"}
					whileHover="hover" // Add hover animation
				>
					<SiLeetcode className="edu-card-icon" />
					<h3 className="edu-card-title">LeetCode</h3>
					<p className="edu-card-subtitle">Solved 200+ problems</p>
					<a
						href="https://leetcode.com/u/ashupanwar1100/"
						className="edu-card-button"
						target="_blank"
						rel="noopener noreferrer"
					>
						View Profile
					</a>
				</motion.div>

				{/* HackerRank Card */}
				<motion.div
					className="edu-card hackerank"
					variants={cardVariants}
					initial="hidden"
					animate={visible ? "visible" : "hidden"}
					whileHover="hover" // Add hover animation
				>
					<SiHackerrank className="edu-card-icon" />
					<h3 className="edu-card-title">HackerRank</h3>
					<p className="edu-card-subtitle">5-Star Coder</p>
					<a
						href="https://www.hackerrank.com/profile/ashupanwar1100"
						className="edu-card-button"
						target="_blank"
						rel="noopener noreferrer"
					>
						View Profile
					</a>
				</motion.div>
			</div>
		</div>
	);
};

export default EducationAwards;
