import React from 'react'
import { Route, useRouteMatch } from 'react-router-dom'

export default function Cards() {
	const { path } = useRouteMatch();
  return (
	  <Route path={`${path}/:cardId/edit`}>
		  
	</Route>
  )
}
