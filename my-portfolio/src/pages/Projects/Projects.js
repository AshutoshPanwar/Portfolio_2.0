import React from "react";
import "./Projects.css"; // Optional: For styling

const Projects = () => {
	const projects = [
		{
			id: 1,
			title: "Customer Churn Prediction",
			description:
				"Built a machine learning model to predict customer churn using Python and Scikit-learn.",
			tools: "Python, Pandas, Scikit-learn, Matplotlib",
			link: "https://github.com/yourusername/customer-churn-prediction",
		},
		{
			id: 2,
			title: "Sentiment Analysis on Twitter Data",
			description:
				"Performed sentiment analysis on Twitter data using Natural Language Processing (NLP) techniques.",
			tools: "Python, NLTK, TensorFlow, Flask",
			link: "https://github.com/yourusername/sentiment-analysis",
		},
		{
			id: 3,
			title: "Sales Data Visualization Dashboard",
			description:
				"Created an interactive dashboard to visualize sales data using Tableau.",
			tools: "Tableau, SQL, Excel",
			link: "https://public.tableau.com/yourdashboard",
		},
	];

	return (
		<section className="projects">
			<h2>My Projects</h2>
			<div className="project-list">
				{projects.map(project => (
					<div key={project.id} className="project-card">
						<h3>{project.title}</h3>
						<p>{project.description}</p>
						<p>
							<strong>Tools:</strong> {project.tools}
						</p>
						<a
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
						>
							View Project
						</a>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
