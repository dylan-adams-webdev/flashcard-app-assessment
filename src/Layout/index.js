import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DeckList from '../Home/DeckList';
import Header from './Header';
import NotFound from '../Common/NotFound';
import DeckRoutes from '../Decks/DeckRoutes';

function Layout() {
	return (
		<>
			<Header />
			<div className='container'>
				<Switch>
					<Route exact path={'/'}>
						<DeckList />
					</Route>

					<Route path={'/decks'}>
						<DeckRoutes />
					</Route>
					
					<Route>
						<NotFound />
					</Route>
				</Switch>
			</div>
		</>
	);
}

export default Layout;
