import { useState, useEffect } from 'react';
import Card from './StudyComponents/Card';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../Common/Breadcrumbs';
import { readDeck } from '../utils/api';
import LoadingSpinner from '../Common/LoadingSpinner';
import CannotFindDeck from '../Common/CannotFindDeck';
import GenericError from '../Common/GenericError';

export default function Study() {
	const params = useParams();
	const [deck, setDeck] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const abort = new AbortController();
		readDeck(params.deckId, abort.signal).then(setDeck).catch(setError);
		return () => abort.abort();
	}, [params.deckId]);

	if (!deck && !error) return <LoadingSpinner />;
	if (error) {
		if (error.message.includes('404')) {
			return <CannotFindDeck />;
		} else {
			return <GenericError msg={'There was an anomaly...'} />;
		}
	}
	
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
