import { useState, useEffect } from 'react';
import { listDecks } from '../utils/api';

export function useDecks() {
	const [decks, setDecks] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const abort = new AbortController();
		setIsLoading(true);
		listDecks(abort.signal)
			.then(setDecks)
			.then(() => setIsLoading(false))
			.catch(console.error);
		return () => abort.abort();
	}, []);
	return { decks, isLoading };
}
