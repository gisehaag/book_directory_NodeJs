const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.post('/', function (req, res) {

	controller.addBook(req.body)
		.then((newBook) => {
			response.success(req, res, newBook, 201, 'Data saved successfully');
		})
		.catch(e => {
			response.error(req, res, 'Información inválida', 400, 'Error en el controlador: ' + e);
		})

});

router.get('/', function (req, res) {
	const filterBook = {
		id: req.query._id,
		title: req.query.title,
		author: req.query.author,
		year: req.query.year,
	};

	console.log('[desde network: ]', req.query, filterBook);

	controller.listBooks(filterBook)
		.then(listBooks => {
			response.success(req, res, listBooks, 200);
		})
		.catch(e => {
			response.error(req, res, 'Error interno', 500, e)
		})
});

router.put('/:id', function (req, res) {
	controller.updateBook(req.params.id, req.body)
		.then((data) => {
			response.success(req, res, data, 200);
		})
		.catch(e => {
			response.error(req, res, 'Error en controller', 500);
		})
});

router.delete('/:id', function (req, res) {
	controller.deteleBook(req.params.id)
		.then(() => {
			response.success(req, res, `The ID's book ${req.params.id} have been removed`, 200);
		})
		.catch(e => {
			response.error(req, res, 'Internal error', 500, e);
		})
})


module.exports = router;
