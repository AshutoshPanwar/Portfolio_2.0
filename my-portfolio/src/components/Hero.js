import React from "react";
import "./Hero.css";

const Hero = () => {
	return (
		<section className="hero-section">
			<div className="hero-content">
				<h1>
					<span className="gradient-text">Transforming Data</span>{" "}
					<br />
					Into{" "}
					<span className="gradient-text">Actionable Insights.</span>
				</h1>
				<p className="hero-subtext">
					I specialize in{" "}
					<span className="gradient-text">data science</span>,{" "}
					<span className="gradient-text">machine learning</span>, and{" "}
					<span className="gradient-text">
						decision-making strategies
					</span>{" "}
					to solve complex problems.
				</p>
				<button className="cta-button">Explore My Work</button>
				<p className="hero-note">
					Let’s build the future with data-driven solutions.
				</p>
			</div>
		</section>
	);
};

export default Hero;
