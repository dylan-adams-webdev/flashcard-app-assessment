import React from 'react';
import { Link } from 'react-router-dom';
import { deleteCard } from '../../utils/api/index';

export default function CardGroupItem({ card, deleteHandler }) {
	return (
		<div className='col mb-4'>
			<div className='card p-2'>
				<div className='card-body'>
					<div className='d-flex'>
						<p className='w-50 text-center'>{card.front}</p>
						<p className='ml-auto w-50 text-center'>{card.back}</p>
					</div>
				</div>
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
						onClick={deleteHandler}
					>
						<i className='fa-solid fa-trash'></i>
					</button>
				</div>
			</div>
		</div>
	);
}
