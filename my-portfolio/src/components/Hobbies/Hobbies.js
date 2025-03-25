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
			name: "Reading",
			description:
				"Exploring psychology, behavioral economics, and data science books.",
			image: "https://t4.ftcdn.net/jpg/02/72/07/29/360_F_272072948_HiAHqdWyphxZmePvKKwXjxxRItUURlEY.jpg",
		},
		{
			name: "Music",
			description: "Enjoying instrumental and classical music.",
			image: "https://economictimes.indiatimes.com/thumb/msid-68228880,width-1200,height-900,resizemode-4,imgsize-313661/music-gettyimages-894058154.jpg?from=mdr",
		},
		{
			name: "Running",
			description: "Staying active and disciplined through running.",
			image: "https://physiosc.com/storage/wysiwyg/image_1.png",
		},
		{
			name: "Problem Solving",
			description: "Solving puzzles and logical challenges.",
			image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTELMCapAxKz_lDKkpKtjQDKrEeRZQfzY_s_g&s",
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
