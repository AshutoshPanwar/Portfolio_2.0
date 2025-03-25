import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, CheckCircle } from "lucide-react"; // Import icons
import "./Certificate.css";

const Certifications = () => {
	const certifications = [
		{
			name: "Certified Data Scientist",
			issuer: "XYZ Institute",
			date: "Jan 2023",
			image: "https://marketplace.canva.com/EAF7h2vFXaU/2/0/1600w/canva-blue-and-gold-elegant-curved-certificate-of-achievement-certificate-HTxQpZIhLas.jpg", // Replace with actual image URL
			link: "https://xyz-institute.com", // Replace with actual link
		},
		{
			name: "Machine Learning Specialization",
			issuer: "ABC University",
			date: "Mar 2023",
			image: "https://via.placeholder.com/300x200", // Replace with actual image URL
			link: "https://abc-university.com", // Replace with actual link
		},
		{
			name: "Tableau Desktop Specialist",
			issuer: "Tableau",
			date: "May 2023",
			image: "https://via.placeholder.com/300x200", // Replace with actual image URL
			link: "https://tableau.com", // Replace with actual link
		},
		{
			name: "Tableau Desktop Specialist",
			issuer: "Tableau",
			date: "May 2023",
			image: "https://via.placeholder.com/300x200", // Replace with actual image URL
			link: "https://tableau.com", // Replace with actual link
		},
		{
			name: "Tableau Desktop Specialist",
			issuer: "Tableau",
			date: "May 2023",
			image: "https://via.placeholder.com/300x200", // Replace with actual image URL
			link: "https://tableau.com", // Replace with actual link
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
				Here are some of the certifications I’ve earned to enhance my
				skills and knowledge.
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
