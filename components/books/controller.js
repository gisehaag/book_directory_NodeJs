const store = require('./store');

function addBook(data) {
	let { title, author, year } = data;

	return new Promise((resolve, reject) => {
		if (!title || !author) {
			console.error('[bookController] No hay titulo o autor del libro');
			return Promise.reject('Invalid data');
			// return false;
		}

		const newBook = {
			title,
			author,
			year,
			date: new Date,
		};

		store.add(newBook);

		resolve(newBook);
	})
}

function listBooks(filterBook) {
	return new Promise((resolve, reject) => {
		resolve(store.list(filterBook));
	})
}

function updateBook(id, data) {
	return new Promise(async (resolve, reject) => {
		console.log('[Desde controller: ]', id, data);
		if (!id || !data) {
			reject('No se puede actualizar el libro');
			return false
		}
		const result = await store.update(id, data);
		resolve(result);
	})
}

function deteleBook(id) {
	return new Promise((resolve, reject) => {
		if (!id) {
			reject('Invalid ID');
			return false;
		}

		store.remove(id)
			.then(resolve())
			.catch(e => {
				reject(e)
			});
	})
}

module.exports = {
	addBook,
	listBooks,
	updateBook,
	deteleBook,
};


