const express = require('express')
const router = express.Router()
const {
	createItem,
	deleteItemsById,
	getAllItems,
	getItemsById,
	updateItem
} = require('../controllers/items.controller')

// Item Route
router.route('/items_list').post(createItem).get(getAllItems)
router.route('/items_list/:id').delete(deleteItemsById).get(getItemsById).patch(updateItem)

module.exports = router
