import React from "react";
import "./About.css";

const AboutSection = () => {
	return (
		<section className="about-section">
			{/* Massive Full-Width Heading */}
			<div className="about-heading-container">
				<h1 className="about-heading">WHO AM I</h1>
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
					<div className="service-card">
						<h3>Data Science & Analytics</h3>
						<p>
							📊 Transforming raw data into actionable insights.
						</p>
					</div>
					<div className="service-card">
						<h3>Machine Learning & AI</h3>
						<p>🤖 Building intelligent systems for the future.</p>
					</div>
					<div className="service-card">
						<h3>Financial Data Modeling</h3>
						<p>📈 Crafting models to predict market trends.</p>
					</div>
					<div className="service-card">
						<h3>Research & Insights</h3>
						<p>
							📚 Delivering data-driven research for
							decision-making.
						</p>
					</div>
					<div className="service-card">
						<h3>Data-driven Business Strategies</h3>
						<p>🌐 Leveraging data to drive business growth.</p>
					</div>
					<div className="service-card">
						<h3>Predictive Analysis</h3>
						<p>🔍 Forecasting trends with advanced analytics.</p>
					</div>
					<div className="service-card">
						<h3>Algorithm Optimization</h3>
						<p>⚡ Enhancing performance through optimization.</p>
					</div>
					<div className="service-card">
						<h3>Big Data Processing</h3>
						<p>📂 Handling large datasets with precision.</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
