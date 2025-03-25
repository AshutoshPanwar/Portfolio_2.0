import React from "react";
import { motion, useInView } from "framer-motion";
import "./Skill.css";

const Skills = () => {
	const skills = [
		{
			category: "Programming Languages",
			items: [
				{
					name: "Python",
					proficiency: 90,
					icon: "https://img.icons8.com/color/512/python.png",
				},
				{
					name: "JavaScript",
					proficiency: 85,
					icon: "/icons/javascript.png",
				},
				{ name: "Java", proficiency: 75, icon: "/icons/java.png" },
			],
		},
		{
			category: "Data Science & ML",
			items: [
				{
					name: "Machine Learning",
					proficiency: 80,
					icon: "/icons/ml.png",
				},
				{
					name: "Deep Learning",
					proficiency: 70,
					icon: "/icons/dl.png",
				},
				{
					name: "Statistics",
					proficiency: 85,
					icon: "/icons/stats.png",
				},
			],
		},
		{
			category: "Visualization Tools",
			items: [
				{
					name: "Tableau",
					proficiency: 90,
					icon: "/icons/tableau.png",
				},
				{
					name: "Matplotlib",
					proficiency: 80,
					icon: "/icons/matplotlib.png",
				},
				{
					name: "Seaborn",
					proficiency: 75,
					icon: "/icons/seaborn.png",
				},
			],
		},
		{
			category: "Big Data & Databases",
			items: [
				{ name: "Spark", proficiency: 85, icon: "/icons/spark.png" },
				{ name: "Hadoop", proficiency: 75, icon: "/icons/hadoop.png" },
				{ name: "SQL", proficiency: 90, icon: "/icons/sql.png" },
			],
		},
		{
			category: "Cloud & Deployment",
			items: [
				{ name: "AWS", proficiency: 80, icon: "/icons/aws.png" },
				{ name: "Docker", proficiency: 75, icon: "/icons/docker.png" },
				{
					name: "Kubernetes",
					proficiency: 70,
					icon: "/icons/kubernetes.png",
				},
			],
		},
	];

	// Use the useInView hook to detect when elements enter the viewport
	const ref = React.useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.5 });

	return (
		<motion.section
			className="skills-section-sk"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
		>
			<h2>My Skills</h2>
			<p className="skills-description-sk">
				Here are some of the skills I have developed over the years.
			</p>
			<div className="skills-container-sk" ref={ref}>
				{skills.map((category, index) => (
					<div key={index} className="skills-category-sk">
						<motion.h3
							initial={{ opacity: 0, y: 20 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.5, delay: index * 0.2 }}
						>
							{category.category}
						</motion.h3>
						<motion.hr
							initial={{ width: 0 }}
							animate={isInView ? { width: "100%" } : {}}
							transition={{
								duration: 0.5,
								delay: index * 0.2 + 0.2,
							}}
						/>
						<div className="skills-grid-sk">
							{category.items.map((skill, idx) => (
								<motion.div
									key={idx}
									className="skill-card-sk"
									whileHover={{ scale: 1.05 }}
									initial={{ opacity: 0, y: 20 }}
									animate={
										isInView ? { opacity: 1, y: 0 } : {}
									}
									transition={{
										duration: 0.5,
										delay: index * 0.2 + idx * 0.1,
									}}
								>
									<div className="skill-icon-sk">
										{typeof skill.icon === "string" ? (
											<img
												src={skill.icon}
												alt={skill.name}
												className="skill-icon-image"
											/>
										) : (
											skill.icon
										)}
									</div>
									<div className="skill-info-sk">
										<h4>{skill.name}</h4>
										<div className="progress-bar-sk">
											<div
												className="progress-sk"
												style={{
													width: `${skill.proficiency}%`,
												}}
											></div>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				))}
			</div>
		</motion.section>
	);
};

export default Skills;
