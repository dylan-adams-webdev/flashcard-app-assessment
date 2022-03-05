import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function NotEnoughCards({ count }) {
	const params = useParams();
	return (
		<div>
			<h2>Not enough cards.</h2>
			<p>
				You need at least 3 cards to study. There are
				{count > 0 ? `only ${count}` : 'no'}
				cards in this deck.
			</p>
			<Link
				to={`/decks/${params.deckId}/cards/new`}
				className='btn btn-primary mt-1'
			>
				<i className='fa-solid fa-plus'></i>&nbsp; Add Cards
			</Link>
		</div>
	);
}
