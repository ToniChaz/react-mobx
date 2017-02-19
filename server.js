const express = require('express')
const webpack = require('webpack')
const path = require('path')
const PORT = process.env.PORT || 3001
const app = express()
const cors = require('cors')

let bodyParser = require('body-parser')
let beers = []

app.use(cors())
app.use(bodyParser.json())

app.get('/api/beer', (req, res) => {
	setTimeout(() => res.json({beers}), 2000)
})
app.post('/api/beer', (req, res) => {
	const beer = {id: 'beer_' + beers.length + 1, name: req.body.name, graduation: req.body.graduation}
	beers.push(beer)
	setTimeout(() => res.json(beer), 2000)
})
app.delete('/api/beer/:beerId', (req, res) => {
	beers = beers.filter(beer => beer.id !== req.params.beerId)
	setTimeout(() => res.sendStatus(204), 2000)
})

app.listen(PORT, 'localhost', (err) => {
	if (err) {
		console.error(err)
		return
	}
	console.log(`server initialized at http://localhost:${PORT}`)
})
