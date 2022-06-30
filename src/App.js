import React from "react";
import './app.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from "./pages/homepage/index";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
	return (
		<section className="app shadow-sm p-5">
			<Router>
				<Sidebar />
				<Routes>
					<Route exact path="/" element={ <Homepage /> } />
				</Routes>
			</Router>
		</section>
	);
}

export default App;
