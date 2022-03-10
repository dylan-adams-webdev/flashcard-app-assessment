import React from 'react';
import Breadcrumbs from '../Common/Breadcrumbs';
import CardForm from './CardComponents/CardForm';
import { createCard } from '../utils/api/index';

export default function NewCard({ deck }) {

	const breadCrumbLinks = [
		{ name: deck.name, address: `/decks/${deck.id}` },
		{ name: 'Add Card', address: null },
	];

	const submitHandler = (card, callback) => {
		createCard(deck.id, card).then(() => callback());
	};

	return (
		<>
			<Breadcrumbs links={breadCrumbLinks} />
			<h3>{deck.name}: Add Card</h3>
			<CardForm submitHandler={submitHandler} />
		</>
	);
}
