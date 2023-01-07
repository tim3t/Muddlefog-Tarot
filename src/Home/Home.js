import React from 'react';
import TarotCard from '../Card/Card';
import './Home.css';
import { Button } from 'react-bootstrap';

const Home = () => {
	function onClick(e) {
		e.preventdefault();
	}
	return (
		<React.Fragment>
			<div className='d-grid gap-2'>
				<Button variant='success' size='lg'>
					Click to draw a Tarot Card
				</Button>
			</div>
			<div className='home'>
				<TarotCard />
			</div>
		</React.Fragment>
	);
};

export default Home;
