import React from "react";

const Projects = () => {
	const projects = [
		{
			id: 1,
			name: "Project 1",
			description: "A brief description of Project 1.",
		},
		{
			id: 2,
			name: "Project 2",
			description: "A brief description of Project 2.",
		},
		{
			id: 3,
			name: "Project 3",
			description: "A brief description of Project 3.",
		},
	];

	return (
		<section>
			<h2>My Projects</h2>
			<ul>
				{projects.map(project => (
					<li key={project.id}>
						<h3>{project.name}</h3>
						<p>{project.description}</p>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Projects;
