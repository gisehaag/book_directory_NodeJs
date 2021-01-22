require('dotenv').config();

const express = require('express');
const app = express();

const server = require('http').Server(app);
const config = require('./config');
const db = require('./db');
const router = require('./network/routes');

db(config.dbUrl);

app.use(express.json()); //desde la version de express 4.16 no se requiere instalar bodyparser para poder recibir la req es formato json

router(app);

app.use('/', express.static('public'));

server.listen(config.port, () => {
	console.log('La app está escuchando en: ' + config.host + ':' + config.port);
})

