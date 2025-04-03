import React from "react";
import "./Skill.css";

const Skills = () => {
	const skills = [
		{
			category: "Programming Languages",
			items: [
				{
					name: "Python",
					proficiency: 95,
					icon: "https://img.icons8.com/color/512/python.png",
				},
				{
					name: "C++",
					proficiency: 70,
					icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png",
				},
				{
					name: "Linux",
					proficiency: 85,
					icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAx6camOf_G96Zcs2Zj34Yjmy0ysPd-p0oJQ&s",
				},
			],
		},
		{
			category: "Data Science & ML",
			items: [
				{
					name: "NumPy",
					proficiency: 50,
					icon: "https://neuraspike.com/wp-content/uploads/2020/11/thumbnail_numpy_tutorial_logo-neuraspike.png.png",
				},
				{
					name: "Pandas",
					proficiency: 50,
					icon: "https://www.netdata.cloud/img/pandas.png",
				},
				{
					name: "Statistics",
					proficiency: 20,
					icon: "https://i.pinimg.com/474x/cc/aa/c9/ccaac9b2ce19a131fa386c3b7cc0c923.jpg",
				},
				{
					name: "SQL",
					proficiency: 80,
					icon: "https://images.sftcdn.net/images/t_app-icon-m/p/917c77e8-96d1-11e6-8453-00163ed833e7/3780880766/mysql-com-icon.png",
				},
				{
					name: "Excel",
					proficiency: 75,
					icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Microsoft_Excel_2013-2019_logo.svg/1085px-Microsoft_Excel_2013-2019_logo.svg.png",
				},
				{
					name: "Sci-Py",
					proficiency: 40,
					icon: "https://pypi-camo.freetls.fastly.net/e04fcdcd86e25efd2d53f9dd07e2e57e95969f4b/68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f73636970792f73636970792f6d61696e2f646f632f736f757263652f5f7374617469632f6c6f676f2e737667",
				},
			],
		},
		{
			category: "Web Technologies",
			items: [
				{
					name: "React",
					proficiency: 80,
					icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
				},
				{
					name: "Flask",
					proficiency: 85,
					icon: "https://images.tpointtech.com/tutorial/flask/images/flask-tutorial.png",
				},
				{
					name: "Django",
					proficiency: 55,
					icon: "https://console.kamatera.com/assets/images/os/os_django.png",
				},
			],
		},

		{
			category: "Cloud & Deployment",
			items: [
				{
					name: "AWS",
					proficiency: 50,
					icon: "https://i.scdn.co/image/ab6765630000ba8a49f81331af04ec3614a5a741",
				},
				{
					name: "Azure",
					proficiency: 85,
					icon: "https://www.vaisulweb.com/wp-content/uploads/2019/02/azure_logo_794_new.png",
				},
				{
					name: "GCP",
					proficiency: 60,
					icon: "https://avatars.githubusercontent.com/u/2810941?s=280&v=4",
				},
				{
					name: "Docker",
					proficiency: 40,
					icon: "https://www.docker.com/app/uploads/2023/05/symbol_blue-docker-logo.png",
				},
				{
					name: "Kubernetes",
					proficiency: 20,
					icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1200px-Kubernetes_logo_without_workmark.svg.png",
				},
			],
		},
		{
			category: "Tools",
			items: [
				{
					name: "Git",
					proficiency: 90,
					icon: "https://avatars.githubusercontent.com/u/18133?s=280&v=4",
				},
				{
					name: "GitHub",
					proficiency: 90,
					icon: "https://researchcomputing.princeton.edu/sites/g/files/toruqf7036/files/styles/freeform_750w/public/2021-02/Github.png?h=0adafebd&itok=ifc6IOIP",
				},
				{
					name: "Visual Studio Code",
					proficiency: 85,
					icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
				},
				{
					name: "Jupyter Notebook",
					proficiency: 75,
					icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/663px-Jupyter_logo.svg.png",
				},
			],
		},
	];

	return (
		<section className="skills-section-sk">
			<h2>My Skills</h2>
			<p className="skills-description-sk">
				Over the years, I’ve honed a powerful skill set that defines my
				expertise and passion.
			</p>
			<div className="skills-container-sk">
				{skills.map((category, index) => (
					<div key={index} className="skills-category-sk">
						<h3>{category.category}</h3>
						<hr />
						<div className="skills-grid-sk">
							{category.items.map((skill, idx) => (
								<div key={idx} className="skill-card-sk">
									<div className="skill-icon-sk">
										{typeof skill.icon === "string" ? (
											<img
												src={skill.icon}
												alt={skill.name}
												className="skill-icon-image"
											/>
										) : (
											skill.icon
										)}
									</div>
									<div className="skill-info-sk">
										<h4>{skill.name}</h4>
										<div className="progress-bar-sk">
											<div
												className="progress-sk"
												style={{
													width: `${skill.proficiency}%`,
												}}
											></div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Skills;
