import React from 'react';
import data from '../tarot-images.json';
import c01 from '../cardImages/c01.jpg';

const Card = () => {
	let cards = data.cards;
	console.log(data.cards);
	let randomCardNumber = Math.floor(Math.random() * 78);
	let cardPull = {
		name: data.cards[randomCardNumber].name,
		image: data.cards[randomCardNumber].img
	};
	return (
		<div>
			<h1>This is a card</h1>;
			<p>{cardPull.name}</p>
			<img src={c01} />
		</div>
	);
};

export default Card;
