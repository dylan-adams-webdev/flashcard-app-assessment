import React from 'react';
import { useHistory } from 'react-router-dom';
import Breadcrumbs from './DeckFormComponents/Breadcrumbs';
import DeckForm from './DeckFormComponents/DeckForm';
import { createDeck } from '../utils/api/index';

export default function CreateDeck() {
	const history = useHistory();
	const submitHandler = (data) => {
		createDeck(data).then((res) => history.push(`/decks/${res.id}`))
	};
	return (
		<>
			<Breadcrumbs />
			<h1>Create Deck</h1>
			<DeckForm submitHandler={submitHandler} />
		</>
	);
}
