import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<nav>
					<Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
					<Link to="/contact">Contact</Link>
				</nav>
				<Routes>
					<Route path="/" element={<Projects />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
