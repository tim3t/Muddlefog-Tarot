import React from 'react';
import data from '../tarot-images.json';
import './Card.css';

// ↓↓↓ 78 Tarot Card Images imported for use - public domain ↓↓↓

const c01 = require('../cardImages/c01.jpg');
const c02 = require('../cardImages/c02.jpg');
const c03 = require('../cardImages/c03.jpg');
const c04 = require('../cardImages/c04.jpg');
const c05 = require('../cardImages/c05.jpg');
const c06 = require('../cardImages/c06.jpg');
const c07 = require('../cardImages/c07.jpg');
const c08 = require('../cardImages/c08.jpg');
const c09 = require('../cardImages/c09.jpg');
const c10 = require('../cardImages/c10.jpg');
const c11 = require('../cardImages/c11.jpg');
const c12 = require('../cardImages/c12.jpg');
const c13 = require('../cardImages/c13.jpg');
const c14 = require('../cardImages/c14.jpg');
const m00 = require('../cardImages/m00.jpg');
const m01 = require('../cardImages/m01.jpg');
const m02 = require('../cardImages/m02.jpg');
const m03 = require('../cardImages/m03.jpg');
const m04 = require('../cardImages/m04.jpg');
const m05 = require('../cardImages/m05.jpg');
const m06 = require('../cardImages/m06.jpg');
const m07 = require('../cardImages/m07.jpg');
const m08 = require('../cardImages/m08.jpg');
const m09 = require('../cardImages/m09.jpg');
const m10 = require('../cardImages/m10.jpg');
const m11 = require('../cardImages/m11.jpg');
const m12 = require('../cardImages/m12.jpg');
const m13 = require('../cardImages/m13.jpg');
const m14 = require('../cardImages/m14.jpg');
const m15 = require('../cardImages/m15.jpg');
const m16 = require('../cardImages/m16.jpg');
const m17 = require('../cardImages/m17.jpg');
const m18 = require('../cardImages/m18.jpg');
const m19 = require('../cardImages/m19.jpg');
const m20 = require('../cardImages/m20.jpg');
const m21 = require('../cardImages/m21.jpg');
const p01 = require('../cardImages/p01.jpg');
const p02 = require('../cardImages/p02.jpg');
const p03 = require('../cardImages/p03.jpg');
const p04 = require('../cardImages/p04.jpg');
const p05 = require('../cardImages/p05.jpg');
const p06 = require('../cardImages/p06.jpg');
const p07 = require('../cardImages/p07.jpg');
const p08 = require('../cardImages/p08.jpg');
const p09 = require('../cardImages/p09.jpg');
const p10 = require('../cardImages/p10.jpg');
const p11 = require('../cardImages/p11.jpg');
const p12 = require('../cardImages/p12.jpg');
const p13 = require('../cardImages/p13.jpg');
const p14 = require('../cardImages/p14.jpg');
const s01 = require('../cardImages/s01.jpg');
const s02 = require('../cardImages/s02.jpg');
const s03 = require('../cardImages/s03.jpg');
const s04 = require('../cardImages/s04.jpg');
const s05 = require('../cardImages/s05.jpg');
const s06 = require('../cardImages/s06.jpg');
const s07 = require('../cardImages/s07.jpg');
const s08 = require('../cardImages/s08.jpg');
const s09 = require('../cardImages/s09.jpg');
const s10 = require('../cardImages/s10.jpg');
const s11 = require('../cardImages/s11.jpg');
const s12 = require('../cardImages/s12.jpg');
const s13 = require('../cardImages/s13.jpg');
const s14 = require('../cardImages/s14.jpg');
const w01 = require('../cardImages/w01.jpg');
const w02 = require('../cardImages/w02.jpg');
const w03 = require('../cardImages/w03.jpg');
const w04 = require('../cardImages/w04.jpg');
const w05 = require('../cardImages/w05.jpg');
const w06 = require('../cardImages/w06.jpg');
const w07 = require('../cardImages/w07.jpg');
const w08 = require('../cardImages/w08.jpg');
const w09 = require('../cardImages/w09.jpg');
const w10 = require('../cardImages/w10.jpg');
const w11 = require('../cardImages/w11.jpg');
const w12 = require('../cardImages/w12.jpg');
const w13 = require('../cardImages/w13.jpg');
const w14 = require('../cardImages/w14.jpg');

// ↑↑↑ 78 Tarot Card images imported for use - public domain ↑↑↑

const Card = () => {
	let cards = data.cards;
	let randomCardNumber = Math.floor(Math.random() * 78);
	let cardPull = {
		name: cards[randomCardNumber].name,
		image: cards[randomCardNumber].img.split('.')[0],
		affirmation: cards[randomCardNumber].Affirmation,
		keywords: cards[randomCardNumber].keywords
	};
	console.log(cardPull.image);
	console.log(cardPull);
	console.log(cards);
	return (
		<div className='card'>
			<h1>This is a card</h1>
			<p className='card-name'>{cardPull.name}</p>
			<p className='card-affirm'>{cardPull.affirmation}</p>
			<p className='card-keyword'>{cardPull.keywords}</p>
			<p>The image of this card is {cardPull.image}</p>
			{/* <img src={cardPull.image} alt={cardPull.name} /> */}
		</div>
	);
};

export default Card;
