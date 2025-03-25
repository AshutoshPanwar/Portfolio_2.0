import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaPython, FaChartLine, FaRobot, FaDatabase } from "react-icons/fa"; // Using React Icons for skill icons
import "./Hero.css"; // Ensure you create a corresponding CSS file
import Prj from "../../components/Project-Home/Prj";
import Form from "../../components/Form/Form";

const Hero = () => {
	// Skill card data
	const skills = [
		{
			image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png", // Replace with actual URL
			title: "Python Programming",
			description:
				"Proficient in Python for data analysis, automation, and machine learning. Key tools: Pandas, NumPy, Scikit-learn.",
		},
		{
			image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png", // Replace with actual URL
			title: "Data Visualization",
			description:
				"Expertise in creating interactive visualizations using tools like Matplotlib, Seaborn, and Tableau.",
		},
		{
			image: "https://www.pngitem.com/pimgs/m/346-3460443_machine-learning-course-near-me-machine-learning-logo.png", // Replace with actual URL
			title: "Machine Learning",
			description:
				"Skilled in building and deploying ML models using TensorFlow, Keras, and PyTorch.",
		},
		{
			image: "https://example.com/database-management.png", // Replace with actual URL
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
						<span className="focus-text">data science</span>,{" "}
						<span className="focus-text">machine learning</span>,
						and{" "}
						<span className="focus-text">
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

			{/* White About Ribon */}
			<section className="intro-section-About">
				<div className="intro-content-About">
					<h1 className="intro-heading-About">
						<span className="highlight-About"> Hi, I am </span>
						Ashutosh Panwar
						<span className="highlight-About">
							, a data scientist.
						</span>
					</h1>
				</div>
			</section>

			{/* Who Am I Section */}
			<motion.div
				className="who-we-are-container-Home"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.9, duration: 1 }}
			>
				{/* Left Side - Bold Text */}
				<motion.div
					className="who-we-are-left-Home"
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 1.1, duration: 1 }}
				>
					<h2>About Me!</h2>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="who-we-are-left-Home-button"
					>
						More About Me
					</motion.button>
				</motion.div>

				{/* Right Side - Paragraph */}
				<motion.div
					className="who-we-are-right-Home"
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 1.1, duration: 1 }}
				>
					<p>
						The world runs on <strong>data</strong>, and I want to
						be at the heart of it. I am an{" "}
						<strong>aspiring data scientist</strong>, fueled by
						curiosity and driven by the endless possibilities hidden
						within numbers. My journey began with a simple question:
						<strong>"What if data could tell a story?"</strong>
					</p>
					<br />
					<p>
						From exploring{" "}
						<strong>Python, SQL, and machine learning</strong> to
						diving deep into
						<strong>AI and analytics</strong>, I am constantly
						evolving, learning, and building. I believe that data
						science isn’t just about crunching numbers—it’s about
						<strong>
							solving real-world problems, predicting the future,
							and making an impact.
						</strong>
					</p>
					<br />
					<p>
						This portfolio isn’t just a collection of projects; it’s
						a{" "}
						<strong>
							reflection of my journey, my growth, and my ambition
						</strong>
						. With every dataset I analyze, every model I train, and
						every insight I uncover, I’m one step closer to{" "}
						<strong>mastering the art of data science.</strong>
					</p>
				</motion.div>
			</motion.div>

			{/* Blue Ribon */}
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

			{/* Skill Section */}
			<motion.section
				className="skills-section"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				<div className="skills-container">
					{/* Left Column */}
					<div className="skills-left-column">
						<motion.h1
							className="skills-headline"
							whileHover={{ scale: 1.05 }}
						>
							<span className="skills-gradient-text">Skills</span>{" "}
							That Drive Impact.
						</motion.h1>
					</div>

					{/* Right Column */}
					<div className="skills-right-column">
						<p className="skills-description">
							Combining{" "}
							<span className="focus-text">data science</span>,{" "}
							<span className="focus-text">machine learning</span>
							, and{" "}
							<span className="focus-text">
								analytical skills
							</span>{" "}
							to deliver insightful solutions.
						</p>
					</div>
				</div>

				{/* Skill Cards */}
				{/* Skill Cards */}
				<div
					className="skill-cards-container"
					onMouseEnter={() => setIsPaused(true)} // Pause on hover
					onMouseLeave={() => setIsPaused(false)} // Resume on mouse leave
				>
					<div className="arrow-buttons">
						<button className="arrow-button" onClick={moveLeft}>
							&lt; {/* Left Arrow */}
						</button>
						<button className="arrow-button" onClick={moveRight}>
							&gt; {/* Right Arrow */}
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
								<div className="skill-image">
									<img src={skill.image} alt={skill.title} />
								</div>
								<h3 className="skill-title">{skill.title}</h3>
								<p className="skill-description">
									{/* {skill.description} */}
								</p>
							</div>
						))}
					</motion.div>
				</div>

				{/* Button at the bottom of the cards */}
				<div className="button-container">
					<motion.button
						className="skill-cta-button"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						See My Projects
					</motion.button>
				</div>
			</motion.section>
			<Prj />
			<Form />
		</>
	);
};

export default Hero;
