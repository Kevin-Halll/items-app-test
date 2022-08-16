class IndexController {
	static index = (req, res) => {
		res.json({
			name: 'Items List',
			version: 'v0.1.0',
		})
	}
}

module.exports = IndexController
