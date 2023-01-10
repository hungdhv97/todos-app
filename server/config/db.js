const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

// Set up the database connection
mongoose.connect('mongodb+srv://hungdhv97:hung23081997@cluster0.pxjti4x.mongodb.net/todos-app?retryWrites=true&w=majority', { useNewUrlParser: true });

// Get the connection object
const db = mongoose.connection;

// Set up the connection error event
db.on('error', console.error.bind(console, 'connection error:'));

// Set up the connection success event
db.once('open', function () {
    console.log('Connected to the database');
});

module.exports = db;
