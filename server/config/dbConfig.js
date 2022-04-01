const mongoose = require('mongoose');

const dbConfig = process.env.DBCONFIG;

const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection;