import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
const logo = require('../muddlefog_logo.png');

function NavBar() {
	return (
		<div className='NavBar'>
			<img src={logo} className='NavBar-Logo' />
			<NavLink to='/' className='NavBar-NavLink-Home'>
				Home
			</NavLink>
			<NavLink to='/meanings' className='NavBar-NavLink'>
				Card Meanings
			</NavLink>
			<NavLink to='/history' className='NavBar-NavLink'>
				History of Tarot
			</NavLink>
			<NavLink to='/resources' className='NavBar-NavLink'>
				Resources
			</NavLink>
		</div>
	);
}

export default NavBar;
