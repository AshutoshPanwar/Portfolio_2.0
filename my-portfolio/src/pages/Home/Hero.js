import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaPython, FaChartLine, FaRobot, FaDatabase } from "react-icons/fa"; // Using React Icons for skill icons
import "./Hero.css"; // Ensure you create a corresponding CSS file
import Prj from "../../components/Project-Home/Prj";
import Form from "../../components/Form/Form";
import Edu from "../../components/Education/Edu";

const Hero = () => {
	const about_button = () => {
		window.location.href = "/about"; // Replace with your target URL
	};
	const skill_button = () => {
		window.location.href = "/skills"; // Replace with your target URL
	};
	const project_button = () => {
		window.location.href = "/projects"; // Replace with your target URL
	};

	// Skill card data
	const skills = [
		{
			image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png", // Replace with actual URL
			title: "Python Programming",
			description:
				"Proficient in Python for data analysis, automation, and machine learning. Key tools: Pandas, NumPy, Scikit-learn.",
		},
		{
			image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXO14WAc9UzVLkoUTaDabI0xEhbRJPwlcwhg&s", // Replace with actual URL
			title: "Linux",
			description: "",
		},
		{
			image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_aw7SzJUrkBCSBhzOnmm9sZWo_l5cvCdSLw&s", // Replace with actual URL
			title: "Pandas",
			description: "",
		},
		{
			image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8GOwYelkyRCn5rHGSAJhRitef065G1EAVYFSDPzsbAeELyLSPmb8ibluWr_Bn54MciGI&usqp=CAU", // Replace with actual URL
			title: "NumPy",
			description: "",
		},
		{
			image: "https://images.tpointtech.com/tutorial/matplotlib/images/matplotlib-tutorial.png", // Replace with actual URL
			title: "MatplotLib",
			description: "",
		},
		{
			image: "https://images.seeklogo.com/logo-png/33/2/scikit-learn-logo-png_seeklogo-337685.png", // Replace with actual URL
			title: "Scikit-Learn",
			description: "",
		},
		{
			image: "https://www.pngmart.com/files/23/Azure-Logo-PNG-Photo.png", // Replace with actual URL
			title: "Azure",
			description: "",
		},
		{
			image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJqy2ZDY9HDSLBdU-Onpi8DIVZqcp2uIghU-KgXWi9vofCDYTWoWxSoGRDVbxez5PNLI&usqp=CAU", // Replace with actual URL
			title: "GCP",
			description: "",
		},
		{
			image: "https://cdn.inspireuplift.com/uploads/images/seller_products/31661/1702633077_AWSlogoAmazonWebServiceslogo.png", // Replace with actual URL
			title: "AWS",
			description: "",
		},
		{
			image: "https://cdn.iconscout.com/icon/free/png-256/free-git-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175219.png", // Replace with actual URL
			title: "Git",
			description:
				"Expertise in creating interactive visualizations using tools like Matplotlib, Seaborn, and Tableau.",
		},
		{
			image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrwLTVVljw19zE8EVH4Ix7_Ea8xgUaqD3x7IWH6JborEZD6TZJMv0cUJ7M-Rxrf5uYvjo&usqp=CAU", // Replace with actual URL
			title: "Git-Hub",
			description:
				"Expertise in creating interactive visualizations using tools like Matplotlib, Seaborn, and Tableau.",
		},
		{
			image: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png", // Replace with actual URL
			title: "React",
			description:
				"Skilled in building and deploying ML models using TensorFlow, Keras, and PyTorch.",
		},
		{
			image: "https://5.imimg.com/data5/HT/HX/YO/GLADMIN-13634783/selection-208.png", // Replace with actual URL
			title: "Flask",
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
			}, 1000); // Auto-scroll every 3 seconds
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
						solve complex problems. Learning to harness data, build
						intelligent models, and craft decision-making strategies{" "}
						<span className="focus-text">
							to solve complex problems.
						</span>
					</p>
					<a
						href="https://drive.google.com/file/d/1X_WgZigkIUBTCLphkZ4FoluKq-t_GPtM/view?usp=sharing"
						className="cta-button"
						target="_blank"
						rel="noopener noreferrer"
					>
						Hire Me!
					</a>
					<p className="hero-note">
						The future belongs to those who turn data into action.
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
							, an aspiring data scientist.
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
						onClick={about_button}
					>
						Uncover My Story?
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
						diving deep into <strong>AI and analytics</strong>, I am
						constantly evolving, learning, and building. I believe
						that data science isn’t just about crunching
						numbers—it’s about
						<strong>
							{" "}
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
			<motion.div
				className="who-we-are-container-Home"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.9, duration: 1 }}
			>
				{/* Left Side - Bold Text */}
				<motion.div
					className="Mob-Rev who-we-are-left-Home"
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 1.1, duration: 1 }}
				>
					<h2>My Mission</h2>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="who-we-are-left-Home-button"
						onClick={skill_button}
					>
						Why I Do What I Do?
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
						In a world driven by data, I strive to bridge the gap
						between <strong>raw information</strong> and{" "}
						<strong>meaningful impact</strong>. My mission is to
						harness the power of{" "}
						<strong>AI, machine learning, and analytics</strong> to
						uncover insights, solve complex problems, and drive
						innovation.
					</p>
					<br />
					<p>
						I believe that{" "}
						<strong>data is more than just numbers</strong>
						—it’s the key to unlocking new possibilities, making
						smarter decisions, and shaping the future. Through
						continuous{" "}
						<strong>
							learning, experimentation, and real-world
							applications
						</strong>
						, I am dedicated to building solutions that are not just{" "}
						<strong>intelligent</strong> but also{" "}
						<strong>practical and transformative</strong>.
					</p>
					<br />
					<p>
						My journey is fueled by{" "}
						<strong>
							curiosity, persistence, and a passion for
							problem-solving
						</strong>
						. As I evolve in the field of data science, my goal is
						to contribute to a future where technology and data work
						together to make a difference.
					</p>
					<br />
					<p>
						<strong>
							Let’s decode the future, one dataset at a time.
						</strong>
					</p>
				</motion.div>
			</motion.div>

			{/* Blue Ribon */}
			<section className="intro-section">
				<div className="intro-content">
					<h1 className="intro-heading">
						<span className="highlight">Data tells a story</span>—I
						make sure it’s the right one.{" "}
						<span className="highlight">I’m Ashutohs Panwar</span>,
						a data scientist passionate about AI, analytics, and
						machine learning.
					</h1>
				</div>
			</section>

			<Edu />

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
						onClick={skill_button}
					>
						What I Bring to the Table?
					</motion.button>
				</div>
			</motion.section>

			<Prj />
			<Form />
		</>
	);
};

export default Hero;
