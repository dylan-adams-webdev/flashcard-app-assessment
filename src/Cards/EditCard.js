import React from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../Common/Breadcrumbs';
import CardForm from './CardComponents/CardForm';
import { updateCard } from '../utils/api/index';
import { useHistory } from 'react-router-dom';
import NoCard from './CardErrors/NoCard';

export default function EditCard({deck}) {
	const params = useParams();
	const history = useHistory();

	const card = deck.cards.find((card) => card.id === Number(params.cardId));
	
	if (!card) return <NoCard />;

	const breadcrumbLinks = [
		{ name: deck.name, address: `/decks/${deck.id}` },
		{ name: `Edit Card #${params.cardId}` },
	];

	const submitHandler = ({ front, back }) => {
		const updatedCard = { ...card, front: front, back: back };
		updateCard(updatedCard).then(history.push(`/decks/${deck.id}`));
	};

	const initialState = { front: card.front, back: card.back };
	return (
		<>
			<Breadcrumbs links={breadcrumbLinks} />
			<h3>Edit Card</h3>
			<CardForm
				initialState={initialState}
				submitHandler={submitHandler}
			/>
		</>
	);
}
