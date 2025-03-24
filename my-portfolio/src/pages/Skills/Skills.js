import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Music, Footprints, Puzzle, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide
import { Autoplay, Pagination, Navigation } from "swiper/modules"; // Import Swiper modules
import "swiper/css"; // Core Swiper CSS
import "swiper/css/pagination"; // Pagination CSS
import "swiper/css/navigation"; // Navigation CSS
import "./Skills.css"; // Import the CSS file

const Skills = () => {
	const skills = [
		{
			category: "Programming Languages",
			items: [
				{ name: "Python", icon: "https://via.placeholder.com/50" }, // Replace with actual icon URL
				{ name: "R", icon: "https://via.placeholder.com/50" },
				{
					name: "SQL",
					icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png",
				},
			],
		},
		{
			category: "Machine Learning",
			items: [
				{
					name: "Scikit-learn",
					icon: "https://via.placeholder.com/50",
				},
				{ name: "TensorFlow", icon: "https://via.placeholder.com/50" },
				{ name: "Keras", icon: "https://via.placeholder.com/50" },
			],
		},
		{
			category: "Data Visualization",
			items: [
				{ name: "Matplotlib", icon: "https://via.placeholder.com/50" },
				{ name: "Seaborn", icon: "https://via.placeholder.com/50" },
				{ name: "Tableau", icon: "https://via.placeholder.com/50" },
			],
		},
		{
			category: "Big Data",
			items: [
				{ name: "Spark", icon: "https://via.placeholder.com/50" },
				{ name: "Hadoop", icon: "https://via.placeholder.com/50" },
			],
		},
		{
			category: "Tools",
			items: [
				{ name: "Git", icon: "https://via.placeholder.com/50" },
				{
					name: "Jupyter Notebook",
					icon: "https://via.placeholder.com/50",
				},
				{ name: "VS Code", icon: "https://via.placeholder.com/50" },
			],
		},
	];

	const certifications = [
		{
			name: "Certified Data Scientist - XYZ Institute",
			description:
				"Mastered advanced data science techniques including machine learning, data visualization, and big data processing.",
			image: "https://via.placeholder.com/300x200", // Replace with actual image URL
			link: "https://xyz-institute.com", // Replace with actual link
		},
		{
			name: "Machine Learning Specialization - ABC University",
			description:
				"Completed a comprehensive course on machine learning algorithms, model evaluation, and deployment.",
			image: "https://via.placeholder.com/300x200", // Replace with actual image URL
			link: "https://abc-university.com", // Replace with actual link
		},
		{
			name: "Tableau Desktop Specialist - Tableau",
			description:
				"Gained expertise in creating interactive dashboards and visualizations using Tableau.",
			image: "https://via.placeholder.com/300x200", // Replace with actual image URL
			link: "https://tableau.com", // Replace with actual link
		},
	];

	const hobbies = [
		{
			name: "Reading",
			description:
				"Exploring psychology, behavioral economics, and data science books.",
			image: "https://t4.ftcdn.net/jpg/02/72/07/29/360_F_272072948_HiAHqdWyphxZmePvKKwXjxxRItUURlEY.jpg", // Replace with actual image URL
		},
		{
			name: "Music",
			description: "Enjoying instrumental and classical music.",
			image: "https://economictimes.indiatimes.com/thumb/msid-68228880,width-1200,height-900,resizemode-4,imgsize-313661/music-gettyimages-894058154.jpg?from=mdr", // Replace with actual image URL
		},
		{
			name: "Running",
			description: "Staying active and disciplined through running.",
			image: "https://physiosc.com/storage/wysiwyg/image_1.png", // Replace with actual image URL
		},
		{
			name: "Problem Solving",
			description: "Solving puzzles and logical challenges.",
			image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTELMCapAxKz_lDKkpKtjQDKrEeRZQfzY_s_g&s", // Replace with actual image URL
		},
	];

	const services = [
		{
			title: "Data Analysis",
			description:
				"Transforming raw data into actionable insights with advanced analytics and visualization techniques.",
		},
		{
			title: "Machine Learning",
			description:
				"Building predictive models and deploying AI solutions to solve complex business problems.",
		},
		{
			title: "Data Visualization",
			description:
				"Creating interactive dashboards and visual stories to communicate data-driven insights effectively.",
		},
	];

	return (
		<div className="page-container">
			{/* Full-Screen Heading */}
			<motion.section
				className="fullscreen-heading"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				<motion.div
					className="heading-container"
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 1 }}
				>
					<h1 className="main-heading">
						<span>Learning.</span>
						<span>Adapting.</span>
						<span>Innovating.</span>
					</h1>
				</motion.div>
			</motion.section>

			{/* What I Do Section */}
			<motion.section
				className="what-i-do-section"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				<div className="what-i-do-container">
					{/* Left Side - Iridescent Gradient */}
					<div className="what-i-do-left">
						<motion.div
							className="iridescent-gradient"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.5, duration: 1 }}
						>
							<h2>What I Do</h2>
							<p>
								I specialize in turning data into insights,
								building intelligent systems, and creating
								impactful visualizations.
							</p>
						</motion.div>
					</div>

					{/* Right Side - Service Cards */}
					<div className="what-i-do-right">
						{services.map((service, index) => (
							<motion.div
								key={index}
								className={`service-card ${
									index === 1 ? "highlighted" : ""
								}`}
								whileHover={{ scale: 1.05 }}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.5,
									delay: index * 0.2,
								}}
							>
								<h3>{service.title}</h3>
								<p>{service.description}</p>
								<ArrowRight size={24} className="arrow-icon" />
							</motion.div>
						))}
					</div>
				</div>
			</motion.section>

			{/* My Skills Section */}
			<motion.section
				className="section"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				<h2>My Skills</h2>
				<motion.div
					className="skills-container1"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5, duration: 1 }}
				>
					{skills.map((skill, index) => (
						<motion.div
							key={index}
							className="skill-category-card1"
							whileHover={{ scale: 1.02 }}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
						>
							<h3>{skill.category}</h3>
							<div className="skill-chips-container1">
								{skill.items.map((item, idx) => (
									<motion.div
										key={idx}
										className="skill-chip1"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										<div className="skill-icon-container1">
											<img
												src={item.icon}
												alt={item.name}
												className="skill-icon1"
											/>
										</div>
										<span>{item.name}</span>
									</motion.div>
								))}
							</div>
						</motion.div>
					))}
				</motion.div>
			</motion.section>

			{/* Certifications Section */}
			<motion.section
				className="section"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				<h2>Certifications</h2>
				<p className="hobbies-description">
					Here are some of my favorite hobbies that keep me inspired
					and motivated.
				</p>
				<motion.div
					className="certifications-container"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5, duration: 1 }}
				>
					{certifications.map((certification, index) => (
						<motion.a
							key={index}
							href={certification.link}
							target="_blank"
							rel="noopener noreferrer"
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
								<h3>{certification.name}</h3>
								<p>{certification.description}</p>
							</div>
						</motion.a>
					))}
				</motion.div>
			</motion.section>

			{/* Hobbies Section */}
			<motion.section
				className="hobbies-section"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				<div className="hobbies-container">
					<h2>Hobbies</h2>
					<p className="hobbies-description">
						Here are some of my favorite hobbies that keep me
						inspired and motivated.
					</p>
					<Swiper
						modules={[Autoplay, Pagination, Navigation]}
						spaceBetween={30}
						slidesPerView={1}
						autoplay={{ delay: 5000, disableOnInteraction: false }}
						pagination={{ clickable: true }}
						navigation
						loop
						className="hobbies-carousel"
					>
						{hobbies.map((hobby, index) => (
							<SwiperSlide key={index}>
								<div className="carousel-slide">
									<img
										src={hobby.image}
										alt={hobby.name}
										className="carousel-image"
									/>
									<div className="carousel-caption">
										<h3>{hobby.name}</h3>
										<p>{hobby.description}</p>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</motion.section>
		</div>
	);
};

export default Skills;
