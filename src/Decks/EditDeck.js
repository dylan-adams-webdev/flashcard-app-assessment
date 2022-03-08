import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import DeckForm from './DeckFormComponents/DeckForm';
import Breadcrumbs from '../Common/Breadcrumbs';
import { readDeck, updateDeck } from '../utils/api/index';
import EmptyWithMsg from '../Common/EmptyWithMsg';

export default function EditDeck() {
	const { deckId } = useParams();
	const history = useHistory();
	const [deck, setDeck] = useState(null);

	useEffect(() => {
		const abort = new AbortController();
		readDeck(deckId, abort.signal).then(setDeck);
		return () => abort.abort();
	}, [deckId]);
	if (!deck) return '...loading';

	if (deck === {}) return <EmptyWithMsg msg="We can't find that deck..." />;
	
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
