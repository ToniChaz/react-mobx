import React, { Component } from 'react'
import { observer } from 'mobx-react'
import './Beer.css'
import beerStore from './Store'
import BeerList from './List'
import BeerForm from './Form'

@observer
class BeerView extends Component {
	render() {
		return (
			<div className='beers-content'>
				{ beerStore.report }
				<BeerList beerStore={beerStore}/>
				<hr />
				<BeerForm beerStore={beerStore}/>
			</div>
		)
	}
}

export default BeerView

