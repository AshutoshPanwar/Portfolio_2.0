import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import TalkComponent from "./components/TalkComponent"; // Import the Navbar component
import Navbar from "./components/Navbar/Navbar"; // Import the Navbar component
import Footer from "./components/Footer/Footer"; // Import the Footer component
import Temp from "./components/temp"; // Import the Footer component
import Hero from "./pages/Home/Hero"; // Import Home page
import About from "./pages/About/About"; // Import About page
import Skills from "./pages/Skills/Skills"; // Import Skills page
import Projects from "./pages/Projects/Projects"; // Import Projects page
import Contact from "./pages/Contact/Contact"; // Import Contact page

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar /> {/* Navbar at the top */}
				<Routes>
					<Route path="/" element={<Hero />} /> {/* Home page */}
					<Route path="/about" element={<About />} />{" "}
					{/* About page */}
					<Route path="/skills" element={<Skills />} />{" "}
					{/* Skills page */}
					<Route path="/projects" element={<Projects />} />{" "}
					{/* Projects page */}
					<Route path="/contact" element={<Contact />} />{" "}
					{/* Contact page */}
				</Routes>
				<TalkComponent />
				{/* <Temp /> */}
				{/* <Footer /> */}
			</div>
		</Router>
	);
}

export default App;
