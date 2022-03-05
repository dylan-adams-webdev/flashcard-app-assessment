import React from 'react';
import { Link } from 'react-router-dom';

export default function NoDeck() {
	return (
		<>
			<h1>We can't find that deck...</h1>
			<h5 className='text-muted mb-3'>Create it now or view a list of the available flashcard decks</h5>
			<Link to={'/decks/new'} className='btn btn-primary mr-2'>
				<i className='fa-solid fa-plus'></i>
				&nbsp; Create Deck
			</Link>
			<Link to={'/'} className='btn btn-secondary'>
				<i className='fa-solid fa-list'></i>
				&nbsp; View Decks
			</Link>
		</>
	);
}
