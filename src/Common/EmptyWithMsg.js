import React from 'react';
import { Link } from 'react-router-dom';

export default function EmptyWithMsg({ msg }) {
	return (
		<>
			<div>
				<h1>{msg}</h1>
				<Link to={'/'} className='btn btn-secondary mr-2'>
					<i className='fa-solid fa-list'></i>&nbsp; List Decks
				</Link>
				<Link to={'/decks/new'} className='btn btn-primary'>
					<i className='fa-solid fa-pencil'></i>&nbsp; Create Deck
				</Link>
				<img
					className='img-fluid w-75 d-block mt-5'
					src='/img/not-found.svg'
					alt='deck not found'
				/>
			</div>
		</>
	);
}
