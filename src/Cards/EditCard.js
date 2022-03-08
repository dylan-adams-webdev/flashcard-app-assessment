import React from 'react';
import { useParams } from 'react-router-dom';
import { useDecks } from '../Hooks/Hooks';
import CannotFindDeck from '../Common/CannotFindDeck';
import Breadcrumbs from '../Common/Breadcrumbs';
import CardForm from './CardComponents/CardForm';
import LoadingSpinner from '../Common/LoadingSpinner';
import { updateCard } from '../utils/api/index';
import { useHistory } from 'react-router-dom';

export default function EditCard() {
	const { decks, isLoading } = useDecks();
	const params = useParams();
	const history = useHistory();

	if (isLoading) return <LoadingSpinner />;

	if (!decks.length) return <CannotFindDeck />;

	const deck = decks.find((deck) => deck.id === Number(params.deckId));
	const card = deck.cards.find((card) => card.id === Number(params.cardId));

	const breadcrumbLinks = [
		{ name: deck.name, address: `/decks/${deck.id}` },
		{ name: `Edit Card #${params.cardId}` },
	];

	const submitHandler = ({ front, back }) => {
		const updatedCard = { ...card, front: front, back: back };
		updateCard(updatedCard).then(history.push(`/decks/${deck.id}`));
	};

	const initialState = { front: card.front, back: card.back };
	return (
		<>
			<Breadcrumbs links={breadcrumbLinks} />
			<h3>Edit Card</h3>
			<CardForm
				initialState={initialState}
				submitHandler={submitHandler}
			/>
		</>
	);
}
