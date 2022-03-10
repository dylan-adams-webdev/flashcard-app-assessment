import React from 'react';
import { useHistory} from 'react-router-dom';
import Breadcrumbs from '../Common/Breadcrumbs';
import DeckForm from './DeckFormComponents/DeckForm';
import { createDeck } from '../utils/api/index';

export default function CreateDeck() {
	const history = useHistory();
	const breadCrumbAddresses = [{ name: 'Create Deck' }];
	
	const submitHandler = (data) => {
		createDeck(data).then((res) => history.push(`/decks/${res.id}`));
	};
	
	return (
		<>
			<Breadcrumbs links={breadCrumbAddresses} />
			<h1>Create Deck</h1>
			<DeckForm submitHandler={submitHandler} />
		</>
	);
}
