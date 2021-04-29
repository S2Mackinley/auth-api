'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localHost:27017/food', {
	useNewURLParser: true,
	useUnifiedTopology: true,
});
const server = require('./src/server.js');

server.start(3000);
