var mongoose = require('mongoose');
var config = require('./config');
var database_url = config.database_url;
//TODO: take database url from config
mongoose.createConnection('mongodb://localhost/mydb', {useMongoClient: true});
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error: '));
console.log('Connected to dataase');
module.exports = db;