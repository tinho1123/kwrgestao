const mongoose = require('mongoose');

const dbConfig = 'mongodb+srv://kwr:Kwr.37537154@cluster0.cht4t.mongodb.net/kwr?retryWrites=true&w=majority';

const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection;