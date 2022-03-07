import Card from './StudyComponents/Card';
import { useDecks } from '../Hooks/Hooks';
import LoadingSpinner from '../Common/LoadingSpinner';
import { useParams } from 'react-router-dom';
import CannotFindDeck from '../Common/CannotFindDeck';
import Breadcrumbs from '../Common/Breadcrumbs';

export default function Study() {
	const { isLoading, decks } = useDecks();
	const params = useParams();

	if (isLoading) {
		return <LoadingSpinner />;
	}

	if (!decks.length) return <CannotFindDeck />;

	const deck = decks.find((deck) => deck.id === Number(params.deckId));

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
