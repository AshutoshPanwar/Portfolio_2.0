import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import MyPhoto from "../../Assets/Images/logo.png";

const AboutSection = () => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.95 }} // Initial state: slightly scaled down and transparent
			animate={{ opacity: 1, scale: 1 }} // Animate to full opacity and scale
			transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
		>
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
					whileHover={{ scale: 1.05 }}
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
						"Every dataset tells a story, and I am on a mission to
						decode patterns, build intelligent solutions, and create
						real-world impact. Learning, evolving, and pushing the
						boundaries—one algorithm at a time."
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
								The world runs on <strong>data</strong>, and I
								want to be at the heart of it. I am an{" "}
								<strong>aspiring data scientist</strong>, fueled
								by curiosity and driven by the endless
								possibilities hidden within numbers. My journey
								began with a simple question:
								<strong>
									"What if data could tell a story?"
								</strong>
							</p>
							<p>
								From exploring{" "}
								<strong>
									Python, SQL, and machine learning
								</strong>{" "}
								to diving deep into
								<strong>AI and analytics</strong>, I am
								constantly evolving, learning, and building. I
								believe that data science isn’t just about
								crunching numbers—it’s about
								<strong>
									solving real-world problems, predicting the
									future, and making an impact.
								</strong>
							</p>
							<p>
								This portfolio isn’t just a collection of
								projects; it’s a{" "}
								<strong>
									reflection of my journey, my growth, and my
									ambition
								</strong>
								. With every dataset I analyze, every model I
								train, and every insight I uncover, I’m one step
								closer to{" "}
								<strong>
									mastering the art of data science.
								</strong>
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
							className="my-story-left"
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 1.4, duration: 1 }}
						>
							<h2>My Story</h2>
						</motion.div>

						{/* Right Side - Paragraph */}
						<motion.div
							className="my-story-right"
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 1.4, duration: 1 }}
						>
							<p>
								Every great journey starts with a spark of{" "}
								<strong>curiosity</strong>. For me, that spark
								was <strong>data</strong>—the hidden patterns,
								the endless possibilities, and the power to turn
								numbers into{" "}
								<strong>meaningful insights</strong>.
							</p>
							<p>
								I didn’t start as a{" "}
								<strong>data scientist</strong>, but I knew I
								wanted to be one. My journey began with{" "}
								<strong>
									Python, SQL, and machine learning
								</strong>
								, exploring how raw data could shape decisions
								and drive innovation. As I dived deeper, I
								realized <strong>data science</strong> isn’t
								just about algorithms—it’s about{" "}
								<strong>
									solving real-world problems, predicting the
									future, and making an impact
								</strong>
								.
							</p>
							<p>
								Now, I’m on a mission to{" "}
								<strong>
									master AI, analytics, and beyond
								</strong>
								, constantly{" "}
								<strong>
									learning, building, and evolving
								</strong>
								. This portfolio isn’t just a showcase of
								projects—it’s a testament to my{" "}
								<strong>journey, passion,</strong> and the path
								I’m carving toward becoming a{" "}
								<strong>top-tier data scientist</strong>.
							</p>
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
								In a world driven by data, I strive to bridge
								the gap between <strong>raw information</strong>{" "}
								and <strong>meaningful impact</strong>. My
								mission is to harness the power of{" "}
								<strong>
									AI, machine learning, and analytics
								</strong>{" "}
								to uncover insights, solve complex problems, and
								drive innovation.
							</p>
							<p>
								I believe that{" "}
								<strong>data is more than just numbers</strong>
								—it’s the key to unlocking new possibilities,
								making smarter decisions, and shaping the
								future. Through continuous{" "}
								<strong>
									learning, experimentation, and real-world
									applications
								</strong>
								, I am dedicated to building solutions that are
								not just <strong>intelligent</strong> but also{" "}
								<strong>practical and transformative</strong>.
							</p>
							<p>
								My journey is fueled by{" "}
								<strong>
									curiosity, persistence, and a passion for
									problem-solving
								</strong>
								. As I evolve in the field of data science, my
								goal is to contribute to a future where
								technology and data work together to make a
								difference.
							</p>
							<p>
								<strong>
									Let’s decode the future, one dataset at a
									time.
								</strong>
							</p>
						</motion.div>
					</motion.div>
				</motion.div>
			</motion.section>
		</motion.div>
	);
};

export default AboutSection;
