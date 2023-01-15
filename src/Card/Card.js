import React, { useState } from 'react';
import data from '../tarot-images.json';
import './Card.css';
import backOfCard from '../cardImages/back.jpeg';

// ↓↓↓ 78 Tarot Card Images imported for use - public domain ↓↓↓
import cardImports from './cardImports';

const TarotCard = () => {
	const [ isFlipped, setFlipped ] = useState(true);
	const flip = () => {
		setFlipped(!isFlipped);
	};
	console.log(isFlipped);

	const cards = data.cards;
	const randomCardNumber = Math.floor(Math.random() * 78);
	let cardPull = {
		name: cards[randomCardNumber].name,
		image: cardImports[cards[randomCardNumber].img.split('.')[0]],
		affirmation: cards[randomCardNumber].Affirmation,
		keywords: cards[randomCardNumber].keywords
	};

	return (
		<div onClick={flip} className='Card'>
			<img src={isFlipped ? backOfCard : cardPull.image} alt={cardPull.name} className='Card-img' />
			<div className='Card-body'>
				<p>{cardPull.name}</p>
				<div>
					{cardPull.affirmation}
					<p className='Card-keyword'>{cardPull.keywords.join('  *  ')}</p>
				</div>
			</div>
		</div>
	);
};

export default TarotCard;
