import React from "react";
import { motion } from "framer-motion";
import { Code, LineChart, Brain, Eye } from "lucide-react"; // Import Lucide icons
import "./Projects.css"; // Import the CSS file

const Projects = () => {
	const projects = [
		{
			id: 1,
			title: "Customer Churn Prediction",
			description:
				"Built a machine learning model to predict customer churn using Python and Scikit-learn.",
			tools: "Python, Pandas, Scikit-learn, Matplotlib",
			link: "https://github.com/yourusername/customer-churn-prediction",
			icon: <Brain className="project-icon" />, // Icon for machine learning
		},
		{
			id: 2,
			title: "Sentiment Analysis on Twitter Data",
			description:
				"Performed sentiment analysis on Twitter data using Natural Language Processing (NLP) techniques.",
			tools: "Python, NLTK, TensorFlow, Flask",
			link: "https://github.com/yourusername/sentiment-analysis",
			icon: <Code className="project-icon" />, // Icon for coding
		},
		{
			id: 3,
			title: "Sales Data Visualization Dashboard",
			description:
				"Created an interactive dashboard to visualize sales data using Tableau.",
			tools: "Tableau, SQL, Excel",
			link: "https://public.tableau.com/yourdashboard",
			icon: <LineChart className="project-icon" />, // Icon for data visualization
		},
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
				<h1 className="about-heading">Bringing Visions to Reality.</h1>
			</motion.div>

			{/* Projects List */}
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
					{projects.map(project => (
						<motion.div
							key={project.id}
							className="service-card"
							whileHover={{ scale: 1.05 }}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							<div className="project-icon-container">
								{project.icon} {/* Render the icon */}
							</div>
							<h3>{project.title}</h3>
							<p>{project.description}</p>
							<p className="project-tools">
								<strong>Tools:</strong> {project.tools}
							</p>
							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								className="project-link"
							>
								<Eye className="view-icon" />{" "}
								{/* Icon for "View Project" */}
								View Project
							</a>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</motion.section>
	);
};

export default Projects;
