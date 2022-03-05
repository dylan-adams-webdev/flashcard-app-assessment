import React from 'react';
import { Link } from 'react-router-dom';

export default function NoDeck() {
	return (
		<>
			<h1>No decks... yet!</h1>
			<h5 className='text-muted mb-3'>Create a deck to start studying</h5>
			<Link to={'/decks/new'} className='btn btn-primary mr-2'>
				<i className='fa-solid fa-plus'></i>
				&nbsp; Create Deck
			</Link>
		</>
	);
}
