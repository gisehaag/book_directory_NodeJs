const config = {
	port: process.env.PORT || 3000,
	host: process.env.HOST || 'http://localhost',
	dbUrl: process.env.DB_URL || 'mongodb+srv://db_user_cursonode:' + process.env.DB_PASSWORD + '@cluster0.avdkt.mongodb.net/' + process.env.DB_NAME + '?retryWrites=true&w=majority'
}


module.exports = config;