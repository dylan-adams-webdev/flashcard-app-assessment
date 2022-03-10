import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Breadcrumbs from '../Common/Breadcrumbs';
import { deleteCard, deleteDeck, readDeck } from '../utils/api/index';
import CannotFindDeck from '../Common/CannotFindDeck';
import DeckCard from './ViewDeckComponents/DeckCard';
import NoCards from './ViewDeckComponents/NoCards';
import StudyCardGroup from './ViewDeckComponents/StudyCardGroup';
import LoadingSpinner from '../Common/LoadingSpinner';
import EmptyWithMsg from '../Common/EmptyWithMsg';
import GenericError from '../Common/GenericError';

export default function ViewDeck() {
	const params = useParams();
	const history = useHistory();
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

	const breadcrumbLinks = [{ name: deck.name }];

	const handleDeleteDeck = ({ target }) => {
		const confirm = window.confirm('Are you sure?\nThis is permanent.');
		if (confirm) {
			deleteDeck(deck.id).then(history.push('/'));
		}
	};

	const handleDeleteCard = (id) => {
		const confirm = window.confirm('Are you sure?\nThis is permanent.');
		if (confirm) {
			deleteCard(id).then(() => readDeck(deck.id).then(setDeck));
		}
	};

	return (
		<>
			<Breadcrumbs links={breadcrumbLinks} />
			<DeckCard deck={deck} handleDeleteDeck={handleDeleteDeck} />

			<hr className='mt-4' />

			{deck.cards.length ? (
				<>
					<h2 className='mt-1'>Cards</h2>
					<StudyCardGroup
						cards={deck.cards}
						handleDeleteCard={handleDeleteCard}
					/>
				</>
			) : (
				<NoCards />
			)}
		</>
	);
}
