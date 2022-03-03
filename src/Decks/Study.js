import React from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../Common/LoadingSpinner';
import Breadcrumbs from './StudyComponents/Breadcrumbs';

export default function Study({ decks }) {
	const params = useParams();
	const deck = decks.find((deck) => deck.id === Number(params.deckId));
	
	
	if (deck) return <Breadcrumbs deck={deck} />;
	return <LoadingSpinner />;
}
