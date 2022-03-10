import React from 'react';
import { Link } from 'react-router-dom';

export default function DeckListItem({ deck, handleDelete }) {
	return (
		<div className='card mt-3'>
			<div className='card-body'>
				{/* Card Title */}
				<div className='d-flex'>
					<h5 className='card-title'>{deck.name}</h5>
					<p className='text-muted ml-auto d-block'>
						{`${deck.cards.length}`} cards
					</p>
				</div>

				{/* Card body */}
				<p className='card-text'>{deck.description}</p>

				{/* Card Buttons */}
				<div className='d-flex'>
					<Link
						to={`/decks/${deck.id}`}
						className='btn btn-secondary mr-2'
					>
						<i className='fa-solid fa-eye'></i>&nbsp; View
					</Link>

					<Link
						to={`/decks/${deck.id}/study`}
						className='btn btn-primary'
					>
						<i className='fa-solid fa-book'></i>&nbsp; Study
					</Link>

					<button
						type='button'
						onClick={handleDelete}
						className='btn btn-danger ml-auto'
					>
						<i className='fa-solid fa-trash'></i>
					</button>
				</div>
			</div>
		</div>
	);
}
