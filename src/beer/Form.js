import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class BeerForm extends Component {
	addBeer() {
		let beer = {
			name: this.refs.name.value,
			graduation: this.refs.graduation.value
		}
		this.props.beerStore.addBeer(beer)
		this.refs.name.value = ''
		this.refs.graduation.value = ''
	}

	render() {
		const {beerStore} = this.props

		return (
			<div>
				<label>Name: </label>
				<input ref='name' type='text'/>
				<label>Graduation: </label>
				<input ref='graduation' type='text'/>
				<button type='button' disabled={ beerStore.loading } onClick={this.addBeer.bind(this)}>Add beer</button>
			</div>
		)
	}
}

export default BeerForm

