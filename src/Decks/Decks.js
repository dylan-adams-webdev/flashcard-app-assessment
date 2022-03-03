import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Cards from '../Cards/Cards';
import NotFound from '../Common/NotFound';
import CreateDeck from './CreateDeck';
import EditDeck from './EditDeck';
import Study from './Study';
import ViewDeck from './ViewDeck';

export default function Decks() {
	const { path } = useRouteMatch();
	return (
		<Switch>
			<Route path={`${path}/new`}>
				<CreateDeck />
			</Route>
			
			<Route exact path={`${path}/:deckId`}>
				<ViewDeck />
			</Route>

			<Route path={`${path}/:deckId/study`}>
				<Study />
			</Route>

			<Route path={`${path}/:deckId/edit`}>
				<EditDeck />
			</Route>
			
			<Route path={`${path}/:deckId/cards`}>
				<Cards />
			</Route>
			
			<Route>
				<NotFound />
			</Route>
		</Switch>
	);
}
