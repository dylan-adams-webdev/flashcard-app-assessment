import LoadingSpinner from '../Common/LoadingSpinner';
import NoDecks from '../Decks/DeckErrors/NoDecks';
import { deleteDeck, listDecks } from '../utils/api';
import AddDeckButton from './DeckListComponents/AddDeckButton';
import DeckListItem from './DeckListComponents/DeckListItem';
import { useEffect, useState } from 'react';

export default function DeckList() {
	const [decks, setDecks] = useState(null);
	const [error, setError] = useState(null);
	
	useEffect(() => {
		const abort = new AbortController();
		listDecks(abort.signal).then(setDecks).catch(setError);
		return () => abort.abort();
	}, []);
	
	const handleDelete = (id) => {
		const confirm = window.confirm('Delete this deck?\nThis is permanent');
		if (confirm) {
			const newDeckList = decks.filter(deck => deck.id !== id);
			deleteDeck(id);
			setDecks(newDeckList);
		}
	}
	if (!error && !decks) {
		return <LoadingSpinner />;
	} else if (!decks.length) {
		return <NoDecks />;
	} else {
		const deckListItems = decks.map((deck) => (
			<DeckListItem
				key={deck.id}
				deck={deck}
				handleDelete={() => handleDelete(deck.id)}
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
