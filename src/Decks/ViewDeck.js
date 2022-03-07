import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Breadcrumbs from '../Common/Breadcrumbs';
import LoadingSpinner from '../Common/LoadingSpinner';
import { useDecks } from '../Hooks/Hooks';
import { deleteDeck } from '../utils/api/index';
import NoDeck from './DeckErrors/CannotFindDeck';
import DeckCard from './ViewDeckComponents/DeckCard';
import NoCards from './ViewDeckComponents/NoCards';
import StudyCardGroup from './ViewDeckComponents/StudyCardGroup';

export default function ViewDeck() {
	const params = useParams();
	const history = useHistory();
	const { decks, isLoading } = useDecks();
	if (isLoading) return <LoadingSpinner />;
	const deck = decks.find((deck) => deck.id === Number(params.deckId));
	if (!deck) return <NoDeck />;
	const breadcrumbLinks = [{ name: deck.name }];
	const handleDeleteDeck = ({ target }) => {
		const confirm = window.confirm('Are you sure?\n This is permanent.');
		if (confirm) {
			deleteDeck(deck.id).then(history.push('/'));
		}
	};
	return (
		<>
			<Breadcrumbs links={breadcrumbLinks} />
			<DeckCard deck={deck} handleDelete={handleDeleteDeck}/>
			
			<hr className='mt-4' />

			{deck.cards.length ? (
				<>
					<h2 className='mt-1'>Cards</h2>
					<StudyCardGroup cards={deck.cards} />
				</>
			) : (
				<NoCards />
			)}
		</>
	);
}
