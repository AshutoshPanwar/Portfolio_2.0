import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Hobbies.css";

const Hobbies = () => {
	const hobbies = [
		{
			name: "Problem Solving",
			description: "Solving puzzles and logical challenges.",
			image: "https://www.demandgenreport.com/wp-content/uploads/2025/02/AdobeStock_913779463-scaled.jpeg",
		},
		{
			name: "Music",
			description: "Enjoying instrumental and classical music.",
			image: "https://economictimes.indiatimes.com/thumb/msid-68228880,width-1200,height-900,resizemode-4,imgsize-313661/music-gettyimages-894058154.jpg?from=mdr",
		},
		{
			name: "Running",
			description: "Staying active and disciplined through running.",
			// image: "https://media.istockphoto.com/id/542197958/photo/running-on-treadmill.jpg?s=612x612&w=0&k=20&c=tcd4FsHDKBc9JL_aVhg5WjptucXl6Zijy3zWiSzSfTI=",
			image: "https://media.istockphoto.com/id/636887598/photo/athlete-running.jpg?s=612x612&w=0&k=20&c=Jt-HCECWiEKRWebmCZoCs2SIuzOj1ea1o5Kg1wTsPoE=",
		},
		{
			name: "Reading",
			description:
				"Exploring psychology, behavioral economics, and data science books.",
			image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
			// image: "https://media.istockphoto.com/id/1309972622/photo/young-man-reading-a-book-in-peace-and-making-personal-growth-spending-time-at-home-in-the.jpg?s=612x612&w=0&k=20&c=DuO6_aicS7OSzfa_-lXvgNBxH2-K8TbIeZdI9IlUMP8=",
		},
	];

	return (
		<motion.section
			className="hobbies-section"
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
		>
			<div className="hobbies-container">
				<motion.h2
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.8 }}
				>
					Hobbies
				</motion.h2>
				<motion.p
					className="hobbies-description"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, duration: 0.8 }}
				>
					“Life is an endless journey of discovery. I find joy in
					exploring new ideas, diving into books, and immersing myself
					in music that speaks to the soul. Whether it’s a deep
					conversation, a spontaneous adventure, or learning a new
					skill, I believe every experience adds a new dimension to
					who we are.”
				</motion.p>
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
							<motion.div
								className="carousel-slide"
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{
									duration: 0.8,
									delay: index * 0.2,
								}}
							>
								<img
									src={hobby.image}
									alt={hobby.name}
									className="carousel-image"
								/>
								<div className="carousel-caption">
									<h3>{hobby.name}</h3>
									<p>{hobby.description}</p>
								</div>
							</motion.div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</motion.section>
	);
};

export default Hobbies;
