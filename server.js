'use strict';
require('dotenv').config()

const express = require('express');
const path = require('path');
const app = express();

const db = require('./Model/querys.js');

app.use(express.static('.'));

const port = process.env.PORT || 3002;


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '.', 'index.html'));
});


app.get('/animeContents', async (req, res) => {
    const result = await db.getAllContent();
    res.json(result);
});

app.get('/login', (req, res) => {
    res.send('user login');
})


app.listen(port, function () {
	console.log(`Server listening port ${port}`);
});
