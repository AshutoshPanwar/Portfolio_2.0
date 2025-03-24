import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import MyPhoto from "../../Assets/Images/logo.png";

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

				{/* Who We Are Section */}
				<motion.div
					className="who-we-are-container"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.9, duration: 1 }}
				>
					{/* Left Side - Bold Text */}
					<motion.div
						className="who-we-are-left"
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 1.1, duration: 1 }}
					>
						<h2>About Me!</h2>
					</motion.div>

					{/* Right Side - Paragraph */}
					<motion.div
						className="who-we-are-right"
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 1.1, duration: 1 }}
					>
						<p>
							We are a <strong>forward-thinking</strong> team of
							innovators, dedicated to pushing the boundaries of
							technology. Our expertise spans{" "}
							<strong>AI, machine learning,</strong> and{" "}
							<strong>data analytics</strong>, enabling us to
							deliver solutions that are not only{" "}
							<strong>cutting-edge</strong> but also{" "}
							<strong>practical</strong> and{" "}
							<strong>impactful</strong>. With a focus on{" "}
							<strong>collaboration</strong> and{" "}
							<strong>excellence</strong>, we strive to create a
							better future through technology.
						</p>
						<p>
							We are a <strong>forward-thinking</strong> team of
							innovators, dedicated to pushing the boundaries of
							technology. Our expertise spans{" "}
							<strong>AI, machine learning,</strong> and{" "}
							<strong>data analytics</strong>, enabling us to
							deliver solutions that are not only{" "}
							<strong>cutting-edge</strong> but also{" "}
							<strong>practical</strong> and{" "}
							<strong>impactful</strong>. With a focus on{" "}
							<strong>collaboration</strong> and{" "}
							<strong>excellence</strong>, we strive to create a
							better future through technology.
						</p>
					</motion.div>
				</motion.div>

				{/* My Story Section */}
				<motion.div
					className="my-story-container"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.2, duration: 1 }}
				>
					{/* Left Side - Bold Text */}

					<motion.div
						className="my-story-right"
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 1.4, duration: 1 }}
					>
						<p>
							I started my journey in the tech world as a curious
							student with a passion for solving complex problems.
							Over the years, I have honed my skills in data
							science, machine learning, and AI, working on
							diverse projects that have shaped my expertise. My
							goal is to continue pushing the boundaries of
							innovation and making a meaningful impact in the
							industry.
						</p>
						<p>
							I started my journey in the tech world as a curious
							student with a passion for solving complex problems.
							Over the years, I have honed my skills in data
							science, machine learning, and AI, working on
							diverse projects that have shaped my expertise. My
							goal is to continue pushing the boundaries of
							innovation and making a meaningful impact in the
							industry.
						</p>
					</motion.div>
					{/* Right Side - Paragraph */}
					<motion.div
						className="my-story-left"
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 1.4, duration: 1 }}
					>
						<h2>My Story</h2>
					</motion.div>
				</motion.div>

				{/* My Mission Section */}
				<motion.div
					className="my-mission-container"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.6, duration: 1 }}
				>
					{/* Left Side - Bold Text */}
					<motion.div
						className="my-mission-left"
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 1.8, duration: 1 }}
					>
						<h2>My Mission</h2>
					</motion.div>

					{/* Right Side - Paragraph */}
					<motion.div
						className="my-mission-right"
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 1.8, duration: 1 }}
					>
						<p>
							My mission is to leverage the power of technology to
							solve real-world problems. I am committed to
							building innovative solutions that drive meaningful
							change and create a positive impact on society.
							Through collaboration, continuous learning, and a
							passion for excellence, I strive to push the
							boundaries of what is possible.
						</p>
						<p>
							My mission is to leverage the power of technology to
							solve real-world problems. I am committed to
							building innovative solutions that drive meaningful
							change and create a positive impact on society.
							Through collaboration, continuous learning, and a
							passion for excellence, I strive to push the
							boundaries of what is possible.
						</p>
					</motion.div>
				</motion.div>

				{/* Services List */}
				{/* <motion.div
					className="about-services"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 2, duration: 1 }}
				>
					<motion.div
						className="service-card"
						whileHover={{ scale: 1.05 }}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 2.2, duration: 0.5 }}
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
						transition={{ delay: 2.4, duration: 0.5 }}
					>
						<h3>Machine Learning & AI</h3>
						<p>🤖 Building intelligent systems for the future.</p>
					</motion.div>
					<motion.div
						className="service-card"
						whileHover={{ scale: 1.05 }}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 2.6, duration: 0.5 }}
					>
						<h3>Financial Data Modeling</h3>
						<p>📈 Crafting models to predict market trends.</p>
					</motion.div>
					<motion.div
						className="service-card"
						whileHover={{ scale: 1.05 }}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 2.8, duration: 0.5 }}
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
						transition={{ delay: 3, duration: 0.5 }}
					>
						<h3>Data-driven Business Strategies</h3>
						<p>🌐 Leveraging data to drive business growth.</p>
					</motion.div>
					<motion.div
						className="service-card"
						whileHover={{ scale: 1.05 }}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 3.2, duration: 0.5 }}
					>
						<h3>Predictive Analysis</h3>
						<p>🔍 Forecasting trends with advanced analytics.</p>
					</motion.div>
					<motion.div
						className="service-card"
						whileHover={{ scale: 1.05 }}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 3.4, duration: 0.5 }}
					>
						<h3>Algorithm Optimization</h3>
						<p>⚡ Enhancing performance through optimization.</p>
					</motion.div>
					<motion.div
						className="service-card"
						whileHover={{ scale: 1.05 }}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 3.6, duration: 0.5 }}
					>
						<h3>Big Data Processing</h3>
						<p>📂 Handling large datasets with precision.</p>
					</motion.div>
				</motion.div> */}
			</motion.div>
		</motion.section>
	);
};

export default AboutSection;
