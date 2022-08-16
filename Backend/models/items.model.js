const db = require('mongoose')

let itemsSchema = new db.Schema({
	item_name: { type: String, required: true },
	cost: { type: Number, required: true },
	quantity: { type: Number, required: true },
})

module.exports = db.model('items', itemsSchema)
