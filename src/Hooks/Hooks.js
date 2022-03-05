import { useState, useEffect, useCallback } from 'react';
import { deleteDeck, listDecks } from '../utils/api';

export function useDecks() {
	const [decks, setDecks] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [hasChanged, setHasChanged] = useState(true);

	useEffect(() => {
		const abort = new AbortController();
		setIsLoading(true);
		listDecks(abort.signal)
			.then(setDecks)
			.then(setHasChanged)
			.then(() => setIsLoading(false))
			.catch(console.error);
		return () => abort.abort();
	}, []);

	const refresh = () => {
		setIsLoading(true);
		listDecks()
			.then(setDecks)
			.then(() => setIsLoading(false))
			.catch(console.error);
	};

	return {
		decks,
		isLoading,
		hasChanged,
		refresh: useCallback(refresh, []),
	};
}
