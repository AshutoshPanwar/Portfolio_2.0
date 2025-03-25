import React from "react";
import { motion } from "framer-motion";
import { Mail, Twitter, Linkedin, Github } from "lucide-react";
import "./Contact.css"; // Import the CSS file
import Form from "../../components/Form/Form";

const Contact = () => {
	return (
		<>
			<motion.section
				id="contact-sec"
				className="contact-section-sec" // Updated class name
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				<div className="contact-content-sec">
					{/* Heading */}
					<div className="contact-heading-container-sec">
						<motion.h1
							className="contact-heading-sec"
							whileHover={{ scale: 1.05 }}
						>
							Let's{" "}
							<span className="gradient-text-sec">Connect</span>!
						</motion.h1>
						<p className="contact-subheading-sec">
							Get in touch to create something{" "}
							<span className="gradient-text-sec">amazing</span>{" "}
							together.
						</p>
					</div>
				</div>
			</motion.section>
			<Form />
		</>
	);
};

export default Contact;
