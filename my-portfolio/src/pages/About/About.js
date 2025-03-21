import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const AboutSection = () => {
	return (
		<motion.section
			className="about-section"
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
		>
			{/* Massive Full-Width Heading */}
			<motion.div
				className="about-heading-container"
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2, duration: 1 }}
			>
				<h1 className="about-heading">WHO AM I</h1>
			</motion.div>

			{/* Content Section */}
			<motion.div
				className="about-content"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.5, duration: 1 }}
			>
				<motion.p
					className="about-description"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.7, duration: 1 }}
				>
					We are a cutting-edge, data-driven team specializing in AI,
					data science, and analytics. Our mission is to harness the
					power of machine learning, finance, and predictive insights
					to build impactful solutions that drive real-world success.
				</motion.p>

				{/* Services List */}
				<motion.div
					className="about-services"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1, duration: 1 }}
				>
					<motion.div
						className="service-card"
						whileHover={{ scale: 1.05 }}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1.2, duration: 0.5 }}
					>
						<h3>Data Science & Analytics</h3>
						<p>
							📊 Transforming raw data into actionable insights.
						</p>
					</motion.div>
					<motion.div
						className="service-card"
						whileHover={{ scale: 1.05 }}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1.4, duration: 0.5 }}
					>
						<h3>Machine Learning & AI</h3>
						<p>🤖 Building intelligent systems for the future.</p>
					</motion.div>
					<motion.div
						className="service-card"
						whileHover={{ scale: 1.05 }}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1.6, duration: 0.5 }}
					>
						<h3>Financial Data Modeling</h3>
						<p>📈 Crafting models to predict market trends.</p>
					</motion.div>
					<motion.div
						className="service-card"
						whileHover={{ scale: 1.05 }}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1.8, duration: 0.5 }}
					>
						<h3>Research & Insights</h3>
						<p>
							📚 Delivering data-driven research for
							decision-making.
						</p>
					</motion.div>
					<motion.div
						className="service-card"
						whileHover={{ scale: 1.05 }}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 2, duration: 0.5 }}
					>
						<h3>Data-driven Business Strategies</h3>
						<p>🌐 Leveraging data to drive business growth.</p>
					</motion.div>
					<motion.div
						className="service-card"
						whileHover={{ scale: 1.05 }}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 2.2, duration: 0.5 }}
					>
						<h3>Predictive Analysis</h3>
						<p>🔍 Forecasting trends with advanced analytics.</p>
					</motion.div>
					<motion.div
						className="service-card"
						whileHover={{ scale: 1.05 }}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 2.4, duration: 0.5 }}
					>
						<h3>Algorithm Optimization</h3>
						<p>⚡ Enhancing performance through optimization.</p>
					</motion.div>
					<motion.div
						className="service-card"
						whileHover={{ scale: 1.05 }}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 2.6, duration: 0.5 }}
					>
						<h3>Big Data Processing</h3>
						<p>📂 Handling large datasets with precision.</p>
					</motion.div>
				</motion.div>
			</motion.div>
		</motion.section>
	);
};

export default AboutSection;
