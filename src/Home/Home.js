import React, { useState } from 'react';
import TarotCard from '../Card/Card';
import './Home.css';
import { Button, Col, Row } from 'react-bootstrap';

const Home = () => {
	const [ cardDraws, setCardDraws ] = useState([]);
	function addCard() {
		setCardDraws(cardDraws.concat(<TarotCard />));
	}
	return (
		<div className='Home'>
			<div className='d-grid gap-2'>
				<Button onClick={cardDraws.length != 3 ? addCard : null} variant='success' size='lg'>
					Click to draw a Tarot Card
				</Button>
			</div>
			<div className='CardTable'>{cardDraws}</div>
		</div>
	);
};

export default Home;
