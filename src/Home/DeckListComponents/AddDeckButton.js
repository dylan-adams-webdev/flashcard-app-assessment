import React from 'react';
import { Link } from 'react-router-dom';

export default function AddDeckButton() {
	return (
		<Link to={'/decks/new'} className={'btn btn-secondary'}>
			<i className='fa-solid fa-plus'></i>
			&nbsp; Create Deck
		</Link>
	);
}
