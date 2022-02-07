const mongoose = require("mongoose");

const planetsSchema = new mongoose.Schema({
	keplerName: {
		type: String,
		required: true,
	},
});

// Connects planetsSchema with the "launches" collection
module.exports = mongoose.model("Planet", planetsSchema);
