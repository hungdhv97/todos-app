const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');
const cors = require('cors');
const todoRoutes = require('./routes/todos');

const app = express();

// Use body-parser middleware
app.use(bodyParser.json());
app.use(cors());

// Use the todo routes
app.use('/api/todos', todoRoutes);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
