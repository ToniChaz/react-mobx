import { autorun, observable, computed, action } from 'mobx'
import beerService from './service'
import loaderStore from '../common/LoaderStore'

//useStrict(true)

class Beer {
	@observable name
	@observable graduation

	constructor(beer) {
		this.name = beer.name
		this.graduation = beer.graduation
	}
}

class BeerStore {
	@observable beers = []
	@observable searchBeer = ''
	@observable loading = false

	constructor() {
		autorun(() => console.log(this.report))
		//autorun(() => alert(this.report))
	}

	@computed get report() {
		if (this.beers.length === 0)
			return "¡No beer!"
		return this.beers.map((beer) => `${beer.name} `)
	}

	@computed get filteredBeers() {
		let matchesBeer = new RegExp(this.searchBeer, 'i')
		return this.beers.filter(beer => !this.searchBeer || matchesBeer.test(beer.name))
	}

	@action('Get beers from server')
	getBeers() {
		this.loading = true
		loaderStore.setLoading()
		beerService.getBeer().then((response) => {
			this.beers.replace(response.beers)
			this.loading = false
			loaderStore.setLoading()
		})
	}

	@action addBeer(beer) {
		loaderStore.setLoading()
		this.loading = true
		beerService.addBeer(beer).then((response) => {
			this.beers.push(new Beer(response))
			this.loading = false
			loaderStore.setLoading()
		})
	}

	@action removeBeer(beerId) {
		loaderStore.setLoading()
		this.loading = true
		beerService.removeBeer(beerId).then(() => {
			let newBeers = this.beers.filter(beer => beer.id !== beerId)
			this.beers.replace(newBeers)
			this.loading = false
			loaderStore.setLoading()
		})
	}
}

const beerStore = window.beerStore = new BeerStore()

export default beerStore
