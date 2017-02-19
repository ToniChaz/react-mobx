import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { action } from 'mobx'
import BeerItem from './Item'

@observer
class BeerList extends Component {
	componentWillMount() {
		this.props.beerStore.getBeers()
	}

	@action.bound
	removeBeer(beerId) {
		this.props.beerStore.removeBeer(beerId)
	}

	@action.bound
	onSearchBeer(e) {
		this.props.beerStore.searchBeer = e.target.value
	}

	render() {
		const {beerStore} = this.props

		return (
			<div>
				<p>Filter by name: {beerStore.searchBeer}</p>
				<input type='text' value={beerStore.searchBeer} onChange={this.onSearchBeer}/>
				<ul>
					{ beerStore.filteredBeers.map(
						(beer, idx) => <BeerItem removeBeer={this.removeBeer} beer={ beer } key={ idx } loading={beerStore.loading}
						/>
					) }
				</ul>
			</div>
		)
	}
}

export default BeerList

