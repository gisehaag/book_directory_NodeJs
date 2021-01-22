const Model = require('./model');

function addBook(book) {
	const newBook = new Model(book);
	newBook.save();
}

async function listBooks(filterBook) {
	let filter = {};

	if (filterBook !== null) {

		if (filterBook.id) {
			filter._id = filterBook.id
		}

		if (filterBook.title) {
			filter.title = filterBook.title
		}

		if (filterBook.author) {
			filter.author = filterBook.author
		}

		if (filterBook.year) {
			filter.year = filterBook.year
		}

		console.log('[desde store filtrando: ]', filter);
	}

	const listBooks = await Model.find(filter);
	return listBooks;
}


async function updateBook(id, data) {
	const { title, author, year } = data;
	const foundBook = await Model.findOne({
		_id: id,
	});

	if (year) {
		foundBook.year = year;
	}

	if (title) {
		foundBook.title = title;
	}

	if (author) {
		foundBook.author = author;
	}

	const newBook = await foundBook.save();
	return newBook;
}

function removeBook(id) {
	return Model.deleteOne({
		_id: id,
	})
}

module.exports = {
	add: addBook,
	list: listBooks,
	update: updateBook,
	remove: removeBook,
}