import React, { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch, useParams } from 'react-router-dom';
import NotFound from '../Common/NotFound';
import { readDeck } from '../utils/api';
import EditCard from './EditCard';
import NewCard from './NewCard';

export default function CardRoutes() {
	const { path } = useRouteMatch();
	const { deckId } = useParams();
	const [deck, setDeck] = useState(null);
	
	useEffect(() => {
		const abort = new AbortController();
		readDeck(deckId, abort.signal).then(setDeck);
		return () => abort.abort();
	}, [deckId]);
	
	return (
		<Switch>
			<Route exact path={`${path}/new`}>
				<NewCard deck={deck}/>
			</Route>

			<Route exact path={`${path}/:cardId/edit`}>
				<EditCard deck={deck}/>
			</Route>
			
			<Route>
				<NotFound />
			</Route>
		</Switch>
	);
}
