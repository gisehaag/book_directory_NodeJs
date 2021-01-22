const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
	title: String,
	author: String,
	year: Number,
	date: Date,
	// language: String,
	// country: String,
	// pages: Number,
	// link: String,
});

const Model = mongoose.model('books', mySchema);
module.exports = Model;