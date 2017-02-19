import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import logo from '../logo.svg'
import '../App.css'
import './Loader.css'

@inject('loaderStore')
@observer
class Loader extends Component {
	render() {
		const { loaderStore } = this.props
		const classnames = `loader-content${loaderStore.loading ? '' : ' hidden'}`

		return (
			<div className={classnames}>
					<img src={logo} className="app-logo" alt="logo"/>
			</div>
		)
	}
}
export default Loader