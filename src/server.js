'use strict';

const express = require('express');

const notFounderHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');

const v1Routes = require('./routes/v1');

const app = express();

app.use(express.json());

app.use(logger);

app.use('/api/v1', v1Routes);

app.use('*', notFounderHandler);
app.use(errorHandler);

module.exports = {
	server: app,
	start: (port) => {
		if (!port) {
			throw new Error('Missing Port');
		}
		app.listen(port, () => console.log(`listening on ${port}`));
	},
};
