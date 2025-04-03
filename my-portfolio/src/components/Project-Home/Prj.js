import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import "./Prj.css";
import tedTalksImage from "../../Assets/Images/Ted_Talk.png";
import Portfolio1 from "../../Assets/Images/Portfolio_1.png";

const projects = [
	{
		id: 1,
		image: tedTalksImage,
		name: "TED-Talks Recommendation System",
		description:
			"Enhanced user engagement by delivering personalized content that align with individual interests.",
		technologies: [
			"Python",
			"Flask",
			"NumPy",
			"Scikit-learn",
			"Git",
			"CI/CD ",
		],
		link: "https://github.com/AshutoshPanwar/TED-Talks_Recommendation_System", // Add project link here
	},
	{
		id: 2,
		image: Portfolio1,
		name: "Master Portfolio Website",
		description:
			"Portfolio is a responsive static Resume website which is created using HTML5, css3 and JS3.",
		technologies: ["HTML5", "CSS3", "JavaScript", "Git", "Firebase"],
		link: "https://github.com/AshutoshPanwar/Portfolio", // Add project link here
	},
	// {
	// 	id: 3,
	// 	image: "https://ichef.bbci.co.uk/news/480/cpsprodpb/1766/production/_99709950_english.jpg.webp",
	// 	name: "Project 3",
	// 	description: "This is a description for Project 3.",
	// 	technologies: ["Vue", "Express", "MySQL"],
	// 	link: "#",
	// },
	// {
	// 	id: 4,
	// 	image: "https://ichef.bbci.co.uk/news/480/cpsprodpb/1766/production/_99709950_english.jpg.webp",
	// 	name: "Project 4",
	// 	description: "This is a description for Project 4.",
	// 	technologies: ["Vue", "Express", "MySQL"],
	// 	link: "#",
	// },
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

	// Animation variants
	const headingVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	const buttonVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
	};

	const project_button = () => {
		window.location.href = "/projects"; // Replace with your target URL
	};

	return (
		<div className="section-container" ref={sectionRef}>
			{/* Updated Heading Container */}
			<motion.div
				className={`prj-heading-container ${visible ? "visible" : ""}`}
				variants={headingVariants}
				initial="hidden"
				animate={visible ? "visible" : "hidden"}
			>
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
			</motion.div>

			{/* Cards Container */}
			<div className={`cards-container ${visible ? "visible" : ""}`}>
				{projects.map(project => (
					<motion.div
						key={project.id}
						className={`card ${visible ? "visible" : ""}`}
						variants={cardVariants}
						initial="hidden"
						animate={visible ? "visible" : "hidden"}
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
					</motion.div>
				))}
			</div>

			{/* Discover More Button */}
			<motion.div
				className={`discover-more-container ${
					visible ? "visible" : ""
				}`}
				variants={buttonVariants}
				initial="hidden"
				animate={visible ? "visible" : "hidden"}
				onClick={project_button}
			>
				<a href="#" className="discover-more-button">
					See My Work!
				</a>
			</motion.div>
		</div>
	);
};

export default ProjectionSection;
