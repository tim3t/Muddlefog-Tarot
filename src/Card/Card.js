import React from 'react';
import data from '../tarot-images.json';
import './Card.css';
import Card from 'react-bootstrap/Card';

// ↓↓↓ 78 Tarot Card Images imported for use - public domain ↓↓↓
import cardImports from './cardImports';

const TarotCard = () => {
	let cards = data.cards;
	let randomCardNumber = Math.floor(Math.random() * 78);
	let cardPull = {
		name: cards[randomCardNumber].name,
		image: cardImports[cards[randomCardNumber].img.split('.')[0]],
		affirmation: cards[randomCardNumber].Affirmation,
		keywords: cards[randomCardNumber].keywords
	};

	return (
		<Card style={{ width: '18rem' }} className='text-center'>
			<Card.Img src={cardPull.image} alt={cardPull.name} />
			<Card.Body>
				<Card.Title>{cardPull.name}</Card.Title>
				<Card.Text>
					{cardPull.affirmation}
					<p className='card-keyword'>{cardPull.keywords.join(' ')}</p>
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default TarotCard;
