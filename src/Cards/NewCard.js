import React from 'react';
import Breadcrumbs from '../Common/Breadcrumbs';
import CardForm from './CardComponents/CardForm';
import { useDecks } from '../Hooks/Hooks';
import LoadingSpinner from '../Common/LoadingSpinner';
import CannotFindDeck from '../Common/CannotFindDeck';
import { useParams } from 'react-router-dom';
import { createCard } from '../utils/api/index';

export default function NewCard() {
	const { decks, isLoading } = useDecks();
	const params = useParams();

	if (isLoading) return <LoadingSpinner />;

	const deck = decks.find((deck) => deck.id === Number(params.deckId));

	if (!deck) return <CannotFindDeck />;

	const breadCrumbLinks = [
		{ name: deck.name, address: `/decks/${params.deckId}` },
		{ name: 'Add Card', address: null },
	];
	
	const submitHandler = (card, callback) => {
		createCard(deck.id, card).then(() => callback());
	}
	
	return (
		<>
			<Breadcrumbs links={breadCrumbLinks} />
			<h3>{deck.name}: Add Card</h3>
			<CardForm submitHandler={submitHandler} />
		</>
	);
}
