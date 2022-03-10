import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import DeckForm from './DeckFormComponents/DeckForm';
import Breadcrumbs from '../Common/Breadcrumbs';
import { readDeck, updateDeck } from '../utils/api/index';
import GenericError from '../Common/GenericError';
import CannotFindDeck from '../Common/CannotFindDeck';
import LoadingSpinner from '../Common/LoadingSpinner';

export default function EditDeck() {
	const { deckId } = useParams();
	const history = useHistory();
	const [deck, setDeck] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const abort = new AbortController();
		readDeck(deckId, abort.signal).then(setDeck).catch(setError);
		return () => abort.abort();
	}, [deckId]);
	
	if (!deck && !error) return <LoadingSpinner />;
	if (error) {
		if (error.message.includes('404')) {
			return <CannotFindDeck />;
		} else {
			return <GenericError msg={'There was an anomaly...'} />;
		}
	}
	
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
