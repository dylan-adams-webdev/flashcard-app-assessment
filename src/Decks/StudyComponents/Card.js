import NotEnoughCards from '../DeckErrors/NotEnoughCards';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import LoadingSpinner from '../../Common/LoadingSpinner';

export default function Card({ deck }) {
	const [cardIndex, setCardIndex] = useState(0);
	const [card, setCard] = useState(null);
	const [showBack, setShowBack] = useState(false);
	const history = useHistory();

	useEffect(() => {
		setCard(deck.cards[cardIndex]);
	}, [cardIndex, deck.cards]);

	const handleFlipClick = () => {
		setShowBack(!showBack);
	};

	const handleNextClick = () => {
		if (cardIndex === deck.cards.length - 1) {
			const msg =
				"Restart cards?\nClick 'cancel' to return to the home page";
			const result = window.confirm(msg);
			result ? setCardIndex(0) : history.push('/');
		} else {
			setCardIndex(cardIndex + 1);
			setShowBack(false);
		}
	};

	if (deck.cards.length < 3) {
		return <NotEnoughCards count={deck.cards.length} />;
	}

	if (card) {
		return (
			<div className='card'>
				<div className='card-body'>
					<h5 className='card-title'>
						Card {cardIndex + 1} of {deck.cards.length}
					</h5>
					<p className='card-text'>
						{showBack ? card.back : card.front}
					</p>
					<button
						type='button'
						onClick={handleFlipClick}
						className='btn btn-secondary mr-2'
					>
						Flip
					</button>
					<button
						type='button'
						onClick={handleNextClick}
						className='btn btn-primary'
					>
						Next
					</button>
				</div>
			</div>
		);
	}
	return <LoadingSpinner />;
}
