import React from "react";
import './app.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from "./pages/homepage/index";
import MyPortfolio from "./pages/projects/myPortfolio";

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={ <Homepage /> } />
				<Route path="/portfolio" element={ <MyPortfolio />} />
			</Routes>
		</Router>
	);
}

export default App;
