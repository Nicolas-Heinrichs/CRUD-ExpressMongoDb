const express = require('express');
require('./models/dbConnect');
const app = express();
const fruitRoutes = require('./routes/fruit');
const userRoutes = require('./routes/user');

//remplace bodyparser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//permet d'éviter les erreurs de cors :
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/fruits', fruitRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;
//test