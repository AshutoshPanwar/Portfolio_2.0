import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, CheckCircle } from "lucide-react"; // Import icons
import "./Certificate.css";
import SQL_Basic from "../../Assets/Images/SQL_basic.png";

const Certifications = () => {
	const certifications = [
		{
			name: "Azure Fundamentals",
			issuer: "Microsoft Certified",
			date: "Sept, 2021",
			image: "https://img-c.udemycdn.com/course/480x270/2420912_0623.jpg", // Replace with actual image URL
			link: "https://www.credly.com/badges/59b4342d-97d9-4035-bc1b-4b43dee761a8/public_url", // Replace with actual link
		},
		{
			name: "Security, Compliance, and Identity Fundamentals",
			issuer: "Microsoft Certified",
			date: "July, 2022",
			image: "https://www.thomasmaurer.ch/wp-content/uploads/2021/04/SC-900-security-compliance-and-identity-fundamentals-1.jpg", // Replace with actual image URL
			link: "https://www.credly.com/badges/11ed6904-3a4e-4381-8fca-c732bdb94efc/public_url", // Replace with actual link
		},
		{
			name: "Azure Data Fundamentals",
			issuer: "Microsoft Certified",
			date: "July, 2022",
			image: "https://images.squarespace-cdn.com/content/v1/619f3e85766fd36658628a39/1637991232404-NBO4FU846M33MW44RLR0/DP900+banner.jpeg", // Replace with actual image URL
			link: "https://www.credly.com/badges/2edbf5f0-837a-434f-ba6f-6363bb0f628c/public_url", // Replace with actual link
		},
		{
			name: "Azure AI Fundamentals",
			issuer: "Microsoft Certified",
			date: "Oct, 2022",
			image: "https://images.squarespace-cdn.com/content/v1/619f3e85766fd36658628a39/1637991040726-3V8PLQBACS79NV9ZO2X7/AI900+banner.jpeg", // Replace with actual image URL
			link: "https://www.credly.com/badges/abc30ce9-41e4-440b-9b74-8d69e8b439d6/public_url", // Replace with actual link
		},
		{
			name: "Cloud Digital Leader",
			issuer: "Google Cloud",
			date: "Dec, 2022",
			image: "https://www.cloudsmog.net/wp-content/uploads/google-cloud-certified_Foundational-Cloud-Digital-Leader.jpg.webp", // Replace with actual image URL
			link: "https://www.credly.com/badges/58b48012-d395-48d9-93a1-c11ec02ced9a/public_url", // Replace with actual link
		},
		{
			name: "SQL (Basic) Certificate",
			issuer: "HackerRank",
			date: "Jan, 2025",
			image: SQL_Basic, // Replace with actual image URL
			link: "https://www.hackerrank.com/certificates/14ed6b82817d", // Replace with actual link
		},
		{
			name: "SQL (Intermediate) Certificate",
			issuer: "HackerRank",
			date: "Jan, 2025",
			image: SQL_Basic, // Replace with actual image URL
			link: "https://www.hackerrank.com/certificates/079487cabf54", // Replace with actual link
		},
		{
			name: "SQL (Advanced) Certificate",
			issuer: "HackerRank",
			date: "Jan, 2025",
			image: SQL_Basic, // Replace with actual image URL
			link: "https://www.hackerrank.com/certificates/212f19c26dc0", // Replace with actual link
		},
		{
			name: "Intro to Machine Learning.",
			issuer: "Kaggle",
			date: "Mar, 2024",
			image: "https://storage.googleapis.com/kaggle-learn-certificates/6932358/bd57c721aacd692a03fea13241b732e5.png", // Replace with actual image URL
			link: "https://www.kaggle.com/learn/certification/ashutoshpanwar1100/intro-to-machine-learning", // Replace with actual link
		},
		{
			name: "Intro to SQL.",
			issuer: "Kaggle",
			date: "Mar, 2024",
			image: "https://storage.googleapis.com/kaggle-learn-certificates/6932358/bd57c721aacd692a03fea13241b732e5.png",
			link: "https://www.kaggle.com/learn/certification/ashutoshpanwar1100/intro-to-sql", // Replace with actual link
		},
		{
			name: "Data Visualization.",
			issuer: "Kaggle",
			date: "Feb, 2024",
			image: "https://storage.googleapis.com/kaggle-learn-certificates/6932358/bd57c721aacd692a03fea13241b732e5.png",
			link: "https://www.kaggle.com/learn/certification/ashutoshpanwar1100/data-visualization", // Replace with actual link
		},
		{
			name: " Pandas.",
			issuer: "Kaggle",
			date: "Feb, 2024",
			image: "https://storage.googleapis.com/kaggle-learn-certificates/6932358/bd57c721aacd692a03fea13241b732e5.png",
			link: "https://www.kaggle.com/learn/certification/ashutoshpanwar1100/pandas", // Replace with actual link
		},
		{
			name: " Python.",
			issuer: "Kaggle",
			date: "Feb, 2024",
			image: "https://storage.googleapis.com/kaggle-learn-certificates/6932358/bd57c721aacd692a03fea13241b732e5.png",
			link: "https://www.kaggle.com/learn/certification/ashutoshpanwar1100/python", // Replace with actual link
		},
	];

	return (
		<motion.section
			className="certifications-section"
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
		>
			<h2>Certifications</h2>
			<p className="certifications-description">
				These certifications reflect my dedication to continuous
				upskilling and learning.
			</p>
			<motion.div
				className="certifications-grid"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.5, duration: 1 }}
			>
				{certifications.map((certification, index) => (
					<motion.div
						key={index}
						className="certification-card"
						whileHover={{ scale: 1.05 }}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.2 }}
					>
						<img
							src={certification.image}
							alt={certification.name}
							className="certification-image"
						/>
						<div className="certification-details">
							<div className="certification-title">
								<h3>{certification.name}</h3>
								<CheckCircle size={30} className="tick-icon" />
							</div>
							<p className="issuer">{certification.issuer}</p>
							<p className="date">{certification.date}</p>
							<a
								href={certification.link}
								target="_blank"
								rel="noopener noreferrer"
								className="view-certificate"
							>
								<ExternalLink size={16} />
								<span>View Certificate</span>
							</a>
						</div>
					</motion.div>
				))}
			</motion.div>
		</motion.section>
	);
};

export default Certifications;
