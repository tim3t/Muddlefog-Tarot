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
	console.log(today);
	const currentUser = useContext(UserContext);
	console.debug('Homepage', 'currentUser=', currentUser);
	const [ cardDraws, setCardDraws ] = useState([]);

	// useEffect(
	// 	() => {
	// 		const savedCards = JSON.parse(localStorage.getItem('cardDraws'));
	// 		if (savedCards) {
	// 			setCardDraws(savedCards);
	// 		}
	// 	},
	// 	[ cardDraws ]
	// );

	function addCard() {
		setCardDraws(cardDraws.concat(<TarotCard />));
	}
	function clearCards() {
		setCardDraws([]);
	}
	useEffect(
		() => {
			localStorage.setItem('cardDraws', JSON.stringify(cardDraws));
		},
		[ cardDraws ]
	);

	function loggedOutHome() {
		return (
			<div className='Home'>
				<div className='Home-Button-Layout'>
					<Button
						className='Home-Button-Draw'
						onClick={cardDraws.length != 1 ? addCard : null}
						variant='success'
						size='lg'
					>
						Click to draw a single Tarot Card
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

	function loggedInHome() {
		return (
			<div className='Home'>
				<h3 className='Home-User-Head'>
					{currentUser.username}'s Tarot Spread for {today}
				</h3>
				<div className='Home-Button-Layout'>
					<Button
						className='Home-Button-Draw'
						onClick={cardDraws.length != 1 ? addCard : null}
						variant='success'
						size='lg'
					>
						Click to draw a single Tarot Card
					</Button>
					<Button
						className='Home-Button-Draw'
						onClick={cardDraws.length != 3 ? addCard : null}
						variant='info'
						size='lg'
					>
						Click to draw a three card spread
					</Button>
					<Button
						className='Home-Button-Draw'
						onClick={cardDraws.length != 9 ? addCard : null}
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
