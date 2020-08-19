const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
	{
		id: mongoose.Schema.Types.ObjectId,
		name: String,
	},
	{ timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
