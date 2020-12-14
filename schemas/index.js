require('dotenv').config();
const mongoose = require('mongoose');
const url = `mongodb://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOST}:${process.env.DB_PORT}`;
const database = process.env.DB_NAME;
const port = process.env.DB_PORT;
const option = {
	useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}

module.exports = () => {
	const connect = () => {
		mongoose.connect(url, option, (err) => {
			if(err) console.log(err)
			else console.log('mongodb conneted')
		});
	}

	connect();

	mongoose.connection.on('error', (err) => {
		throw new Error(err);
	});

	mongoose.connection.on('disconnected', connect);

	require('./Book');
}