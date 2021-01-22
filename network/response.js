// const statusMessages = {
// 	'200': 'Done',
// 	'201': 'Created',
// 	'400': 'Invalid format',
// 	'500': 'Internal error'
// }

module.exports.success = function (req, res, message, status, details) {
	// let statusCode = status;
	// let statusMessage = message;

	// if (!status) {
	// 	status = 200;
	// }

	// if (!message) {
	// 	statusMessage = statusMessages[status]
	// }
	console.log(`[Response: ] ${details}`)
	res.status(status).send({
		error: '',
		body: message,
	});
}

module.exports.error = function (req, res, message, status, details) {
	// let statusCode = status;
	// let statusMessage = message;

	// if (!status) {
	// 	status = 500;
	// }

	// if (!message) {
	// 	statusMessage = statusMessages[status]
	// }

	console.error(`[Response Error: ] ${details}`);
	res.status(status).send({
		error: message,
		body: '',
	});
}
