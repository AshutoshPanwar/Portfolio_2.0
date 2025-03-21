import React from "react";
import { motion } from "framer-motion";
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

	return (
		<motion.section
			className="about-section" // Reuse the about-section class for consistent background
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
		>
			{/* Punchline Heading */}
			<motion.div
				className="about-heading-container"
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2, duration: 1 }}
			>
				<h1 className="about-heading">
					<span>Learning.</span>
					<span>Adapting.</span>
					<span>Innovating.</span>
				</h1>
			</motion.div>

			{/* Skills List */}
			<motion.div
				className="about-content"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.5, duration: 1 }}
			>
				<motion.div
					className="about-services"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1, duration: 1 }}
				>
					{skills.map((skill, index) => (
						<motion.div
							key={index}
							className="service-card"
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
			</motion.div>
		</motion.section>
	);
};

export default Skills;
