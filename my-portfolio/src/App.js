// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"; // Import the Navbar component
import { Home } from "lucide-react";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar /> {/* Use the Navbar component here */}
				{/* <Header /> */}
				<Routes>
					<Route path="/" element={<Hero />} />{" "}
					{/* Home page shows Projects */}
					<Route path="/projects" element={<Projects />} />
					<Route path="/skills" element={<Skills />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
