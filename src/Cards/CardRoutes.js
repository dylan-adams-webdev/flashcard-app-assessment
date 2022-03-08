import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../Common/NotFound';
import EditCard from './EditCard';
import NewCard from './NewCard';

export default function CardRoutes() {
	const { path } = useRouteMatch();
	return (
		<Switch>
			<Route exact path={`${path}/new`}>
				<NewCard />
			</Route>

			<Route exact path={`${path}/:cardId/edit`}>
				<EditCard />
			</Route>
			
			<Route>
				<NotFound />
			</Route>
		</Switch>
	);
}
