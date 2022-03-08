import { Switch, Route, useRouteMatch } from 'react-router-dom';
import CardRoutes from '../Cards/CardRoutes';
import NotFound from '../Common/NotFound';
import CreateDeck from './CreateDeck';
import EditDeck from './EditDeck';
import Study from './Study';
import ViewDeck from './ViewDeck';

export default function DeckRoutes() {
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
				<CardRoutes />
			</Route>

			<Route>
				<NotFound />
			</Route>
		</Switch>
	);
}
