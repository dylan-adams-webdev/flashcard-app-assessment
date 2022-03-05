import Card from './StudyComponents/Card';
import { useDecks } from '../Hooks/Hooks';
import LoadingSpinner from '../Common/LoadingSpinner';
import { useParams } from 'react-router-dom';
import NoDeck from './DeckErrors/CannotFindDeck';
import Breadcrumbs from './StudyComponents/Breadcrumbs';

export default function Study() {
	const { isLoading, decks } = useDecks();
	const params = useParams();

	if (isLoading) {
		return <LoadingSpinner />;
	}

	const deck = decks.find((deck) => deck.id === Number(params.deckId));
	if (deck)
		return (
			<>
				<Breadcrumbs deck={deck} />
				<h1 className='mb-3'>Study: {deck.name}</h1>
				<Card deck={deck} />
			</>
		);
	return <NoDeck />;
}
