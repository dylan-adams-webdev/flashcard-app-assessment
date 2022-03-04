import React from 'react';
import { Link } from 'react-router-dom';

export default function NoDeck() {
	return (
		<>
			<h1 className='mb-3'>That deck doesn't exist... yet!</h1>
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
