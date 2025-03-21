import React from "react";
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
		<section className="skills">
			<h2>My Skills</h2>
			<div className="skills-list">
				{skills.map((skill, index) => (
					<div key={index} className="skill-category">
						<h3>{skill.category}</h3>
						<ul>
							{skill.items.map((item, idx) => (
								<li key={idx}>{item}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
};

export default Skills;
