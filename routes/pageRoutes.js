const express = require('express')

const pageController = require('../controllers/pageController')

const router = express.Router()

router.get('/', pageController.showMainPage)

router.post('/result', pageController.showFilteredItems)

module.exports = router
