import React from 'react'
import { Route, IndexRedirect } from 'react-router'
import App from './App'
import Beer from './beer/View'
import Counter from './counter/View'

export default (
	<Route path="/" component={App}>
		<IndexRedirect to="/beer"/>
		<Route path="/beer" component={Beer}/>
		<Route path="/counter" component={Counter}/>
	</Route>
)


