import React from "react";
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/home/home";
import MainNavbar from "./components/navbar/navbar";

function App() {
	return (
		<Router>
			<MainNavbar />
			<Routes>
				<Route exact path="/" element={ <Home /> }/>
			</Routes>
		</Router>
	);
}

export default App;
