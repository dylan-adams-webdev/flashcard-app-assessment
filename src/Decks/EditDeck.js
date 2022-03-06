import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDecks } from '../Hooks/Hooks';
import DeckForm from './DeckFormComponents/DeckForm';
import Breadcrumbs from '../Common/Breadcrumbs';
import LoadingSpinner from '../Common/LoadingSpinner';
import { updateDeck } from '../utils/api/index';
import EmptyWithMsg from '../Common/EmptyWithMsg';

export default function EditDeck() {
	const { deckId } = useParams();
	const history = useHistory();
	const { decks, isLoading } = useDecks();
	if (!isLoading) {
		const deck = decks.find((item) => item.id === Number(deckId));
		if(!deck) return <EmptyWithMsg msg="We can't find that deck..." />;
		const breadCrumbAddresses = [
			{
				name: deck.name,
				address: `/decks/${deck.id}`,
			},
			{ name: 'Edit Deck' },
		];
		const initialState = { name: deck.name, description: deck.description };
		const submitHandler = (data) => {
			const newDeck = {
				...deck,
				name: data.name,
				description: data.description,
			};
			updateDeck(newDeck).then(history.push(`/decks/${deck.id}`));
		};
		return (
			<>
				<Breadcrumbs links={breadCrumbAddresses} />
				<h1>Edit Deck</h1>
				<DeckForm
					submitHandler={submitHandler}
					initialState={initialState}
				/>
			</>
		);
	}
	else return <LoadingSpinner />;
	
}
