import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import History from './History/History';
import Resources from './Resources/Resources';
import Meanings from './Meanings/Meanings';
import SignUp from './LogIn_SignUp/SignUp';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';

function App() {
	return (
		<div>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/history' element={<History />} />
					<Route exact path='/resources' element={<Resources />} />
					<Route exact path='/meanings' element={<Meanings />} />
					<Route exact path='/signup' element={<SignUp />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
