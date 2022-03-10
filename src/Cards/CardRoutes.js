import React, { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch, useParams } from 'react-router-dom';
import LoadingSpinner from '../Common/LoadingSpinner';
import NotFound from '../Common/NotFound';
import GenericError from '../Common/NotFound';
import CannotFindDeck from '../Common/CannotFindDeck';
import { readDeck } from '../utils/api';
import EditCard from './EditCard';
import NewCard from './NewCard';

export default function CardRoutes() {
	const { path } = useRouteMatch();
	const { deckId } = useParams();
	const [deck, setDeck] = useState(null);
	const [error, setError] = useState(null);
	
	useEffect(() => {
		const abort = new AbortController();
		readDeck(deckId, abort.signal).then(setDeck).catch(setError);
		return () => abort.abort();
	}, [deckId]);
	
	if(!deck && !error) return <LoadingSpinner />
	if (error) {
		if (error.message.includes('404')) {
			return <CannotFindDeck />;
		} else {
			return <GenericError msg={'There was an anomaly...'} />;
		}
	}
	
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
