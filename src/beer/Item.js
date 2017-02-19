import React, { Component } from 'react'

class BeerItem extends Component {
	render() {
		const { beer, loading } = this.props

		return (
			<li>
				Name: { beer.name }, Graduation: { beer.graduation }
				<button type='button' disabled={loading} onClick={()=>this.props.removeBeer(beer.id)}>Delete</button>
			</li>
		)
	}
}

export default BeerItem