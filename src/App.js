import React, { Component } from 'react'
import DevTools from 'mobx-react-devtools'
import { Provider } from 'mobx-react'
import logo from './logo.svg'
import Navigation from './common/Navigation'
import Loader from './common/Loader'
import './App.css'
import loaderStore from './common/LoaderStore'

class App extends Component {
	render() {
		return (
		<Provider loaderStore={loaderStore}>
			<div className="app">
				<div className="app-header">
					<img src={logo} className="app-logo" alt="logo"/>
					<h2>Welcome to React</h2>
					<Navigation />
				</div>
				<Loader/>
				<p className="app-intro">
					Get started with React and MobX. The Beer tutorial.
				</p>
				{this.props.children}
				<DevTools />
			</div>
			</Provider>

		)
	}
}
export default App
