import React from 'react';
import { Link } from 'react-router-dom';

export default function DeckCard({ deck, handleDelete }) {
	return (
		<>
			<h4 className='card-title'>{deck.name}</h4>
			<p className='card-text'>{deck.description}</p>
			<div className='d-flex'>
			<Link to={`/decks/${deck.id}/edit`} className='btn btn-secondary mr-2'>
				<i className='fa-solid fa-pencil'></i>&nbsp;Edit
			</Link>
			<Link to={`/decks/${deck.id}/study`} className='btn btn-primary mr-2'>
				<i className='fa-solid fa-book'></i>&nbsp;Study
			</Link>
			<Link to={`/decks/${deck.id}/cards/new`} className='btn btn-primary mr-2'>
				<i className='fa-solid fa-plus'></i>&nbsp;Add Cards
			</Link>
				<button type='button' className='btn btn-danger ml-auto' onClick={handleDelete}><i className='fa-solid fa-trash'></i></button>
				</div>
		</>
	);
}
