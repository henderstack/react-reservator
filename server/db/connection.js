const mongoose = require('mongoose');
const keys = require('../config/keys');

module.exports = function () {
    mongoose.Promise = global.Promise;
    var db = mongoose.connect(keys.mongoURI);
    mongoose.connection.on('error', function (err) {
        console.log('Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red);
    }).on('open', function () {
        console.log('Connection establised with MongoDB')
    })
    return db;
};
