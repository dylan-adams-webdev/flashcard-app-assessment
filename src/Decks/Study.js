import React from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../Common/LoadingSpinner';
import Breadcrumbs from './StudyComponents/Breadcrumbs';
import Card from './StudyComponents/Card';

export default function Study({ decks }) {
	const params = useParams();
	const deck = decks.find((deck) => deck.id === Number(params.deckId));
	
	
	if (deck) return (
		<>
			<Breadcrumbs deck={deck} />
			<h1>{deck.name}: Study</h1>
			<Card deck={deck}/>
		</>
	);
	return <LoadingSpinner />;
}
