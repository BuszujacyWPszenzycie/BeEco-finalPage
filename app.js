const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('./util/database')
const TrashItem = require('./models/trashItem')
const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

const pageRoutes = require('./routes/pageRoutes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(pageRoutes)

sequelize
	.sync()
	.then(result => {
		app.listen(3000)
	})
	.catch(err => {
		console.log(err)
	})
