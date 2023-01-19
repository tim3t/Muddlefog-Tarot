import React, { useEffect, useState } from 'react';
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

	const cards = data.cards;
	const randomCardNumber = Math.floor(Math.random() * 78);
	const cardPull = {
		name: cards[randomCardNumber].name,
		image: cardImports[cards[randomCardNumber].img.split('.')[0]],
		affirmation: cards[randomCardNumber].Affirmation,
		keywords: cards[randomCardNumber].keywords
	};
	const [ card, setCard ] = useState(cardPull);

	return (
		<div className='Card'>
			<img src={isFlipped ? backOfCard : card.image} alt={card.name} className='Card-img' onClick={flip} />
			<div className='Card-body'>
				{card.name}
				{card.affirmation}
				<p className='Card-keyword'>{card.keywords.join('  *  ')}</p>
			</div>
		</div>
	);
};

export default TarotCard;
