import { observable, action } from 'mobx'

class LoaderStore {
	@observable loading = false

	@action setLoading() {
		this.loading = !this.loading
	}
}

export default new LoaderStore()