import Card from './StudyComponents/Card';
import { useDecks } from '../Hooks/Hooks';
import LoadingSpinner from '../Common/LoadingSpinner';
import { useParams } from 'react-router-dom';
import NoDeck from '../Common/NoDeck';

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
				<Card content={decks} />
			</>
		);
	return <NoDeck />;
}
