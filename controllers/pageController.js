const TrashItem = require('../models/trashItem')
const { Op } = require('sequelize')

exports.showMainPage = (req, res, next) => {
	res.render('index', {
		path: '/',
		pageTitle: 'Strona główna',
	})
}

exports.showFilteredItems = (req, res, next) => {
	const searchValue = req.body.searchValue
	TrashItem.findAll({
		where: {
			[Op.or]: [
				{ trashName: { [Op.like]: `%${searchValue}%` } },
				{ trashType: { [Op.like]: `%${searchValue}%` } },
				{ trashDescription: { [Op.like]: `%${searchValue}%` } },
			],
		},
	})
		.then(foundValues => {
			res.render('result', {
				pageTitle: 'Znaleziono',
				path: '/result',
				foundValues: foundValues,
			})
		})
		.catch(err => console.log(err))
}
