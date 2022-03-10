import React from 'react'
import { useParams, Link } from 'react-router-dom';

export default function NoCard() {
	const {deckId} = useParams();
  return (
		<>
			<h1>We can't find that card in this deck...</h1>
			<h5 className='text-muted mb-3'>
				Create it now or view the available cards in this deck
			</h5>
			<Link
				to={`/decks/${deckId}/cards/new`}
				className='btn btn-primary mr-2'
			>
				<i className='fa-solid fa-plus'></i>
				&nbsp; Create Card
			</Link>
			<Link to={`/decks/${deckId}`} className='btn btn-secondary mr-2'>
				<i className='fa-solid fa-list'></i>
				&nbsp; View This Deck
			</Link>
		  <Link to={'/'} className='btn btn-secondary'>
				<i className='fa-solid fa-home'></i>
				&nbsp; Home
			</Link>
		</>
  );
}
