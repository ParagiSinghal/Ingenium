var mongoose = require('mongoose');
var schema = mongoose.Schema;

var adminSchema = schema(
	{
		username: {type: String, required: true, max: 20},
		password: {type: String, required: true, max: 15},
		// name: {type: String, required: true, max: 100},
		// date_of_birth: {type: Date}
	}
);
module.exports = mongoose.model('admin',adminSchema);