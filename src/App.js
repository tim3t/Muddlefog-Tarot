import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import NavBar from './NavBar/NavBar';

function App() {
	return (
		<div>
			<BrowserRouter>
				<NavBar />
			</BrowserRouter>
			<Home />
		</div>
	);
}

export default App;
