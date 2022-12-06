'use strict';
require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();

const db = require('./model/querys.js');

app.use(express.static('.'));

const port = process.env.PORT || 3002;


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '.', '../frontend/index.html'));
});


app.get('/contents', async (req, res) => {
    try {
        const result = await db.getAllContent();
        if (!result) {
            res.status(404).end();
        }
        res.json(result);

    } catch(error) {
        console.log(error);
    }
});

app.get('/login', (req, res) => {
    res.send('user login');
})


app.listen(port, function () {
	console.log(`Server listening port ${port}`);
});
