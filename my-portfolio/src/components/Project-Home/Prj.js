import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import "./Prj.css";

const projects = [
	{
		id: 1,
		image: "https://via.placeholder.com/400",
		name: "Project 1",
		description: "This is a description for Project 1.",
		technologies: ["React", "Node.js", "MongoDB"],
		link: "#", // Add project link here
	},
	{
		id: 2,
		image: "https://ichef.bbci.co.uk/news/480/cpsprodpb/1766/production/_99709950_english.jpg.webp",
		name: "Project 2",
		description: "This is a description for Project 2.",
		technologies: ["Vue", "Express", "MySQL"],
		link: "#", // Add project link here
	},
	{
		id: 3,
		image: "https://ichef.bbci.co.uk/news/480/cpsprodpb/1766/production/_99709950_english.jpg.webp",
		name: "Project 3",
		description: "This is a description for Project 3.",
		technologies: ["Vue", "Express", "MySQL"],
		link: "#", // Add project link here
	},
	{
		id: 4,
		image: "https://ichef.bbci.co.uk/news/480/cpsprodpb/1766/production/_99709950_english.jpg.webp",
		name: "Project 4",
		description: "This is a description for Project 4.",
		technologies: ["Vue", "Express", "MySQL"],
		link: "#", // Add project link here
	},
	// Add more projects as needed
];

const ProjectionSection = () => {
	const [visible, setVisible] = useState(false);
	const sectionRef = useRef(null);

	const handleScroll = () => {
		const sectionTop = sectionRef.current.getBoundingClientRect().top;
		const windowHeight = window.innerHeight;
		if (sectionTop < windowHeight * 0.8) {
			setVisible(true);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="section-container" ref={sectionRef}>
			{/* Updated Heading Container */}
			<div className={`heading-container ${visible ? "visible" : ""}`}>
				{/* Left Column */}
				<div className="prj-left-column">
					<motion.h1
						className="prj-heading"
						whileHover={{ scale: 1.05 }}
					>
						<span className="prj-gradient-text">Projects</span> That
						Matter
					</motion.h1>
				</div>

				{/* Right Column */}
				<div className="prj-right-column">
					<p className="prj-description">
						From <span className="">data-driven solutions</span> to{" "}
						<span className="">innovative applications</span>, each
						project is a step towards excellence.
					</p>
				</div>
			</div>

			{/* Cards Container */}
			<div className={`cards-container ${visible ? "visible" : ""}`}>
				{projects.map(project => (
					<div
						key={project.id}
						className={`card ${visible ? "visible" : ""}`}
					>
						<img
							src={project.image}
							alt={project.name}
							className="image"
						/>
						<div className="content">
							<h3 className="project-name">{project.name}</h3>
							<p className="description">{project.description}</p>
							<div className="technologies">
								{project.technologies.map((tech, index) => (
									<span key={index} className="badge">
										{tech}
									</span>
								))}
							</div>
							<a
								href={project.link}
								className="view-project-button"
							>
								View Project
							</a>
						</div>
					</div>
				))}
			</div>

			{/* Discover More Button */}
			<div
				className={`discover-more-container ${
					visible ? "visible" : ""
				}`}
			>
				<a href="#" className="discover-more-button">
					Discover More
				</a>
			</div>
		</div>
	);
};

export default ProjectionSection;
