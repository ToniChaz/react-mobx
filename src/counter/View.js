import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable, action, when } from 'mobx'
import './Counter.css'

const counterStore = {
	@observable count: 0,

	@action
	incrementCount() {
		this.count++
	},

	@action
	decrementCount() {
		if (this.count < 1) return false
		this.count--
	},

	isToHigh(){
		return this.count === 10
	}
}

when(
	() => counterStore.isToHigh(),
	() => {
		alert('To high count')
	}
)

@observer
class AboutView extends Component {
	handlerIncrement() {
		counterStore.incrementCount()
	}

	handlerDecrement() {
		counterStore.decrementCount()
	}

	render() {
		return (
			<div className='counter-content'>
				<h1>The Real React Counter</h1>
				<p>Push the buttons and counting!</p>
				<p>Counter: <b>{counterStore.count}</b></p>
				<input type='button' onClick={this.handlerIncrement} value=' + '/>
				<input type='button' onClick={this.handlerDecrement} value=' - '/>
			</div>
		)
	}
}

export default AboutView