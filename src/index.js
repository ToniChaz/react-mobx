import React from 'react'
import ReactDOM from 'react-dom'
import { Router, hashHistory } from 'react-router'
import routes from './router'
import './index.css'

ReactDOM.render(
		<Router history={hashHistory}>
			{routes}
		</Router>,
	document.getElementById('root')
)
