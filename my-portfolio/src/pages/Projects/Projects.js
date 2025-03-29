import React from "react";
import { motion } from "framer-motion";
import { Code, LineChart, Brain, Eye, Github } from "lucide-react"; // Import Lucide icons
import "./Projects.css"; // Import the CSS file
import tedTalksImage from "../../Assets/Images/Ted_Talk.png";
import Portfolio1 from "../../Assets/Images/Portfolio_1.png";

const Projects = () => {
	const projects = [
		{
			id: 1,
			title: "TED-Talks Recommendation System",
			description:
				"Enhanced user engagement by delivering personalized content that align with individual interests.",
			skills: [
				"Python",
				"Flask",
				"NumPy",
				"Scikit-learn",
				"Git",
				"CI/CD ",
			],
			link: "https://github.com/AshutoshPanwar/TED-Talks_Recommendation_System",
			icon: <Code className="project-icon" />, // Icon for coding
			image: tedTalksImage, // Add image URL
		},
		{
			id: 2,
			title: "Master Portfolio Website",
			description:
				"A machine learning model using linear regression to predict housing prices based on the Boston dataset.",
			skills: ["HTML5", "CSS3", "JavaScript", "Git", "Firebase"],
			link: "https://github.com/AshutoshPanwar/Portfolio",
			icon: <Brain className="project-icon" />, // Icon for machine learning
			image: Portfolio1, // Add image URL
		},
		// {
		// 	id: 3,
		// 	title: "Resume WebSite",
		// 	description:
		// 		"A modern, visually appealing portfolio website built with React.js to showcase my work in data science.",
		// 	skills: ["React", "Tailwind CSS", "JavaScript"],
		// 	link: "#",
		// 	icon: <LineChart className="project-icon" />,
		// 	image: "https://via.placeholder.com/400x250",
		// },
		// {
		// 	id: 4,
		// 	title: "Incident Management System",
		// 	description:
		// 		"A REST API built using Django Rest Framework and MySQL for handling user incidents with a super admin panel.",
		// 	skills: ["Django", "REST API", "MySQL", "Python"],
		// 	link: "#",
		// 	icon: <Code className="project-icon" />,
		// 	image: "https://via.placeholder.com/400x250",
		// },
	];

	return (
		<motion.section
			className="projects-section" // Updated class name
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
		>
			{/* Punchline Heading */}
			<motion.div
				className="projects-heading-container"
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2, duration: 1 }}
			>
				<h1 className="projects-heading">
					<span className="My">My</span> Projects
				</h1>
			</motion.div>

			{/* Introduction Section */}
			<motion.div
				className="projects-intro"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.5, duration: 1 }}
			>
				<p className="intro-text">
					"Every project I work on is a step forward in mastering data
					science and technology. From predictive analytics to
					real-world automation, my work is driven by curiosity and
					precision. Here, you’ll find a showcase of my best projects,
					where complex problems meet innovative solutions."
				</p>
			</motion.div>

			{/* Projects List */}
			<motion.div
				className="projects-content"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.5, duration: 1 }} // Delay to show after intro
			>
				<div className="projects-grid">
					{projects.map((project, index) => (
						<motion.div
							key={project.id}
							className={`project-card ${
								index % 2 !== 0 ? "reverse" : ""
							}`} // Add "reverse" class for alternating rows
							whileHover={{ scale: 1.05 }}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							<div className="project-image">
								{project.image ? (
									<img
										src={project.image}
										alt={project.title}
										className="project-image-content"
									/>
								) : (
									<span className="image-placeholder">
										Project Image
									</span>
								)}
							</div>
							<div className="project-details">
								<div className="project-icon-container">
									{project.icon} {/* Render the icon */}
								</div>
								<h3>{project.title}</h3>
								<p>{project.description}</p>
								<div className="project-skills">
									{project.skills.map((skill, index) => (
										<span key={index} className="skill-tag">
											{skill}
										</span>
									))}
								</div>
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="project-link"
								>
									<Eye className="view-icon" /> View Project
								</a>
							</div>
						</motion.div>
					))}
				</div>
			</motion.div>

			{/* More Projects Button */}
			<motion.div
				className="more-projects-button-container"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 2, duration: 1 }} // Delay to show after projects
			>
				<a
					href="https://github.com/AshutoshPanwar" // Replace with your GitHub URL
					target="_blank"
					rel="noopener noreferrer"
					className="more-projects-button"
				>
					<Github className="github-icon" /> More Projects on GitHub
				</a>
			</motion.div>
		</motion.section>
	);
};

export default Projects;
