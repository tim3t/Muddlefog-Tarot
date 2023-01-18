import React from 'react';
import './Footer.css';

const Footer = () => {
	const today = new Date();
	return (
		<div className='Footer'>
			<p>Muddlefog Tarot {today.getFullYear()}</p>
		</div>
	);
};

export default Footer;
