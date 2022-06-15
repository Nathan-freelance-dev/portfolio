import React from "react";
import './app.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from "./pages/homepage/index";

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={ <Homepage /> } />
			</Routes>
		</Router>
	);
}

export default App;
