const getBeer = () => {
	return fetch('http://localhost:3001/api/beer', {
		method: 'GET',
		headers: new Headers({
			'Content-Type': 'application/json; charset=utf-8'
		})
	})
		.then(response => {
			if (response.ok) {
				return response.json()
			} else {
				return response.json().then(err => {
					throw err
				})
			}
		})
}

const addBeer = (beer) => {
	return fetch('http://localhost:3001/api/beer', {
		method: 'POST',
		headers: new Headers({
			'Content-Type': 'application/json; charset=utf-8'
		}),
		body: JSON.stringify(beer)
	})
		.then(response => {
			if (response.ok) {
				return response.json()
			} else {
				return response.json().then(err => {
					throw err
				})
			}
		})
}

const removeBeer = (beerId) => {
	return fetch(`http://localhost:3001/api/beer/${beerId}`, {
		method: 'DELETE'
	})
		.then(response => {
			if (response.ok) {
				return response.ok
			} else {
				return response.json().then(err => {
					throw err
				})
			}
		})
}

export default {
	getBeer,
	addBeer,
	removeBeer
}