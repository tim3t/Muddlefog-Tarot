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
		<React.Fragment>
			<div className='d-grid gap-2'>
				<Button onClick={addCard} variant='success' size='lg'>
					Click to draw a Tarot Card
				</Button>
			</div>
			<div className='CardTable'>{cardDraws}</div>
		</React.Fragment>
	);
};

export default Home;
