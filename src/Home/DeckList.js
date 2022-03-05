import LoadingSpinner from '../Common/LoadingSpinner';
import NoDecks from '../Decks/DeckErrors/NoDecks';
import { useDecks } from '../Hooks/Hooks';
import { deleteDeck } from '../utils/api';
import AddDeckButton from './DeckListComponents/AddDeckButton';
import DeckListItem from './DeckListComponents/DeckListItem';
import { useState } from 'react';

export default function DeckList() {
	const { decks, isLoading, refresh } = useDecks();
	const [blind, setBlind] = useState(false); // HACK: works - fix later
	
	const handleDelete = (id) => {
		const confirm = window.confirm('Delete this deck?\nThis is permanent');
		if (confirm) {
			setBlind(true);
			const abort = new AbortController();
			deleteDeck(id, abort.signal)
				.then(() => refresh())
			.then(() => setBlind(false))
		}
	}
	if (isLoading || blind) {
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
