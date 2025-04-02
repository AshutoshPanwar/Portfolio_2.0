import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Music, Footprints, Puzzle, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide
import { Autoplay, Pagination, Navigation } from "swiper/modules"; // Import Swiper modules
import "swiper/css"; // Core Swiper CSS
import "swiper/css/pagination"; // Pagination CSS
import "swiper/css/navigation"; // Navigation CSS
import "./Skills.css"; // Import the CSS file
import Hobbies from "../../components/Hobbies/Hobbies";
import Certificate from "../../components/Certf/Certificate";
import Skill from "../../components/skl/Skill";

const Skills = () => {
	return (
		<>
			<div className="page-container">
				{/* Full-Screen Heading */}
				<motion.section
					className="skill-fullscreen-heading"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<motion.div
						className="skill-heading-container"
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 1 }}
					>
						<h1 className="skill-main-heading">
							<span className="learning">Learning.</span>
							<span className="adapting">Adapting.</span>
							<span className="innovating">Innovating.</span>
						</h1>
					</motion.div>
				</motion.section>
			</div>

			<Skill />
			<Certificate />
			<Hobbies />
		</>
	);
};

export default Skills;
