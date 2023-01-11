import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
	return (
		<div className='NavBar'>
			<NavLink to='/' className='NavBar-NavLink-Home'>
				Home
			</NavLink>
			<NavLink className='NavBar-NavLink'>Card Meanings</NavLink>
			<NavLink className='NavBar-NavLink'>History of Tarot</NavLink>
			<NavLink className='NavBar-NavLink'>Resources</NavLink>
		</div>
	);
}

export default NavBar;
