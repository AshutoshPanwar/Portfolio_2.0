import React from "react";
import "./About.css";

const AboutSection = () => {
	return (
		<section className="about-section">
			{/* Massive Full-Width Heading */}
			<div className="about-heading-container">
				<h1 className="about-heading">WHO WE ARE</h1>
			</div>

			{/* Content Section */}
			<div className="about-content">
				<p className="about-description">
					We are a cutting-edge, data-driven team specializing in AI,
					data science, and analytics. Our mission is to harness the
					power of machine learning, finance, and predictive insights
					to build impactful solutions that drive real-world success.
				</p>

				{/* Services List */}
				<div className="about-services">
					<ul className="service-list">
						<li>📊 Data Science & Analytics</li>
						<li>🤖 Machine Learning & AI</li>
						<li>📈 Financial Data Modeling</li>
						<li>📚 Research & Insights</li>
					</ul>

					<ul className="service-list">
						<li>🌐 Data-driven Business Strategies</li>
						<li>🔍 Predictive Analysis</li>
						<li>⚡ Algorithm Optimization</li>
						<li>📂 Big Data Processing</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
