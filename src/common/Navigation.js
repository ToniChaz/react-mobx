import React, { Component } from 'react'
import { Link } from 'react-router'
import './Navigation.css'

class Navigation extends Component {
	render() {
		return (
			<ul className='navigation-content'>
				<li><Link to="/beer">Beer</Link></li>
				<li><Link to="/counter">Counter</Link></li>
			</ul>
		)
	}
}
export default Navigation