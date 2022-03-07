import React from 'react';
import { Link } from 'react-router-dom';

export default function CardGroupItem({
	card,
	handleDeleteCard,
}) {
	return (
		<div className='col mb-4'>
			<div className='card p-2'>
				<div className='card-body'>
					<div className='d-flex'>
						{/* Front of card */}
						<div className='w-50 text-center'>
							<p>
								<strong>Front</strong>
							</p>
							<hr />
							<p>{card.front}</p>
						</div>

						{/* Back of card */}
						<div className='w-50 text-center'>
							<p>
								<strong>Back</strong>
							</p>
							<hr />
							<p>{card.back}</p>
						</div>
					</div>
				</div>

				{/* Buttons */}
				<div className='d-flex'>
					<Link
						to={`/decks/${card.deckId}/cards/${card.id}/edit`}
						className='btn btn-secondary ml-auto'
					>
						<i className='fa-solid fa-pencil'></i>
					</Link>
					<button
						type='button'
						className='btn btn-danger ml-2'
						onClick={() => handleDeleteCard(card.id)}
					>
						<i className='fa-solid fa-trash'></i>
					</button>
				</div>
			</div>
		</div>
	);
}
