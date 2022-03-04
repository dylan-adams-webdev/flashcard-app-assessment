import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../Common/LoadingSpinner';
import NotEnoughCards from '../Decks/StudyComponents/NotEnoughCards';
import { deleteDeck, listDecks } from '../utils/api/index';
import AddDeckButton from './DeckListComponents/AddDeckButton';
import DeckListItem from './DeckListComponents/DeckListItem';

export default function DeckList() {
	const [decks, setDecks] = useState(null);
	
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
	
	if (decks === null) {
		return <LoadingSpinner />;
	} else if (!decks.length) {
		return <NotEnoughCards />
	} else {
		const deckListItems = decks.map((deck) => (
			<DeckListItem
				key={deck.id}
				deck={deck}
				handleDeleteClick={() => handleDeleteDeck(deck.id)}
			/>
		));
		return (
			<>
				<AddDeckButton />
				{deckListItems}
			</>
		);
	}
}
