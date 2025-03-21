import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Music, Footprints, Puzzle } from "lucide-react";
import "./Skills.css"; // Import the CSS file

const Skills = () => {
	const skills = [
		{ category: "Programming Languages", items: ["Python", "R", "SQL"] },
		{
			category: "Machine Learning",
			items: ["Scikit-learn", "TensorFlow", "Keras"],
		},
		{
			category: "Data Visualization",
			items: ["Matplotlib", "Seaborn", "Tableau"],
		},
		{ category: "Big Data", items: ["Spark", "Hadoop"] },
		{ category: "Tools", items: ["Git", "Jupyter Notebook", "VS Code"] },
	];

	const certifications = [
		{
			name: "Certified Data Scientist - XYZ Institute",
			description:
				"Mastered advanced data science techniques including machine learning, data visualization, and big data processing.",
			image: "https://via.placeholder.com/300x200", // Replace with actual image URL
			link: "https://xyz-institute.com", // Replace with actual link
		},
		{
			name: "Machine Learning Specialization - ABC University",
			description:
				"Completed a comprehensive course on machine learning algorithms, model evaluation, and deployment.",
			image: "https://via.placeholder.com/300x200", // Replace with actual image URL
			link: "https://abc-university.com", // Replace with actual link
		},
		{
			name: "Tableau Desktop Specialist - Tableau",
			description:
				"Gained expertise in creating interactive dashboards and visualizations using Tableau.",
			image: "https://via.placeholder.com/300x200", // Replace with actual image URL
			link: "https://tableau.com", // Replace with actual link
		},
	];

	const hobbies = [
		{
			name: "Reading",
			description:
				"Psychology, Behavioral Economics, and Data Science books 📖",
			icon: <BookOpen size={48} color="#ff7e5f" />,
		},

		{
			name: "Music",
			description: "Enjoying instrumental and classical music 🎵",
			icon: <Music size={48} color="#ff7e5f" />,
		},
		{
			name: "Running",
			description: "Staying active and disciplined 🏃‍♂️",
			icon: <Footprints size={48} color="#ff7e5f" />,
		},
		{
			name: "Problem Solving",
			description: "Solving puzzles and logical challenges 💡",
			icon: <Puzzle size={48} color="#ff7e5f" />,
		},
	];

	return (
		<div className="page-container">
			{/* Full-Screen Heading */}
			<motion.section
				className="fullscreen-heading"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				<motion.div
					className="heading-container"
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 1 }}
				>
					<h1 className="main-heading">
						<span>Learning.</span>
						<span>Adapting.</span>
						<span>Innovating.</span>
					</h1>
				</motion.div>
			</motion.section>

			{/* My Skills Section */}
			<motion.section
				className="section"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				<h2>My Skills</h2>
				<motion.div
					className="skills-container"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5, duration: 1 }}
				>
					{skills.map((skill, index) => (
						<motion.div
							key={index}
							className="skill-card"
							whileHover={{ scale: 1.05 }}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
						>
							<h3>{skill.category}</h3>
							<ul>
								{skill.items.map((item, idx) => (
									<li key={idx}>{item}</li>
								))}
							</ul>
						</motion.div>
					))}
				</motion.div>
			</motion.section>

			{/* Certifications Section */}
			<motion.section
				className="section"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				<h2>Certifications</h2>
				<motion.div
					className="certifications-container"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5, duration: 1 }}
				>
					{certifications.map((certification, index) => (
						<motion.a
							key={index}
							href={certification.link}
							target="_blank"
							rel="noopener noreferrer"
							className="certification-card"
							whileHover={{ scale: 1.05 }}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
						>
							<img
								src={certification.image}
								alt={certification.name}
								className="certification-image"
							/>
							<div className="certification-details">
								<h3>{certification.name}</h3>
								<p>{certification.description}</p>
							</div>
						</motion.a>
					))}
				</motion.div>
			</motion.section>

			{/* Hobbies Section */}
			<motion.section
				className="section"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				<h2>Hobbies</h2>
				<motion.div
					className="hobbies-container"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5, duration: 1 }}
				>
					{hobbies.map((hobby, index) => (
						<motion.div
							key={index}
							className="hobby-card"
							whileHover={{ scale: 1.05 }}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
						>
							<div className="hobby-icon">{hobby.icon}</div>
							<div className="hobby-details">
								<h3>{hobby.name}</h3>
								<p>{hobby.description}</p>
							</div>
						</motion.div>
					))}
				</motion.div>
			</motion.section>
		</div>
	);
};

export default Skills;
