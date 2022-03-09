import { useState, useEffect } from 'react';
import Card from './StudyComponents/Card';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../Common/Breadcrumbs';
import { readDeck } from '../utils/api';

export default function Study() {
	const params = useParams();
	const [deck, setDeck] = useState(null);

	useEffect(() => {
		const abort = new AbortController();
		readDeck(params.deckId, abort.signal).then(setDeck);
		return () => abort.abort();
	}, [params.deckId]);

	if (!deck) return null;
	const breadcrumbLinks = [
		{ name: deck.name, address: `/decks/${deck.id}` },
		{ name: 'Study' },
	];

	return (
		<>
			<Breadcrumbs links={breadcrumbLinks} />
			<h1 className='mb-3'>Study: {deck.name}</h1>
			<Card deck={deck} />
		</>
	);
}
