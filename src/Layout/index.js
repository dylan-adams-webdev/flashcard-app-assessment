import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DeckList from '../Decks/DeckList';
import Header from './Header';
import NotFound from '../Common/NotFound';
import Decks from '../Decks/Decks';

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
						<Decks />
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
