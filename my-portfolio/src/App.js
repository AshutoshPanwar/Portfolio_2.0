import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<nav>
					<Link to="/">Home</Link> |{" "}
					<Link to="/projects">Projects</Link> |{" "}
					<Link to="/skills">Skills</Link> |{" "}
					<Link to="/about">About</Link> |{" "}
					<Link to="/contact">Contact</Link>
				</nav>
				<Routes>
					<Route path="/" element={<Projects />} />{" "}
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
