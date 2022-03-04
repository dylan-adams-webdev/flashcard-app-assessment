import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../Common/LoadingSpinner';
import { deleteDeck, listDecks } from '../utils/api/index';
import AddDeckButton from './DeckListComponents/AddDeckButton';
import DeckListItem from './DeckListComponents/DeckListItem';

export default function DeckList() {
	const [decks, setDecks] = useState([]);

	const deckListItems = decks.map((deck) => (
		<DeckListItem
			key={deck.id}
			deck={deck}
			handleDeleteClick={() => handleDeleteDeck(deck.id)}
		/>
	));

	useEffect(() => {
		const abort = new AbortController();
		listDecks(abort.signal).then(setDecks).catch(console.error);

		return () => {
			abort.abort();
		};
	}, []);

	const handleDeleteDeck = (id) => {
		const confirm = window.confirm('Delete this deck?\nThis is permanent');
		if (confirm) {
			const { signal } = new AbortController();
			deleteDeck(id, signal);
			const newDeck = decks.filter((deck) => deck.id !== id);
			setDecks([...newDeck]);
		}
	};

	if (decks.length) return (
		<>
			<AddDeckButton />
			{deckListItems}
		</>
	);
	return <LoadingSpinner />
}
