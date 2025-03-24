import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaPython, FaChartLine, FaRobot, FaDatabase } from "react-icons/fa"; // Using React Icons for skill icons
import "./Hero.css"; // Ensure you create a corresponding CSS file

const Hero = () => {
	// Skill card data
	const skills = [
		{
			icon: <FaPython size={40} />,
			title: "Python Programming",
			description:
				"Proficient in Python for data analysis, automation, and machine learning. Key tools: Pandas, NumPy, Scikit-learn.",
		},
		{
			icon: <FaChartLine size={40} />,
			title: "Data Visualization",
			description:
				"Expertise in creating interactive visualizations using tools like Matplotlib, Seaborn, and Tableau.",
		},
		{
			icon: <FaRobot size={40} />,
			title: "Machine Learning",
			description:
				"Skilled in building and deploying ML models using TensorFlow, Keras, and PyTorch.",
		},
		{
			icon: <FaDatabase size={40} />,
			title: "Database Management",
			description:
				"Experience with SQL and NoSQL databases like MySQL, MongoDB, and PostgreSQL.",
		},
	];

	const [scrollPosition, setScrollPosition] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const containerRef = useRef(null);

	// Function to move cards left
	const moveLeft = () => {
		setScrollPosition(prev => {
			const newPosition = prev - 300; // Move left by 300px
			return newPosition < 0 ? (skills.length - 1) * 300 : newPosition; // Loop to the end
		});
		setIsPaused(true); // Pause auto-scroll
		setTimeout(() => setIsPaused(false), 1000); // Resume after 1 second
	};

	// Function to move cards right
	const moveRight = () => {
		setScrollPosition(prev => {
			const newPosition = prev + 300; // Move right by 300px
			return newPosition >= skills.length * 300 ? 0 : newPosition; // Loop to the start
		});
		setIsPaused(true); // Pause auto-scroll
		setTimeout(() => setIsPaused(false), 1000); // Resume after 1 second
	};

	// Auto-scroll after a delay
	useEffect(() => {
		let interval;
		if (!isPaused) {
			interval = setInterval(() => {
				setScrollPosition(prev => (prev + 300) % (skills.length * 300));
			}, 3000); // Auto-scroll every 3 seconds
		}
		return () => clearInterval(interval);
	}, [isPaused, skills.length]);

	return (
		<>
			{/* Hero Section */}
			<section className="hero-section">
				<div className="hero-content">
					<h1>
						<span className="gradient-text">Transforming Data</span>{" "}
						<br />
						Into{" "}
						<span className="gradient-text">
							Actionable Insights.
						</span>
					</h1>
					<p className="hero-subtext">
						I specialize in{" "}
						<span className="gradient-text">data science</span>,{" "}
						<span className="gradient-text">machine learning</span>,
						and{" "}
						<span className="gradient-text">
							decision-making strategies
						</span>{" "}
						to solve complex problems.
					</p>
					<button className="cta-button">Explore My Work</button>
					<p className="hero-note">
						Let’s build the future with data-driven solutions.
					</p>
				</div>
			</section>

			{/* Skill Section */}
			<motion.section
				className="skills-section"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				<div className="skills-container">
					{/* Left Column */}
					<div className="left-column">
						<motion.h1
							className="skills-headline"
							whileHover={{ scale: 1.05 }}
						>
							<span className="gradient-text">Skills</span> That
							Drive Impact
						</motion.h1>
					</div>

					{/* Right Column */}
					<div className="right-column">
						<p className="skills-description">
							Combining{" "}
							<span className="gradient-text">data science</span>,{" "}
							<span className="gradient-text">
								machine learning
							</span>
							, and{" "}
							<span className="gradient-text">
								analytical skills
							</span>{" "}
							to deliver insightful solutions.
						</p>
					</div>
				</div>

				{/* Skill Cards */}
				<div
					className="skill-cards-container"
					onMouseEnter={() => setIsPaused(true)} // Pause on hover
					onMouseLeave={() => setIsPaused(false)} // Resume on mouse leave
				>
					<div className="arrow-buttons">
						<button className="arrow-button" onClick={moveLeft}>
							&lt;
						</button>
						<button className="arrow-button" onClick={moveRight}>
							&gt;
						</button>
					</div>
					<motion.div
						className="skill-cards-wrapper"
						ref={containerRef}
						animate={{ x: -scrollPosition }}
						transition={{
							type: "tween",
							ease: "easeOut",
							duration: 0.5,
						}}
					>
						{/* Duplicate cards for seamless looping */}
						{[...skills, ...skills].map((skill, index) => (
							<div key={index} className="skill-card">
								<div className="skill-icon">{skill.icon}</div>
								<h3 className="skill-title">{skill.title}</h3>
								<p className="skill-description">
									{skill.description}
								</p>
							</div>
						))}
					</motion.div>
				</div>

				{/* Button at the bottom of the cards */}
				<div className="button-container">
					<motion.button
						className="cta-button"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						See My Projects
					</motion.button>
				</div>
			</motion.section>
			<section className="intro-section">
				<div className="intro-content">
					<h1 className="intro-heading">
						<span className="highlight">Data tells a story</span>—I
						make sure it’s the right one.{" "}
						<span className="highlight">I’m [Your Name]</span>, a
						data scientist passionate about AI, analytics, and
						machine learning.
					</h1>
				</div>
			</section>
		</>
	);
};

export default Hero;
