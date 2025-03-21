import React from "react";
import "./TalkComponent.css"; // Import the CSS file

const TalkComponent = () => {
	// Function to calculate the number of repetitions based on screen width
	const calculateRepetitions = () => {
		const screenWidth = window.innerWidth;
		return Math.ceil(screenWidth / 200); // Adjust the divisor for tighter or looser spacing
	};

	return (
		<div>
			{/* Darker Contrast Section */}
			<div className="talk-container darker">
				<div className="talk-text">
					{Array.from({ length: calculateRepetitions() }).map(
						(_, index) => (
							<span key={index}>Let's Talk / </span>
						)
					)}
				</div>
			</div>

			{/* Lighter Contrast Section */}
			<div className="talk-container lighter">
				<div className="talk-text">
					{Array.from({ length: calculateRepetitions() }).map(
						(_, index) => (
							<span key={index}>Let's Talk / </span>
						)
					)}
				</div>
			</div>
		</div>
	);
};

export default TalkComponent;
