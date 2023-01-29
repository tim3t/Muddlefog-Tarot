import React, { useEffect, useState, useContext } from 'react';
import TarotCard from '../Card/Card';
import './Home.css';
import { Button } from 'react-bootstrap';
import UserContext from '../Auth/UserContext';

const Home = () => {
	const today = new Date().toLocaleDateString('en-GB', {
		day: 'numeric',
		month: 'short',
		year: 'numeric'
	});

	const currentUser = useContext(UserContext);
	const [ cardDraws, setCardDraws ] = useState([]);

	console.debug('cardDraws=', cardDraws);

	function addCard() {
		setCardDraws(cardDraws.concat(<TarotCard />));
	}
	function clearCards() {
		setCardDraws([]);
	}

	// ↓↓↓ Homepage render when not logged in ↓↓↓
	// Will only allow for drawing 1 card at a time

	function loggedOutHome() {
		return (
			<div className='Home'>
				<div className='Home-Button-Layout'>
					<Button
						className='Home-Button-Draw'
						onClick={cardDraws.length < 1 ? addCard : null}
						variant='success'
						size='lg'
					>
						Click to draw a single Tarot Card
					</Button>
				</div>
				<div className='CardTable'>{cardDraws}</div>
				{!cardDraws.length ? null : (
					<div className='Home-Button-Clear'>
						<Button onClick={clearCards} variant='light' size='lg'>
							Clear all cards
						</Button>
					</div>
				)}
			</div>
		);
	}

	// ↓↓↓ Homepage render when logged in ↓↓↓
	// Will allow for 1, 3, and 9 card spreads
	function loggedInHome() {
		return (
			<div className='Home'>
				<h3 className='Home-User-Head'>
					{currentUser.username}'s Tarot Spread for {today}
				</h3>
				{/* <label htmlFor='checkbox' className='Home-switch'>
					Toggle Meanings
					<input type='checkbox' />
					<span className='Home-switch-slider round' />
				</label> */}
				<div className='Home-Button-Layout'>
					<Button
						className='Home-Button-Draw'
						onClick={cardDraws.length < 1 ? addCard : null}
						variant='success'
						size='lg'
					>
						Click to draw a single Tarot Card
					</Button>
					<Button
						className='Home-Button-Draw'
						onClick={cardDraws.length < 3 ? addCard : null}
						variant='info'
						size='lg'
					>
						Click to draw a three card spread
					</Button>
					<Button
						className='Home-Button-Draw'
						onClick={cardDraws.length < 9 ? addCard : null}
						variant='warning'
						size='lg'
					>
						Click to draw a nine card spread
					</Button>
				</div>

				<div className='CardTable'>{cardDraws}</div>
				{!cardDraws.length ? null : (
					<div className='d-grid gap-2 Home-Button-Clear'>
						<Button onClick={clearCards} variant='light' size='lg'>
							Clear all cards
						</Button>
					</div>
				)}
			</div>
		);
	}
	{
		return <div>{currentUser ? loggedInHome() : loggedOutHome()}</div>;
	}
};

export default Home;
